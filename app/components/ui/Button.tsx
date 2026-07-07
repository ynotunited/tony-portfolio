'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/cn'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow'
  className?: string
  external?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  external,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium px-5 py-2.5 cursor-pointer select-none transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-white text-black hover:bg-zinc-100 active:bg-zinc-200 shadow-sm',
    secondary:
      'bg-transparent text-white border border-white/15 hover:bg-white/[0.06] hover:border-white/25 active:bg-white/[0.04]',
    ghost:
      'bg-transparent text-text-secondary hover:text-white hover:bg-white/[0.04]',
    glow:
      'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] border border-blue-500/30',
  }

  const motionProps = {
    whileTap: { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={cn(base, variants[variant], className)}
        >
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.button>
  )
}
