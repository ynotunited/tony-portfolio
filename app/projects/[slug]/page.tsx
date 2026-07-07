import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/app/data/portfolioData'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projects.find((item) => item.slug === params.slug)

  if (!project || !project.caseStudy) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-padding section-surface">
        <div className="container-max">
          <div className="mb-8 flex items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to portfolio
            </Link>
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors"
              >
                Live project
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>

          <div className="max-w-4xl mb-10">
            <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-4">
              Case Study
            </p>
            <h1 className="text-[clamp(2.4rem,6vw,4.8rem)] font-bold tracking-[-0.04em] leading-[1.03] mb-5">
              {project.title}
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
              {project.caseStudy.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3 section-card p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-text-muted mb-3">
                Problem
              </p>
              <p className="text-text-secondary leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>
            <div className="lg:col-span-2 section-card-strong p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-text-muted mb-3">
                Outcome
              </p>
              <ul className="space-y-3">
                {project.caseStudy.outcome.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 section-card p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-text-muted mb-3">
                Solution
              </p>
              <p className="text-text-secondary leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
            <div className="lg:col-span-2 section-card p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-text-muted mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 section-card p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-text-muted mb-4">
                Architecture
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.caseStudy.architecture.map((item) => (
                  <div key={item} className="proof-metric">
                    <p className="text-sm text-white leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-100 transition-colors"
            >
              Start a project
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors"
            >
              View all case studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
