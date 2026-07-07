import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ExternalLink, CircleDot, ShieldCheck, Boxes, Workflow } from 'lucide-react'
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

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start mb-12">
            <div className="lg:col-span-3 max-w-4xl">
              <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-4">
                Case Study
              </p>
              <h1 className="text-[clamp(2.6rem,6vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] mb-5">
                {project.title}
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
                {project.caseStudy.summary}
              </p>
            </div>

            <div className="lg:col-span-2 section-card-strong p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-text-muted mb-4">
                At a glance
              </p>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-text-muted mb-2">
                    Primary focus
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    {project.featured ? 'Production SaaS platform' : 'Business system delivered for real workflows'}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: project.caseStudy.outcome.length, label: 'outcomes' },
                    { value: project.caseStudy.stack.length, label: 'tools' },
                    { value: project.caseStudy.architecture.length, label: 'systems' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/[0.08] bg-black/20 p-3 text-center">
                      <p className="text-lg font-semibold text-white">{item.value}</p>
                      <p className="text-[10px] uppercase tracking-[0.12em] text-text-muted mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {project.slug === 'buildledger' && (
            <div className="mb-12">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-text-muted mb-2">
                    Visuals
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                    Screens from the live product
                  </h2>
                </div>
                <p className="text-sm text-text-secondary max-w-sm text-right">
                  These are the actual BuildLedger screens so visitors can see the product, not just read about it.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-7 section-card p-3 sm:p-4">
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0b1220] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] aspect-[16/10]">
                    <img
                      src="/buildledger/dashboard.png"
                      alt="BuildLedger dashboard screenshot"
                      className="h-full w-full object-cover p-2"
                    />
                    <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white">
                      Dashboard
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      src: '/buildledger/invoices.png',
                      alt: 'BuildLedger invoices screenshot',
                      label: 'Invoices',
                    },
                    {
                      src: '/buildledger/contracts.png',
                      alt: 'BuildLedger contracts screenshot',
                      label: 'Contracts',
                    },
                    {
                      src: '/buildledger/clients.png',
                      alt: 'BuildLedger clients screenshot',
                      label: 'Clients',
                    },
                    {
                      src: '/buildledger/payments.png',
                      alt: 'BuildLedger payments screenshot',
                      label: 'Payments',
                    },
                  ].map((shot) => (
                    <div key={shot.label} className="section-card p-3">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] uppercase tracking-[0.14em] text-text-muted">
                          {shot.label}
                        </p>
                        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0b1220] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] aspect-[4/3]">
                        <img
                          src={shot.src}
                          alt={shot.alt}
                          className="h-full w-full object-cover p-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

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
              <div className="flex items-center justify-between gap-4 mb-5">
                <p className="text-xs uppercase tracking-[0.14em] text-text-muted">
                  Architecture
                </p>
                <p className="text-xs text-text-muted">
                  Built as a working system, not a concept
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.caseStudy.architecture.map((item, index) => {
                  const icons = [Boxes, Workflow, ShieldCheck, CircleDot]
                  const Icon = icons[index % icons.length]
                  return (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 flex items-start gap-3"
                    >
                      <div className="mt-0.5 w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.04] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
                      </div>
                      <p className="text-sm text-white leading-relaxed">{item}</p>
                    </div>
                  )
                })}
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
