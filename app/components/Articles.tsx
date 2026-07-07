'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, BookOpen, X } from 'lucide-react'
import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'
import { SpotlightCard } from './ui/SpotlightCard'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: 'How I Designed a Multi-tenant SaaS in Laravel',
    category: 'Architecture',
    readTime: '6 min read',
    date: 'Oct 12, 2025',
    content: (
      <div className="space-y-4 text-text-secondary">
        <p>
          Building a true multi-tenant SaaS requires more than just adding a `tenant_id` to your database tables. It requires a thoughtful approach to data isolation, routing, and scalable architecture.
        </p>
        <p>
          In this article, I break down the architectural decisions I made when building BuildLedger using Laravel. We'll explore single-database vs. multi-database tenancy, how to handle global scopes, and the importance of caching tenant context efficiently.
        </p>
        <h3 className="text-white font-semibold text-lg mt-6">Choosing the Right Tenancy Model</h3>
        <p>
          For BuildLedger, I opted for a single-database, row-level isolation approach using global scopes. This allows for easier schema migrations and aggregations while maintaining strict data boundaries.
        </p>
        <p>
          By leveraging Laravel's powerful service container and middleware, we can automatically scope every query, ensuring that data leaking between tenants is structurally impossible at the application level.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: 'Building Secure Payment Systems with Paystack',
    category: 'Engineering',
    readTime: '8 min read',
    date: 'Sep 28, 2025',
    content: (
      <div className="space-y-4 text-text-secondary">
        <p>
          Handling money online is hard. It's not just about hitting an API; it's about handling webhooks reliably, dealing with race conditions, and ensuring that your ledger always matches the payment gateway.
        </p>
        <p>
          Paystack provides an excellent API for African businesses, but the integration still requires robust engineering on the backend.
        </p>
        <h3 className="text-white font-semibold text-lg mt-6">Idempotency is Key</h3>
        <p>
          When you receive a webhook that a payment was successful, you must assume that webhook could be delivered multiple times. If your code just adds funds to a user's wallet without checking if the transaction was already processed, you will lose money.
        </p>
        <p>
          I'll show you how to implement database-level locking and idempotency keys to ensure that a payment is only ever processed exactly once.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: 'Lessons from Shipping 50+ Client Projects',
    category: 'Career',
    readTime: '5 min read',
    date: 'Aug 15, 2025',
    content: (
      <div className="space-y-4 text-text-secondary">
        <p>
          Over the past decade, I've had the privilege of building and shipping over 50 production applications for clients across various industries. 
        </p>
        <p>
          The most important lesson I've learned? The code is only 20% of the project.
        </p>
        <h3 className="text-white font-semibold text-lg mt-6">Communication over Cleverness</h3>
        <p>
          Clients don't care if you used the latest state management library or if your algorithm is O(log n). They care if the software solves their business problem and if it's delivered on time.
        </p>
        <p>
          Setting expectations, communicating delays early, and understanding the core business value of the software are the traits that separate senior engineers from junior coders.
        </p>
      </div>
    )
  },
]

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)

  return (
    <section id="writing" className="relative section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-4 block">
                Writing
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-md text-white">
                Latest Articles.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1"
            >
              View all articles
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        {/* Articles List */}
        <StaggerContainer staggerDelay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {articles.map((article) => (
              <StaggerItem key={article.id}>
                <SpotlightCard 
                  className="glass border border-white/[0.07] glass-hover h-full cursor-pointer group"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="block p-6 sm:p-8 flex flex-col h-full min-h-[240px]">
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/[0.03] text-text-secondary border border-white/[0.08]">
                        {article.category}
                      </span>
                      <BookOpen className="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-white font-semibold text-lg sm:text-xl leading-snug mb-4 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>

                    <div className="mt-auto pt-6 flex items-center justify-between text-xs font-medium text-text-muted">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-text-muted/30" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/[0.05] text-text-secondary">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-text-muted">{selectedArticle.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 -mr-2 text-text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
                  {selectedArticle.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
