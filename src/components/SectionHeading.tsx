import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/animations'
import { useSectionInView } from '../hooks/useSectionInView'

interface SectionHeadingProps {
  /** Texto da label acima do título */
  label: string
  /** Título principal da seção */
  title: string
  /** Descrição opcional abaixo do título */
  description?: string
  /** Conteúdo extra (ícones, badges, etc.) */
  children?: ReactNode
}

/**
 * SectionHeading — Componente reutilizável para cabeçalhos de seção.
 * Inclui label, título com gradiente e descrição com animação de entrada.
 */
export default function SectionHeading({
  label,
  title,
  description,
  children,
}: SectionHeadingProps) {
  const { ref, isInView } = useSectionInView()

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="text-center mb-16"
    >
      {/* Label / badge */}
      <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
        {label}
      </span>

      {/* Título */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>

      {/* Descrição */}
      {description && (
        <p className="max-w-2xl mx-auto text-muted-text text-lg leading-relaxed">
          {description}
        </p>
      )}

      {children}
    </motion.div>
  )
}
