'use client'

import {
  FileCheck,
  UserCheck,
  Handshake,
  Cpu,
  ShieldCheck,
  UserPlus,
  Database,
  Zap,
  TrendingUp,
  Users,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const ICON_MAP = {
  'file-check': FileCheck,
  'user-check': UserCheck,
  handshake: Handshake,
  cpu: Cpu,
  'shield-check': ShieldCheck,
  'user-plus': UserPlus,
  database: Database,
  zap: Zap,
  'trending-up': TrendingUp,
  users: Users,
} as const

export type ApproachItem = {
  title: string
  description: string
  icon?: keyof typeof ICON_MAP
}

export default function IndustryApproachSection({
  label = 'Our approach',
  title,
  subtitle,
  items,
  className,
}: {
  label?: string
  title: string
  subtitle: string
  items: ApproachItem[]
  className?: string
}) {
  return (
    <section className={cn('section-spacing bg-gray-50', className)}>
      <div className="container-wide">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gray-300" aria-hidden />
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
              {label}
            </p>
          </div>
          <motion.h2
            className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon ? ICON_MAP[item.icon] : null
            return (
              <motion.div
                key={item.title}
                className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:border-gray-200 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.1)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {Icon && (
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <h3 className="font-semibold text-gray-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
