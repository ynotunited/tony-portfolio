'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/cn'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#buildledger' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.1 }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <nav
        className={cn(
          'max-w-5xl mx-auto rounded-2xl border transition-all duration-300',
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]'
            : 'bg-transparent border-transparent'
        )}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-4 h-14">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <div className={cn("relative transition-all duration-300", scrolled ? "w-28 h-7 sm:w-32 sm:h-8" : "w-36 h-9 sm:w-44 sm:h-11")}>
              <Image src="/tony_logo-web.png" alt="Tony" fill className="object-contain object-left" priority />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                role="listitem"
                className="px-3 py-1.5 text-sm text-text-secondary hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-150 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="#contact"
              className="px-4 py-2 text-sm font-medium bg-white text-black rounded-xl hover:bg-zinc-100 active:bg-zinc-200 transition-colors duration-150 cursor-pointer"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="block w-5 h-px bg-white origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="block w-5 h-px bg-white origin-center"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="overflow-hidden border-t border-white/[0.06] md:hidden"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 px-3 text-sm text-text-secondary hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors duration-150 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 py-2.5 px-3 text-sm font-medium text-center bg-white text-black rounded-xl hover:bg-zinc-100 transition-colors duration-150 cursor-pointer"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
