'use client'

export default function StatsBlock({
  stats,
  className = '',
}: {
  stats: { value: string; label: string }[]
  className?: string
}) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 ${className}`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-white/70 tracking-wide">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
