'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Layers, Server, GitBranch, Zap, Code2 } from 'lucide-react'
import { SpotlightCard } from './ui/SpotlightCard'
import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'
import { Button } from './ui/Button'
import { services } from '@/app/data/portfolioData'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Server,
  GitBranch,
  Zap,
  Code2,
}

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="services" className="relative section-padding section-surface-alt">
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 35% at 50% 100%, rgba(37,99,235,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-4 block">
              Services
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display-md text-white mb-4">
              What I can build{' '}
              <span className="text-gradient">for you.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-text-secondary leading-relaxed">
              End-to-end engineering across the full stack. From architecture
              design to production deployment.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <StaggerContainer staggerDelay={0.07}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon]
              const featured = i === 0
              return (
                <StaggerItem key={service.title}>
                  <motion.div
                    onHoverStart={() => setHovered(i)}
                    onHoverEnd={() => setHovered(null)}
                    animate={{
                      opacity:
                        hovered === null || hovered === i ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.18 }}
                    className={`h-full ${featured ? 'lg:col-span-2' : ''}`}
                  >
                    <SpotlightCard className={`glass-hover h-full cursor-default ${featured ? 'section-card-strong' : 'section-card'}`}>
                      <div className={`p-6 flex flex-col h-full min-h-[200px] ${featured ? 'sm:min-h-[240px]' : ''}`}>
                        {/* Icon */}
                        <div
                          className={`w-10 h-10 rounded-xl mb-5 flex items-center justify-center ${featured ? 'shadow-[0_0_28px_rgba(37,99,235,0.25)]' : ''}`}
                          style={{
                            background:
                              'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(37,99,235,0.05) 100%)',
                            border: '1px solid rgba(37,99,235,0.2)',
                          }}
                        >
                          {Icon && (
                            <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                          )}
                        </div>

                        {/* Title */}
                        <h3 className={`text-white font-semibold mb-2 ${featured ? 'text-xl' : 'text-base'}`}>
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className={`text-text-secondary leading-relaxed flex-1 ${featured ? 'text-base max-w-xl' : 'text-sm'}`}>
                          {service.description}
                        </p>

                        {/* Price */}
                        {service.price && (
                          <div className="mt-5 pt-4 border-t border-white/[0.06]">
                            <span className="text-xs text-text-muted">
                              {service.price}
                            </span>
                          </div>
                        )}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </div>
        </StaggerContainer>

        <Reveal delay={0.2}>
          <div className="mt-16 text-center section-card p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-xl text-white font-medium mb-3">Ready to build your SaaS or system?</h3>
            <p className="text-text-secondary text-sm mb-6">Usually responds within 24 hours.</p>
            <Button
              href="https://cal.com/tony-olugbusi-tpujta/30min"
              variant="glow"
              external
            >
              Book a Discovery Call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
