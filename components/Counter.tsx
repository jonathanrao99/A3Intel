'use client'

import { useEffect, useState } from 'react'

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export default function Counter({
  value,
  suffix = '',
  inView,
}: {
  value: number
  suffix?: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!inView || hasAnimated) return

    const duration = 2200
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      const current = Math.floor(eased * value)
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setCount(value)
        setHasAnimated(true)
      }
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, hasAnimated])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
