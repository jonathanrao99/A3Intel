/** Shared Framer Motion variants for consistent animations across components */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const cardHoverProps = {
  y: -4,
  boxShadow:
    '0 12px 28px -8px rgb(0 0 0 / 0.12), 0 8px 16px -8px rgb(0 0 0 / 0.08)',
}

export const bentoHoverProps = {
  y: -6,
  boxShadow:
    '0 24px 48px -12px rgba(0,0,0,0.12), 0 12px 24px -8px rgba(0,0,0,0.08)',
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const viewportDefaults = {
  once: true,
  margin: '-100px' as const,
}
