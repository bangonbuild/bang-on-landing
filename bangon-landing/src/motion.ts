export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const fadeUpTransition = {
  duration: 0.5,
  ease: 'easeOut' as const,
}

export const viewportOnce = { once: true, margin: '-40px' as const }
