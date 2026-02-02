'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Award, FolderKanban, Users, TrendingUp } from 'lucide-react'
import Counter from './Counter'

export default function AwesomeFacts() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })

  const stats = [
    { 
      value: 500, 
      suffix: '+', 
      label: 'Projects Delivered', 
      desc: 'Across industries',
      icon: FolderKanban
    },
    { 
      value: 150, 
      suffix: '+', 
      label: 'Active Clients', 
      desc: 'Government & enterprise',
      icon: Users
    },
    { 
      value: 200, 
      suffix: '+', 
      label: 'Consultants', 
      desc: 'Nationwide deployment',
      icon: Users
    },
    { 
      value: 98, 
      suffix: '%', 
      label: 'Client Retention', 
      desc: 'Year over year',
      icon: TrendingUp
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent z-10" />
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80)',
        }}
        role="img"
        aria-label="Team collaboration in modern office environment"
      />
      <div className="absolute inset-0 bg-gray-900/90" />
      {/* Subtle blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent" />

      <div ref={ref} className="relative section-spacing">
        <div className="container-wide">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-white/30" aria-hidden />
              <Award className="w-4 h-4 text-blue-400 shrink-0" />
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-[0.2em]">
                Our Impact
              </p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-white mb-6 tracking-[-0.02em] leading-tight">
              The proof is in our track record
            </h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Key metrics that demonstrate our commitment to client success and operational excellence.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <motion.div key={stat.label} className="text-center" variants={itemVariants}>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="font-serif text-3xl sm:text-display-sm md:text-display text-white mb-2 tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
                  </div>
                  <div className="text-white font-medium mb-1 tracking-wide">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/50 tracking-wide">
                    {stat.desc}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
