# tony
Tony Olugbusi

A polished Next.js portfolio for Tony Olugbusi, built with the App Router, Tailwind, Framer Motion, and a contact form backed by email delivery plus rate limiting.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out the [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
