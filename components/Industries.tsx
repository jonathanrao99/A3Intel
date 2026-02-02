'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, Layers, Heart, Building2, Landmark, Wifi } from 'lucide-react'

export default function Industries() {
  const router = useRouter()
  const industries = [
    {
      name: "State & Federal Agencies",
      description: "AI and IT solutions for government, delivering efficiency, security, and digital innovation.",
      href: "/industries/government",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
      stats: "Government partners nationwide",
      metric: "50+",
      metricLabel: "Agencies",
      icon: Landmark,
      exploreLabel: "Explore government solutions",
    },
    {
      name: "Banking & Financial Services",
      description: "Secure, compliant AI and IT solutions for banking, insurance, and asset management.",
      href: "/industries/financial-services",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      stats: "50+ financial institutions",
      metric: "$2B+",
      metricLabel: "Assets managed",
      icon: Building2,
      exploreLabel: "Explore financial solutions",
    },
    {
      name: "Healthcare & Life Sciences",
      description: "HIPAA-compliant AI and IT solutions for hospitals, health systems, and life sciences.",
      href: "/industries/healthcare",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
      stats: "200+ healthcare clients",
      metric: "200+",
      metricLabel: "Clients",
      icon: Heart,
      exploreLabel: "Explore healthcare solutions",
    },
    {
      name: "Telecommunications",
      description: "AI-driven solutions for telecom operators, network infrastructure, and digital services.",
      href: "/industries/telecom",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      stats: "Leading telecom partners",
      metric: "30+",
      metricLabel: "Partners",
      icon: Wifi,
      exploreLabel: "Explore telecom solutions",
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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="industries" className="relative section-spacing bg-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />
      <div className="container-wide relative">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gray-300" aria-hidden />
            <Layers className="w-4 h-4 text-gray-400 shrink-0" />
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
              Industries
            </p>
          </div>
          <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-[-0.02em] leading-tight">
            Markets we serve
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            We serve state and federal government, banking and financial services, healthcare, and telecommunications with industry-specific expertise.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.div key={industry.name} variants={itemVariants}>
                <Link
                  href={industry.href}
                  className="group relative block aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-gray-900/20" />
                  </motion.div>
                  
                  <div className="absolute inset-0 p-6 sm:p-8 lg:p-12 flex flex-col relative z-10">
                    <div className="absolute top-8 lg:top-12 right-8 lg:right-12 bg-white/10 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="text-2xl font-serif text-white tracking-tight">{industry.metric}</div>
                      <div className="text-xs text-white/70">{industry.metricLabel}</div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-white/70">{industry.stats}</span>
                    </div>
                    <h3 className="font-serif text-heading-lg md:text-display-sm text-white mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-white/80 max-w-md hidden md:block flex-1 min-h-0">
                      {industry.description}
                    </p>
                  </div>

                  {/* Explore label: positioned relative to card, not content box — true bottom right */}
                  <div
                    className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 z-20 text-right"
                    style={{ left: 'auto', top: 'auto' }}
                  >
                    <span className="inline-flex items-center text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                      {industry.exploreLabel}
                      <ArrowRight className="w-4 h-4 ml-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View all industries - pill: white by default, blue on hover */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => router.push('/industries')}
            className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md active:scale-[0.98]"
          >
            View all industries
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
