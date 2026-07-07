'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'
import { SpotlightCard } from './ui/SpotlightCard'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your business needs, user workflows, and technical constraints.',
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'Designing the database schema, API structure, and scalable system foundation.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building secure, clean, and maintainable code with modern tech stacks.',
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'Setting up CI/CD, provisioning servers, and shipping to production.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative section-padding section-surface">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-4 block">
              Process
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display-md text-white">
              How I Work.
            </h2>
          </Reveal>
        </div>

        {/* Steps Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

            {steps.map((step, i) => (
              <StaggerItem key={step.number} className="relative z-10 flex flex-col h-full">
                <SpotlightCard className="glass border border-white/[0.07] h-full flex flex-col p-6 sm:p-8 relative overflow-hidden group">
                  <div className="text-4xl font-black text-white/[0.05] absolute top-4 right-4 pointer-events-none select-none transition-colors duration-500 group-hover:text-white/10">
                    {step.number}
                  </div>
                  
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent font-mono font-medium mb-6">
                    {step.number}
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>
                </SpotlightCard>
                
                {/* Mobile downward arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-4">
                    <ArrowDown className="w-5 h-5 text-text-muted/50" />
                  </div>
                )}
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
