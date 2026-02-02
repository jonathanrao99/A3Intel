'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const TRUSTED_BY_NAMES = [
  'Johnson & Johnson',
  'Mohawk Industries',
  'Prudential Financial',
  'Splunk',
  'Tableau',
  'ExxonMobil',
  'NextEra Energy',
  'TEKsystems',
]

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-16 md:py-20">
      {/* Static background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Business colleagues collaborating"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gray-950/55" />
        {/* Premium gradient: darker left, lighter right, subtle depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-gray-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pt-16 md:pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-left"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/30" aria-hidden />
              <p className="text-xs font-medium text-white/60 uppercase tracking-[0.25em]">
                AI-Powered IT & Healthcare Solutions
              </p>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-serif text-heading-lg md:text-display-sm lg:text-display text-white mb-5 tracking-[-0.025em] leading-[1.15]"
            >
              Technology and talent
              <br />
              <motion.span 
                className="inline-block sm:whitespace-nowrap"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                solutions that <span className="text-blue-300 italic">deliver results</span>
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-white/65 max-w-lg mb-16 leading-[1.75] tracking-wide"
            >
              IT consulting, staffing, and managed services for enterprise and healthcare organizations.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col xs:flex-row gap-4 sm:gap-5">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.02em] text-white bg-blue-500 rounded-full shadow-lg shadow-blue-500/35 transition-all duration-300 hover:bg-blue-400 hover:shadow-blue-500/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/case-studies"
                className="group inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-[0.02em] text-white/80 border border-white/10 rounded-full transition-all duration-300 hover:bg-white/5 hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View our work
                <ArrowRight className="w-4 h-4 ml-2 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-white/10 relative"
            >
              <p className="text-[11px] text-white/40 uppercase tracking-[0.3em] mb-5 font-medium">Trusted by</p>
              <div 
                className="relative overflow-hidden"
                style={{ 
                  maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
                  maskSize: '100% 100%',
                  WebkitMaskSize: '100% 100%',
                }}
              >
                <div className="flex animate-trusted-marquee shrink-0 gap-x-8 w-max">
                  {[...TRUSTED_BY_NAMES, ...TRUSTED_BY_NAMES].map((name, i) => (
                    <span
                      key={`${name}-${i}`}
                      className="font-serif text-sm md:text-base text-white/45 font-medium tracking-wide whitespace-nowrap"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Right column - empty, background shows through */}
          <div className="hidden lg:block" aria-hidden />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/40 hover:text-white/60 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
        aria-label="Scroll down to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[11px] uppercase tracking-[0.25em] mb-2 font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  )
}
