'use client'

import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'
import { experiences } from '@/app/data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-4 block">
              Experience
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display-md text-white">
              Systems I&apos;ve shipped.
            </h2>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 15%, rgba(255,255,255,0.1) 85%, transparent)',
            }}
            aria-hidden="true"
          />

          <StaggerContainer staggerDelay={0.1}>
            {experiences.map((exp, i) => (
              <StaggerItem key={i}>
                <div className="relative md:pl-10 pb-12 last:pb-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent hidden md:block ring-4 ring-black"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
                    {/* Left: Meta */}
                    <div className="lg:col-span-1">
                      <p className="text-text-muted text-xs font-mono mb-1">
                        {exp.period}
                      </p>
                      <p className="text-white font-semibold text-sm leading-snug">
                        {exp.role}
                      </p>
                      <p className="text-accent text-xs mt-0.5">{exp.company}</p>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-3">
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h) => (
                          <span key={h} className="tag text-[11px]">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
