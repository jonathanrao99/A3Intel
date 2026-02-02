'use client'

import { useInView } from 'react-intersection-observer'
import Counter from './Counter'

type Stat = {
  value?: number
  suffix?: string
  label: string
  staticValue?: string
}

export default function SolutionMetrics({ stats }: { stats: Stat[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gray-900">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-700/60">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 text-center"
            >
              <div className="font-serif text-4xl md:text-5xl text-white tracking-[-0.02em] leading-none mb-2">
                {stat.staticValue ?? (
                  <Counter
                    value={stat.value ?? 0}
                    suffix={stat.suffix ?? ''}
                    inView={inView}
                  />
                )}
              </div>
              <div className="text-sm text-white/60 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
