# tony
Tony Olugbusi

A portfolio site for Tony Olugbusi, Senior Full-Stack SaaS Engineer.

It showcases featured work, services, experience, and a contact funnel with email delivery, honeypot protection, and Upstash-backed rate limiting.

## What’s Inside

- Hero, about, featured project, projects, services, experience, and contact sections
- Animated UI built with Framer Motion and Tailwind CSS
- Contact form routed through `app/api/contact`
- Responsive layout tuned for desktop and mobile visitors

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Edit `app/page.tsx` to change the homepage. The page updates as you save.

The app uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load [Geist](https://vercel.com/font) automatically.

## Environment

The contact form uses email credentials and Upstash-backed rate limiting. Set these in your local `.env.local` or hosting provider:

```bash
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
SMTP_HOST=smtp.example.com
SMTP_PORT=465
UPSTASH_REDIS_REST_URL=https://your-upstash-endpoint
UPSTASH_REDIS_REST_TOKEN=your-upstash-token
```

## Deploy

This app deploys cleanly to Vercel or any host that supports Next.js 16 App Router apps.

Before deploying, set the environment variables above in your production environment.

Recommended deploy checklist:

1. Verify `npm run build` passes locally.
2. Add the production email and Upstash credentials.
3. Push to your `main` branch.
4. Connect the GitHub repo to your hosting provider and deploy.
