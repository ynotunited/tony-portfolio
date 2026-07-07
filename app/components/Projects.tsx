'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { SpotlightCard } from './ui/SpotlightCard'
import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'
import { projects } from '@/app/data/portfolioData'

// Order non-featured projects by priority
const rankedProjects = [
  'Hospital Management System',
  'MultiVend Marketplace',
  'NGO / ERP System',
  'eFinder',
]

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)

  const nonFeatured = projects.filter((p) => !p.featured)
  const sorted = [
    ...nonFeatured.filter((p) => rankedProjects.includes(p.title)),
    ...nonFeatured.filter((p) => !rankedProjects.includes(p.title)),
  ]

  return (
    <section id="projects" className="relative section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-4 block">
              Projects
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display-md text-white">
              Things I&apos;ve built.
            </h2>
          </Reveal>
        </div>

        {/* Grid */}
        <StaggerContainer staggerDelay={0.07}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sorted.map((project, i) => (
              <StaggerItem key={project.title}>
                <motion.div
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  animate={{
                    opacity: hovered === null || hovered === i ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.18 }}
                  className="h-full"
                >
                  <SpotlightCard className="glass border border-white/[0.07] glass-hover h-full cursor-pointer">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block p-5 flex flex-col h-full min-h-[220px]"
                      aria-label={`Open ${project.title} case study`}
                    >
                      {/* Top row */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0.05) 100%)`,
                              border: '1px solid rgba(37,99,235,0.2)',
                            }}
                          >
                            {project.title.charAt(0)}
                          </div>
                          {i === 0 && (
                            <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                              ⭐ Featured
                            </span>
                          )}
                        </div>
                        {project.link !== '#' && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project.title}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-text-muted hover:text-white transition-colors p-1 -mr-1"
                          >
                            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                          </a>
                        )}
                      </div>

                      {/* Title + description */}
                      <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs font-medium text-white mb-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                          Read case study
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag text-[11px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </SpotlightCard>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
