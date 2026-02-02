'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type AccordionItem = {
  id: string
  question: string
  answer: string
  image?: string
}

export default function Accordion({
  items,
  className = '',
  openId: controlledOpenId,
  onOpenChange,
}: {
  items: AccordionItem[]
  className?: string
  openId?: string | null
  onOpenChange?: (id: string | null) => void
}) {
  const [internalOpenId, setInternalOpenId] = useState<string | null>(items[0]?.id ?? null)
  const openId = controlledOpenId !== undefined ? controlledOpenId : internalOpenId
  const setOpenId = (id: string | null) => {
    if (onOpenChange) onOpenChange(id)
    else setInternalOpenId(id)
  }

  return (
    <div className={`divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50/80 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-gray-900">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
