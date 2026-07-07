'use client'

import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { SpotlightCard } from './ui/SpotlightCard'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'

const tags = ['Laravel', 'Next.js', 'MySQL', 'TypeScript', 'Docker', 'Nginx']

const features = [
  'Multi-tenant architecture with full data isolation',
  'Role-based access control & authentication system',
  'Invoice, contract & proposal management',
  'Integrated payment workflows',
  'Client portal & project tracking',
  'Admin analytics dashboard',
]

// Abstract "screenshot" placeholders using CSS
function ScreenshotPlaceholder({
  label,
  accent = false,
}: {
  label: string
  accent?: boolean
}) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-white/[0.07] ${accent ? 'bg-gradient-to-br from-[#0f1729] to-[#0a0a0a]' : 'bg-[#0d0d0d]'} aspect-video flex flex-col`}
    >
      {/* Fake toolbar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06]">
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="ml-2 h-1.5 w-24 rounded-full bg-white/[0.06]" />
      </div>
      {/* Fake content lines */}
      <div className="flex-1 p-3 space-y-2">
        <div className="h-2 w-3/4 rounded-full bg-white/[0.05]" />
        <div className="h-2 w-1/2 rounded-full bg-white/[0.04]" />
        <div className="grid grid-cols-3 gap-2 mt-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-8 rounded-lg"
              style={{
                background: `rgba(37,99,235,${0.04 + i * 0.02})`,
                border: '1px solid rgba(37,99,235,0.12)',
              }}
            />
          ))}
        </div>
        <div className="h-px bg-white/[0.04] my-2" />
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-accent/30 flex-shrink-0" />
            <div
              className="h-1.5 rounded-full bg-white/[0.04]"
              style={{ width: `${60 + i * 10}%` }}
            />
          </div>
        ))}
      </div>
      {/* Label */}
      <div className="absolute bottom-2 right-2">
        <span className="text-[9px] text-text-muted font-mono uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  )
}

export default function BuildLedger() {
  return (
    <section id="buildledger" className="relative section-padding">
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
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <Reveal delay={0.05}>
              <h2 className="text-display-md text-white">BuildLedger</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Button
                href="https://buildledger.madeitcodes.online"
                variant="secondary"
                external
              >
                Live Platform
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed max-w-2xl">
              Multi-tenant SaaS platform for managing invoices, proposals,
              contracts, payments, and full client workflows - from first contact
              to final payment.
            </p>
          </Reveal>
        </div>

        {/* Main content: bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Large screenshot */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <SpotlightCard className="glass border border-white/[0.07] h-full">
              <div className="p-4">
                <ScreenshotPlaceholder label="dashboard.tsx" accent />
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Right column: features + tech */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Features */}
            <Reveal delay={0.15}>
              <SpotlightCard className="glass border border-white/[0.07] flex-1">
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
                        <span className="text-text-secondary text-sm leading-snug">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Tech stack */}
            <Reveal delay={0.2}>
              <SpotlightCard className="glass border border-white/[0.07]">
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

          {/* Bottom row: two smaller screens */}
          <Reveal delay={0.18} className="lg:col-span-2">
            <SpotlightCard className="glass border border-white/[0.07]">
              <div className="p-4">
                <ScreenshotPlaceholder label="invoices.tsx" />
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.22} className="lg:col-span-3">
            <SpotlightCard className="glass border border-white/[0.07]">
              <div className="p-4">
                <ScreenshotPlaceholder label="contracts.tsx" />
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
