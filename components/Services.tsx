'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ArrowUpRight, 
  ArrowRight,
  Lightbulb,
  Cloud, 
  Server, 
  Shield, 
  Users,
  Briefcase,
  Sparkles
} from 'lucide-react'
import { containerVariants, itemVariants, cardHoverProps } from '@/lib/motion-variants'

export default function Services() {
  const services = [
    {
      title: "IT Strategy Consulting",
      description: "Align technology with business goals. We build IT plans that fit your needs.",
      href: "/solutions/consulting",
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1200&q=80",
      icon: Lightbulb,
      featured: true
    },
    {
      title: "Cloud Computing Solutions",
      description: "Migration, deployment, and management to cut costs and improve agility.",
      href: "/solutions/cloud",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      icon: Cloud
    },
    {
      title: "IT Security Services",
      description: "Security assessments, vulnerability testing, and risk management.",
      href: "/solutions/cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      icon: Shield
    },
    {
      title: "Managed IT Services",
      description: "Network monitoring, help desk, and server maintenance to reduce downtime.",
      href: "/solutions/managed-services",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      icon: Server
    },
    {
      title: "IT Staffing Solutions",
      description: "Vetted IT professionals for full-time, part-time, or contract roles.",
      href: "/solutions/it-staffing",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      icon: Users
    },
    {
      title: "Digital Transformation Services",
      description: "Digital strategy, UX design, and app development for modern workflows.",
      href: "/solutions/digital-transformation",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      icon: Sparkles
    }
  ]

  const featuredService = services[0]
  const otherServicesForGrid = [
    services[1], // Cloud
    services[2], // IT Security
    services[3], // Managed IT
    services[5], // Digital Transformation (row 2 col 1)
    services[4], // IT Staffing (row 3 cols 2-3)
  ]

  return (
    <section id="services" className="relative section-spacing bg-white overflow-hidden">
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
            <Briefcase className="w-4 h-4 text-gray-400 shrink-0" />
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
              Our Solutions
            </p>
          </div>
          <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-[-0.02em] leading-tight">
            Enterprise and healthcare IT services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            We deliver consulting, staffing, and managed services to enterprise and healthcare clients, tailoring solutions to each organization&apos;s needs.
          </p>
        </motion.div>

        {/* Featured Service */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Link href={featuredService.href} className="group block">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-100 rounded-2xl overflow-hidden bg-white"
              whileHover={cardHoverProps}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] lg:aspect-[2/1] overflow-hidden bg-gray-100">
                <Image
                  src={featuredService.image}
                  alt={featuredService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-gray-900/10" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <featuredService.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-widest">Consulting</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-serif text-gray-900 mb-3 tracking-tight group-hover:text-gray-600 transition-colors">
                  {featuredService.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm lg:text-base">
                  {featuredService.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-500 transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Other Services Grid - Row 1: Cloud, IT Security, Managed IT | Row 3: Digital Transformation (col 1), IT Staffing (cols 2-3) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {otherServicesForGrid.map((service) => {
            const Icon = service.icon
            const isITStaffing = service.title === 'IT Staffing Solutions'
            const isDigitalTransformation = service.title === 'Digital Transformation Services'
            if (isITStaffing) {
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="md:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-3"
                >
                  <Link href={service.href} className="group block h-full">
                    <motion.div
                      className="h-full grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-100 rounded-2xl overflow-hidden bg-white"
                      whileHover={cardHoverProps}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full min-h-[200px] overflow-hidden bg-gray-100 order-2 lg:order-1">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-gray-900/10 lg:via-transparent lg:to-transparent" />
                      </div>
                      <div className="p-5 lg:p-6 flex flex-col justify-center order-1 lg:order-2">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-blue-600" />
                          <span className="text-xs font-medium text-blue-600 uppercase tracking-widest">Solutions</span>
                        </div>
                        <h3 className="text-lg lg:text-xl font-serif text-gray-900 mb-2 tracking-tight group-hover:text-gray-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-3 text-sm line-clamp-2">
                          {service.description}
                        </p>
                        <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-500 transition-colors">
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            }
            if (isDigitalTransformation) {
              return (
                <motion.div key={service.title} variants={itemVariants} className="lg:row-start-3 lg:col-start-1">
                  <Link href={service.href} className="group block h-full">
                    <motion.div
                      className="h-full border border-gray-100 rounded-2xl overflow-hidden bg-white"
                      whileHover={cardHoverProps}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-500" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-start gap-3 mb-2">
                          <Icon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-blue-500" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                                {service.title}
                              </h3>
                              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                            </div>
                            <p className="text-gray-600 leading-relaxed mt-1.5 text-sm line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            }
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Link href={service.href} className="group block h-full">
                  <motion.div
                    className="h-full border border-gray-100 rounded-2xl overflow-hidden bg-white"
                    whileHover={cardHoverProps}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-500" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <Icon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-blue-500" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                              {service.title}
                            </h3>
                            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                          </div>
                          <p className="text-gray-600 leading-relaxed mt-1.5 text-sm line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
