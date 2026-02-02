'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Users, ShieldCheck, Zap, HeartHandshake } from 'lucide-react'

export default function WhyA3Intel() {
  const numberCards = [
    {
      value: '10+',
      suffix: 'Years',
      description: 'Proven track record serving enterprise and government clients',
      icon: Clock,
      span: 'lg:col-span-2',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      imageAlt: 'Modern office collaboration',
      hasImageBg: true,
    },
    {
      value: '200+',
      suffix: 'Consultants',
      description: 'Nationwide network of vetted technology professionals',
      icon: Users,
      span: 'lg:col-span-1',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
      imageAlt: 'Team of technology professionals',
      hasImageBg: false,
    },
    {
      value: '98%',
      suffix: 'Retention',
      description: 'Long-term partnerships built on trust and results',
      icon: HeartHandshake,
      span: 'lg:col-span-1',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
      imageAlt: 'Business partnership handshake',
      hasImageBg: false,
    },
  ]

  const featureCards = [
    {
      icon: ShieldCheck,
      title: 'Certified Partners',
      description: 'ISO 27001, HIPAA, SOC 2 Type II, and CMMI Level 3 compliant',
      span: 'lg:col-span-1',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
      imageAlt: 'Security and compliance',
    },
    {
      icon: Zap,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and rapid incident response',
      span: 'lg:col-span-1',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      imageAlt: 'Data and operations center',
    },
    {
      icon: Award,
      title: 'Industry Leaders',
      description: 'Deep expertise in healthcare, finance, and government sectors',
      span: 'lg:col-span-2',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      imageAlt: 'Enterprise and industry expertise',
      hasImageBg: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/80" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />

      <div className="container-wide relative">
        {/* Section header */}
        <motion.div
          className="max-w-3xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gray-300" aria-hidden />
            <Award className="w-4 h-4 text-gray-400 shrink-0" />
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.22em]">
              Why A3Intel
            </p>
          </div>
          <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-5 tracking-[-0.025em] leading-[1.1]">
            Why organizations choose A3Intel
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Certified partnerships, dedicated support, and experienced teams committed to long-term client success.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Number cards */}
          {numberCards.map((card) => {
            const Icon = card.icon
            if (card.hasImageBg) {
              return (
                <motion.div
                  key={card.suffix}
                  variants={itemVariants}
                  className={`${card.span} group`}
                >
                  <motion.div
                    className="h-full min-h-[300px] md:min-h-[340px] rounded-2xl overflow-hidden border border-gray-200/50 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),0_4px_16px_-4px_rgba(0,0,0,0.04)] relative"
                    whileHover={{
                      y: -4,
                      scale: 1.01,
                      boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 24px -8px rgba(0,0,0,0.08)',
                      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/45 to-gray-900/20" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/25 to-transparent opacity-70" />
                    <div className="relative h-full p-8 md:p-10 flex flex-col justify-end">
                      <Icon className="absolute top-8 right-8 w-5 h-5 text-white/90" />
                      <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-[-0.02em] leading-none block">
                        {card.value}
                      </span>
                      <span className="text-xs font-semibold text-white uppercase tracking-[0.2em] mt-2 block">
                        {card.suffix}
                      </span>
                      <p className="text-sm text-white/85 leading-relaxed mt-4 max-w-sm">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            }
            return (
              <motion.div
                key={card.suffix}
                variants={itemVariants}
                className={`${card.span} group`}
              >
                <motion.div
                  className="relative h-full rounded-2xl overflow-hidden border border-gray-200/50 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),0_4px_16px_-4px_rgba(0,0,0,0.04)] min-h-[300px] md:min-h-[340px]"
                  whileHover={{
                    y: -4,
                    scale: 1.01,
                    boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 24px -8px rgba(0,0,0,0.08)',
                    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                  }}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/45 pointer-events-none" />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.1) 60%, rgba(255,255,255,0.92) 85%, rgba(255,255,255,1) 100%)',
                    }}
                  />
                  <Icon className="absolute top-6 right-6 w-5 h-5 text-white/95 drop-shadow-md pointer-events-none z-10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                    <div className="text-right mb-3">
                      <span className="font-serif text-3xl md:text-4xl text-white tracking-[-0.02em] leading-none block drop-shadow-md">
                        {card.value}
                      </span>
                      <span className="text-xs font-semibold text-white uppercase tracking-[0.18em] mt-1 block">
                        {card.suffix}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100/80 px-6 py-4 -mx-6 -mb-6 rounded-b-2xl md:-mx-7 md:-mb-7 shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.06)]">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Feature cards */}
          {featureCards.map((card) => {
            const Icon = card.icon
            const hasImageBg = 'hasImageBg' in card && card.hasImageBg
            if (hasImageBg) {
              return (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  className={`${card.span} group`}
                >
                  <motion.div
                    className="h-full min-h-[300px] md:min-h-[340px] rounded-2xl overflow-hidden border border-gray-200/50 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),0_4px_16px_-4px_rgba(0,0,0,0.04)] relative"
                    whileHover={{
                      y: -4,
                      scale: 1.01,
                      boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 24px -8px rgba(0,0,0,0.08)',
                      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/96 via-gray-900/50 to-gray-900/20" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/25 to-transparent opacity-80" />
                    <div className="relative h-full p-7 md:p-9 flex flex-col justify-end">
                      <Icon className="absolute top-7 right-7 w-5 h-5 text-white" />
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-white tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-sm text-white/90 leading-relaxed mt-3 max-w-md">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            }
            return (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className={`${card.span} group`}
              >
                <motion.div
                  className="relative h-full rounded-2xl overflow-hidden border border-gray-200/50 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),0_4px_16px_-4px_rgba(0,0,0,0.04)] min-h-[300px] md:min-h-[340px]"
                  whileHover={{
                    y: -4,
                    scale: 1.01,
                    boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 24px -8px rgba(0,0,0,0.08)',
                    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                  }}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/45 pointer-events-none" />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.1) 60%, rgba(255,255,255,0.92) 85%, rgba(255,255,255,1) 100%)',
                    }}
                  />
                  <Icon className="absolute top-6 right-6 w-5 h-5 text-white/95 drop-shadow-md pointer-events-none z-10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                    <h3 className="font-semibold text-white tracking-tight text-lg mb-2 drop-shadow-md">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100/80 px-6 py-4 -mx-6 -mb-6 rounded-b-2xl md:-mx-7 md:-mb-7 shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.06)]">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
