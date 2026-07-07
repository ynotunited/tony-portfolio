import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'
import { projects } from '@/app/data/portfolioData'

export default function ProjectsIndexPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-padding section-surface">
        <div className="container-max">
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-4">
              Case Studies
            </p>
            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1.05] mb-4">
              Projects that show how I think, ship, and solve problems.
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              A direct path into the work behind the portfolio. Each case study
              covers the problem, the solution, and the architectural choices
              behind the build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="section-card p-6 hover:border-white/15 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-text-muted mb-2">
                      {project.featured ? 'Featured' : 'Case Study'}
                    </p>
                    <h2 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h2>
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted mt-1" aria-hidden="true" />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
