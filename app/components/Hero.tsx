'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from './ui/Button'
import { techStack } from '@/app/data/portfolioData'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 26 },
  },
} as const

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Radial gradient top-center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 container-max section-padding pt-32 md:pt-40 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/[0.03] text-text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Remote Opportunities
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6"
          >
            Senior Full-Stack
            <br />
            <span className="text-gradient">SaaS Engineer.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[clamp(1rem,2.5vw,1.25rem)] text-text-secondary leading-relaxed max-w-2xl mb-8"
          >
            I build scalable SaaS platforms, APIs, and business automation
            systems. Precision-engineered for performance, built to last.
          </motion.p>

          {/* Tech stack line */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2 mb-10"
          >
            {techStack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                <span className="tag">{tech}</span>
                {i < techStack.length - 1 && (
                  <span className="text-white/20 text-xs">·</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3"
          >
            <Button href="#projects" variant="secondary">
              View Projects
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              href="https://cal.com/tony-olugbusi-tpujta/30min"
              variant="glow"
              external
            >
              Schedule a Call
            </Button>
            <Button
              href="/Tony_Olugbusi_FullStack_Resume.pdf"
              variant="ghost"
              external
            >
              Download Résumé (PDF)
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] text-text-muted uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
