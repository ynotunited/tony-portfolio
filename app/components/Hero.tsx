'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from './ui/Button'
import { heroOutcome } from '@/app/data/portfolioData'

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
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [mounted, setMounted] = useState(false)

  // Spring animation for smooth mouse tracking
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      // Calculate position relative to center of screen, from -1 to 1
      const x = (clientX / innerWidth) * 2 - 1
      const y = (clientY / innerHeight) * 2 - 1
      mouseX.set(x * 200) // Max movement in pixels
      mouseY.set(y * 200)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Template for the moving gradient background
  const background = useMotionTemplate`radial-gradient(ellipse 80% 50% at calc(50% + ${springX}px) calc(-10% + ${springY}px), rgba(37,99,235,0.15) 0%, transparent 70%)`

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Radial gradient top-center glow with mouse tracking */}
      {mounted ? (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background }}
        />
      ) : (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.15) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 container-max section-padding pt-32 md:pt-40 pb-16">
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
            <span className="text-gradient">{heroOutcome}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[clamp(1rem,2.5vw,1.25rem)] text-text-secondary leading-relaxed max-w-2xl mb-3"
          >
            Senior Full-Stack SaaS Engineer focused on shipping reliable products,
            clean integrations, and backend systems that keep operations moving.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-[clamp(0.9rem,2vw,1.1rem)] text-text-muted leading-relaxed max-w-2xl mb-10"
          >
            From architecture and database design to deployment, I build software
            that businesses rely on every day.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-3xl"
          >
            {[
              ['Multi-tenant', 'SaaS systems'],
              ['Production', 'deployments'],
              ['Secure', 'authentication'],
              ['Automation', 'workflows'],
            ].map(([value, label]) => (
              <div key={label} className="proof-metric">
                <p className="text-white text-sm font-semibold">{value}</p>
                <p className="text-text-muted text-xs mt-1">{label}</p>
              </div>
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
      </div>
    </section>
  )
}
