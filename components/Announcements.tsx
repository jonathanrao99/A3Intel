'use client'

import { Sparkles } from 'lucide-react'

export default function Announcements() {
  const announcements = [
    "A3Intel is an E-Verify participating employer",
    "VITA (Virginia IT Agency) selects A3Intel as preferred staffing partner",
    "AI-driven IT solutions for enterprises and healthcare",
    "Defy Security partners with A3Intel for Splunk Professional Services",
    "Mohawk Industries chooses A3Intel for SAP Hybris implementation",
    "Global AI delivery with enterprise-grade execution",
  ]

  const allAnnouncements = [...announcements, ...announcements]

  return (
    <section className="bg-gray-900 py-4 overflow-hidden">
      <div className="animate-marquee flex items-center gap-12 sm:gap-16 whitespace-nowrap py-1">
        {allAnnouncements.map((item, index) => (
          <span key={index} className="text-sm text-gray-400 flex items-center">
            <Sparkles className="w-3 h-3 mr-3 text-gray-500" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
