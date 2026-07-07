'use client'

import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'

const highlights = [
  'Architected multi-tenant SaaS platforms used in production',
  'Built REST APIs handling thousands of concurrent requests',
  'Delivered full-stack systems from schema design to deployment',
  'Automated business workflows, cutting operational overhead by 60%',
  'Led cross-functional engineering teams from concept to launch',
]

export default function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-4 block">
                About
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-md text-white mb-6">
                Engineering systems that{' '}
                <span className="text-gradient">survive scale.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-text-secondary leading-[1.8] mb-4">
                I&apos;m a Senior Full-Stack SaaS Engineer with deep expertise
                in backend architecture, API design, and building production
                systems from the ground up.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-text-secondary leading-[1.8]">
                My focus is on the intersection of clean engineering and real
                business impact - platforms that process real money, manage real
                clients, and operate reliably at scale. Not proof-of-concepts.
                Production systems.
              </p>
            </Reveal>
          </div>

          {/* Right: Highlights */}
          <div>
            <Reveal delay={0.1}>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-6 block">
                Key highlights
              </span>
            </Reveal>
            <StaggerContainer staggerDelay={0.07}>
              {highlights.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4 py-4 border-b border-white/[0.06] last:border-0">
                    <div
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
