import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { isIP } from 'node:net'

const WINDOW_SECONDS = 10 * 60
const MAX_ATTEMPTS_PER_WINDOW = 3
const LOCAL_RATE_LIMIT_WINDOW_MS = WINDOW_SECONDS * 1000
const localRateLimitStore = new Map<string, { count: number; windowStart: number }>()

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function parseIpCandidate(value: string | null | undefined) {
  if (!value) return null

  const trimmed = value.trim()
  const normalized = trimmed.startsWith('[') && trimmed.endsWith(']')
    ? trimmed.slice(1, -1)
    : trimmed

  return isIP(normalized) ? normalized : null
}

function getClientIp(req: Request) {
  const trustedHeaders = [
    req.headers.get('cf-connecting-ip'),
    req.headers.get('x-vercel-forwarded-for'),
    req.headers.get('x-forwarded-for'),
    req.headers.get('x-real-ip'),
  ]

  for (const headerValue of trustedHeaders) {
    if (!headerValue) continue

    const candidates = headerValue
      .split(',')
      .map((candidate) => parseIpCandidate(candidate))
      .filter((candidate): candidate is string => Boolean(candidate))

    if (candidates.length > 0) {
      return candidates[0]
    }
  }

  return 'unknown'
}

function getRateLimitKey(ip: string) {
  return `contact:${ip}`
}

async function isRateLimited(req: Request) {
  const ip = getClientIp(req)
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!upstashUrl || !upstashToken) {
    if (process.env.NODE_ENV === 'development') {
      const now = Date.now()
      const currentAttempt = localRateLimitStore.get(ip)

      if (!currentAttempt || now - currentAttempt.windowStart > LOCAL_RATE_LIMIT_WINDOW_MS) {
        localRateLimitStore.set(ip, { count: 1, windowStart: now })
        return { limited: false, ip, mode: 'local' as const }
      }

      if (currentAttempt.count >= MAX_ATTEMPTS_PER_WINDOW) {
        return { limited: true, ip, mode: 'local' as const }
      }

      currentAttempt.count += 1
      localRateLimitStore.set(ip, currentAttempt)
      return { limited: false, ip, mode: 'local' as const }
    }

    return { limited: true, ip, mode: 'unconfigured' as const }
  }

  const key = getRateLimitKey(ip)
  const headers = {
    Authorization: `Bearer ${upstashToken}`,
    'Content-Type': 'application/json',
  }

  const incrResponse = await fetch(`${upstashUrl}/incr/${encodeURIComponent(key)}`, {
    method: 'POST',
    headers,
  })

  if (!incrResponse.ok) {
    throw new Error(`Upstash INCR failed with status ${incrResponse.status}`)
  }

  const incrPayload = (await incrResponse.json()) as { result?: number }
  const count = Number(incrPayload.result ?? 0)

  if (count === 1) {
    const expireResponse = await fetch(`${upstashUrl}/expire/${encodeURIComponent(key)}/${WINDOW_SECONDS}`, {
      method: 'POST',
      headers,
    })

    if (!expireResponse.ok) {
      throw new Error(`Upstash EXPIRE failed with status ${expireResponse.status}`)
    }
  }

  return { limited: count > MAX_ATTEMPTS_PER_WINDOW, ip, mode: 'upstash' as const }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, company } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (typeof company === 'string' && company.trim().length > 0) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 })
    }

    const rateLimit = await isRateLimited(req)

    if (rateLimit.limited) {
      return NextResponse.json(
        { error: 'Too many messages. Please try again later.' },
        { status: 429 }
      )
    }

    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS

    if (!emailUser || !emailPass) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          'EMAIL_USER or EMAIL_PASS is missing. Skipping email delivery in development.'
        )
        console.log('Submission details:', { name, email, message })
        return NextResponse.json({ success: true, mocked: true, rateLimit: rateLimit.mode })
      }

      return NextResponse.json(
        { error: 'Contact delivery is not configured' },
        { status: 503 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })

    const mailOptions = {
      from: emailUser,
      to: 'tonyolugbusi@madeitcodes.online',
      subject: `New Portfolio Contact from ${escapeHtml(name)}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, rateLimit: rateLimit.mode })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
