import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Hook para detectar quando um elemento entra na viewport.
 * Usado para disparar animações de entrada nas seções.
 */
export function useSectionInView(threshold = 0.2) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  })

  return { ref, isInView }
}
