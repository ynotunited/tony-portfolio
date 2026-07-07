'use client'

import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'
import { proofMetrics, trustedTechnologies } from '@/app/data/portfolioData'

export default function ProofStrip() {
  return (
    <section className="relative section-padding pt-10">
      <div className="container-max">
        <div className="section-surface rounded-[2rem] px-5 py-6 sm:px-8 sm:py-8">
          <StaggerContainer staggerDelay={0.06}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-center">
              <div className="lg:col-span-2">
                <Reveal>
                  <span className="text-xs uppercase tracking-[0.16em] text-text-muted block mb-3">
                    Proof
                  </span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight max-w-md">
                    Built around delivery, reliability, and the tools teams already trust.
                  </h2>
                </Reveal>
              </div>

              <div className="lg:col-span-3 grid grid-cols-2 xl:grid-cols-4 gap-3">
                {proofMetrics.map((metric) => (
                  <StaggerItem key={metric.label}>
                    <div className="proof-metric h-full">
                      <p className="text-xl sm:text-2xl font-semibold text-white">
                        {metric.value}
                      </p>
                      <p className="text-xs text-text-muted mt-1">{metric.label}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </StaggerContainer>

          <div className="mt-6 pt-6 border-t border-white/[0.06]">
            <Reveal delay={0.08}>
              <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-3">
                Trusted Technologies
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {trustedTechnologies.map((tech) => (
                  <span key={tech} className="proof-chip">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
