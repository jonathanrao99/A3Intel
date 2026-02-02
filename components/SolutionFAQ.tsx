'use client'

import { useState } from 'react'
import Image from 'next/image'
import Accordion from './Accordion'

export type FAQItem = {
  id: string
  question: string
  answer: string
  image: string
}

export default function SolutionFAQ({
  items,
  title = 'Common questions',
  subtitle = 'Answers to questions we hear most often.',
}: {
  items: FAQItem[]
  title?: string
  subtitle?: string
}) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null)
  const activeItem = items.find((i) => i.id === activeId) ?? items[0]
  const displayImage = activeItem?.image ?? items[0]?.image

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 lg:items-stretch">
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-300" aria-hidden />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                FAQ
              </p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display text-gray-900 mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {subtitle}
            </p>
            <Accordion
              items={items}
              openId={activeId}
              onOpenChange={setActiveId}
            />
          </div>
          <div className="hidden lg:block lg:col-span-2 min-h-[400px]">
            <div className="relative h-full min-h-[480px] rounded-2xl overflow-hidden border border-gray-200/80 bg-gray-100">
              <Image
                src={displayImage}
                alt=""
                fill
                sizes="(max-width: 1024px) 0px, 400px"
                className="object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
