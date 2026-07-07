'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion'
import { cn } from '@/lib/cn'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(37, 99, 235, 0.12)',
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-400)
  const mouseY = useMotionValue(-400)

  const springConfig = { stiffness: 250, damping: 28 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Compose into a live CSS string — the correct framer-motion v12 pattern
  const background = useMotionTemplate`radial-gradient(400px at ${smoothX}px ${smoothY}px, ${spotlightColor}, transparent 80%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    mouseX.set(-400)
    mouseY.set(-400)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('relative overflow-hidden rounded-2xl', className)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
        style={{ background }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
