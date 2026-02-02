'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTA_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=90', alt: 'Team collaboration' },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=90', alt: 'Healthcare and technology' },
  { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=90', alt: 'Office workspace' },
  { src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&q=90', alt: 'Business meeting' },
]

export default function ReadyToTransformCard() {
  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl lg:rounded-[1.75rem] bg-white border border-gray-200/60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12),0_12px_24px_-8px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-0.5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left: copy */}
        <div className="px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-14 flex flex-col justify-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-3">
            AI-Powered IT & Healthcare Solutions
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 leading-tight mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mb-6">
            Modernize your technology infrastructure, strengthen security posture, and build high-performing teams. We partner with healthcare and enterprise leaders to deliver measurable outcomes.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-tight text-white bg-blue-600 rounded-full shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 w-fit"
            >
              Schedule a strategy call
              <ArrowRight className="w-4 h-4 ml-2 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Right: 2x2 image grid on white */}
        <div className="bg-white p-5 sm:p-6 lg:p-8 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            {CTA_IMAGES.map((img, index) => {
              const isLeft = index === 0 || index === 2
              return (
                <motion.div
                  key={img.alt}
                  className="relative overflow-hidden rounded-xl bg-gray-100 aspect-square"
                  initial={{ opacity: 0, y: isLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 250px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
