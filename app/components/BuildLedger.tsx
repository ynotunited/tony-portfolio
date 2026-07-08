'use client'

import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle2, BookOpen } from 'lucide-react'
import { SpotlightCard } from './ui/SpotlightCard'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

const tags = ['Laravel', 'Next.js', 'MySQL', 'TypeScript', 'Docker', 'Nginx']

const proofTags = [
  'Production ready',
  'Multi-tenant',
  'Role-based access',
  'REST API',
  'Dockerized',
  'Hosted on VPS',
]

const features = [
  'Multi-tenant architecture with full data isolation',
  'Role-based access control & authentication system',
  'Invoice, contract & proposal management',
  'Integrated payment workflows',
  'Client portal & project tracking',
  'Admin analytics dashboard',
]

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

interface ScreenshotProps {
  src: string
  alt: string
  label: string
}

function Screenshot({ src, alt, label }: ScreenshotProps) {
  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/[0.07] aspect-video cursor-zoom-in">
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-300 flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium tracking-wide border border-white/30 rounded-full px-4 py-2 backdrop-blur-sm">
          View Full Screenshot
        </span>
      </div>
    </div>
  )
}

export default function BuildLedger() {
  return (
    <section id="buildledger" className="relative section-padding section-surface">
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="mb-12">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-4 block">
              Featured Project
            </span>
          </Reveal>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <Reveal delay={0.05}>
              <div>
                <h2 className="text-display-md text-white">BuildLedger</h2>
                <p className="text-text-muted text-sm mt-1 font-mono uppercase tracking-widest">
                  Production SaaS Platform
                </p>
              </div>
            </Reveal>

            {/* Three action buttons */}
            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  href="https://buildledger.madeitcodes.online"
                  variant="secondary"
                  external
                  onClick={() =>
                    trackEvent('cta_click', {
                      cta_label: 'buildledger_live_demo',
                      cta_location: 'featured_project',
                    })
                  }
                >
                  Live Demo
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </Button>
                <a
                  href="https://github.com/ynotunited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text-secondary border border-white/10 rounded-xl hover:border-white/20 hover:text-white transition-all duration-150"
                >
                  <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  GitHub
                </a>
                <Link
                  href="/projects/buildledger"
                  onClick={() =>
                    trackEvent('cta_click', {
                      cta_label: 'buildledger_case_study',
                      cta_location: 'featured_project',
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text-secondary border border-white/10 rounded-xl hover:border-white/20 hover:text-white transition-all duration-150"
                >
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  Case Study
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <p className="mt-5 text-text-secondary text-lg leading-relaxed max-w-2xl">
              Multi-tenant SaaS platform for managing invoices, proposals,
              contracts, payments, and full client workflows - from first contact
              to final payment.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap gap-2">
              {proofTags.map((tag) => (
                <span key={tag} className="proof-chip">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Main content: bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Large screenshot - dashboard */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <SpotlightCard className="section-card h-full">
              <div className="p-4">
                <Screenshot
                  src="/buildledger/dashboard.png"
                  alt="BuildLedger Dashboard"
                  label="Dashboard View"
                />
                <p className="mt-2 text-[10px] text-text-muted font-mono uppercase tracking-wider">
                  Dashboard View
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Right column: features + tech */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Features */}
            <Reveal delay={0.15}>
              <SpotlightCard className="section-card flex-1">
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-muted mb-4">
                    Core Features
                  </p>
                  <ul className="space-y-2.5">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-text-secondary text-sm leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Tech stack */}
            <Reveal delay={0.2}>
              <SpotlightCard className="section-card">
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-muted mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Bottom row: two smaller screenshots */}
          <Reveal delay={0.18} className="lg:col-span-2">
            <SpotlightCard className="glass border border-white/[0.07]">
              <div className="p-4">
                <Screenshot
                  src="/buildledger/invoices.png"
                  alt="BuildLedger Invoices"
                  label="Invoices"
                />
                <p className="mt-2 text-[10px] text-text-muted font-mono uppercase tracking-wider">
                  Invoices
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.22} className="lg:col-span-3">
            <SpotlightCard className="glass border border-white/[0.07]">
              <div className="p-4">
                <Screenshot
                  src="/buildledger/contracts.png"
                  alt="BuildLedger Contracts"
                  label="Contracts"
                />
                <p className="mt-2 text-[10px] text-text-muted font-mono uppercase tracking-wider">
                  Contracts
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
