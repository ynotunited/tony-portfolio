'use client'

import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'
import { experiences } from '@/app/data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding section-surface">
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
                <div className="relative md:pl-10 pb-6 last:pb-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent hidden md:block ring-4 ring-black"
                    aria-hidden="true"
                  />

                  <div className="section-card p-5 sm:p-6">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          <p className="text-text-muted text-xs font-mono mb-2">
                            {exp.period}
                          </p>
                          <h3 className="text-white font-semibold text-lg leading-tight">
                            {exp.role}
                          </h3>
                          <p className="text-accent text-sm mt-1">{exp.company}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.stack.map((tech) => (
                            <span key={tech} className="tag text-[11px]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-text-secondary text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h) => (
                          <span key={h} className="proof-chip text-[11px]">
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
