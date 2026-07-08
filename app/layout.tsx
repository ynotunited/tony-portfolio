import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Tony - Senior Full-Stack SaaS Engineer',
  description:
    'Senior Full-Stack SaaS Engineer specializing in scalable SaaS platforms, APIs, and business automation systems. PHP, Laravel, Next.js, TypeScript, Node.js.',
  keywords: [
    'Full-Stack Engineer',
    'SaaS Developer',
    'Laravel Expert',
    'Next.js Developer',
    'Backend Engineer',
    'API Development',
    'System Architecture',
  ],
  authors: [{ name: 'Tony' }],
  creator: 'Tony',
  openGraph: {
    title: 'Tony - Senior Full-Stack SaaS Engineer',
    description:
      'I build scalable SaaS platforms, APIs, and business automation systems.',
    type: 'website',
    locale: 'en_US',
    siteName: "Tony's Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tony - Senior Full-Stack SaaS Engineer',
    description:
      'I build scalable SaaS platforms, APIs, and business automation systems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-text-primary font-sans antialiased noise">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YD6Z6HCYMG"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YD6Z6HCYMG');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
