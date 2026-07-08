'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, ArrowRight } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'
import { trackEvent } from '@/lib/analytics'

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

interface FormState {
  name: string
  email: string
  message: string
  company: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    company: '',
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    setSending(true)
    trackEvent('contact_form_submit', {
      form_location: 'contact_section',
    })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
      } else {
        const payload = await res.json().catch(() => null)
        setSubmitError(
          payload?.error ||
            'Failed to send message. Please try again or email me directly.'
        )
      }
    } catch (error) {
      setSubmitError('An error occurred. Please try again or email me directly.')
    } finally {
      setSending(false)
    }
  }

  const inputBase =
    'w-full bg-transparent text-white text-sm placeholder:text-text-muted px-0 py-3 border-b outline-none transition-all duration-200'

  const getInputClass = (name: string) =>
    `${inputBase} ${
      focused === name
        ? 'border-white/50'
        : 'border-white/[0.08] hover:border-white/20'
    }`

  return (
    <section id="contact" className="relative section-padding section-surface-alt">
      {/* Top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container-max relative z-10">
        {/* Big CTA */}
        <div className="text-center mb-16 max-w-3xl mx-auto px-4">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-6 block">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-bold tracking-tight leading-[1.2] text-white mb-6 text-balance">
              Great software isn&apos;t just built—it&apos;s{' '}
              <span className="text-gradient">engineered for growth.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8 text-balance">
              Have a project in mind? I&apos;m open to new opportunities. Drop me a
              message and let&apos;s talk.
            </p>
            <p className="text-text-muted text-sm">
              Usually responds within 24 hours.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button
                href="mailto:tonyolugbusi@madeitcodes.online"
                variant="primary"
                onClick={() =>
                  trackEvent('cta_click', {
                    cta_label: 'send_email',
                    cta_location: 'contact_section',
                  })
                }
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Send an Email
              </Button>
              <Button
                href="https://github.com/ynotunited"
                variant="secondary"
                external
                onClick={() =>
                  trackEvent('cta_click', {
                    cta_label: 'github',
                    cta_location: 'contact_section',
                  })
                }
              >
                <GithubIcon className="w-4 h-4" aria-hidden="true" />
                GitHub
              </Button>
              <Button
                href="https://www.linkedin.com/in/tony-o-825992243"
                variant="secondary"
                external
                onClick={() =>
                  trackEvent('cta_click', {
                    cta_label: 'linkedin',
                    cta_location: 'contact_section',
                  })
                }
              >
                <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
                LinkedIn
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.2}>
          <div className="max-w-xl mx-auto">
            <div
              className="section-card p-6 sm:p-8"
            >
              {submitError && !sent && (
                <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                  {submitError}
                </div>
              )}
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className="text-center py-8"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Message sent!</h3>
                  <p className="text-text-secondary text-sm mb-6 max-w-md mx-auto">
                    Thanks for reaching out! You can also message me directly on WhatsApp for a faster response.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                      href="https://cal.com/tony-olugbusi-tpujta/30min"
                      variant="secondary"
                      external
                      onClick={() =>
                        trackEvent('cta_click', {
                          cta_label: 'schedule_call',
                          cta_location: 'contact_success',
                        })
                      }
                    >
                      Schedule a Call
                    </Button>
                    <Button
                      href="https://wa.me/2347033864782?text=Hi%20Tony,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                      variant="primary"
                      external
                      onClick={() =>
                        trackEvent('cta_click', {
                          cta_label: 'whatsapp',
                          cta_location: 'contact_success',
                        })
                      }
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-6">
                    <div className="sr-only" aria-hidden="true">
                      <label htmlFor="company">Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                      />
                    </div>

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs text-text-muted mb-1 uppercase tracking-wider"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className={getInputClass('name')}
                        autoComplete="name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs text-text-muted mb-1 uppercase tracking-wider"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className={getInputClass('email')}
                        autoComplete="email"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs text-text-muted mb-1 uppercase tracking-wider"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        placeholder="Tell me about your project..."
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className={`${getInputClass('message')} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={sending || !form.name || !form.email || !form.message}
                      className="w-full"
                    >
                      {sending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.23}>
          <div className="mt-16 section-card p-6 sm:p-8 text-center max-w-3xl mx-auto">
            <p className="text-text-secondary text-lg mb-5">
              Have an idea? Let&apos;s build it together.
            </p>
            <Button
              href="https://cal.com/tony-olugbusi-tpujta/30min"
              variant="glow"
              external
              onClick={() =>
                trackEvent('cta_click', {
                  cta_label: 'discovery_call',
                  cta_location: 'footer_cta',
                })
              }
            >
              Schedule a Discovery Call
            </Button>
          </div>
        </Reveal>

        {/* Footer */}
        <Reveal delay={0.25}>
          <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-xs">
              © {new Date().getFullYear()} Tony. All rights reserved.
            </p>
            <p className="text-text-muted text-xs">
              Built with Next.js · Tailwind · Framer Motion
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
