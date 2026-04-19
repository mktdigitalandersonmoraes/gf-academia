import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '../hooks/useSectionInView'
import { fadeInUp } from '../lib/animations'

/** Depoimentos dos clientes */
const testimonials = [
  {
    name: 'Mariana Santos',
    role: 'Aluna há 2 anos',
    rating: 5,
    text: 'A GF Academia mudou minha vida! Perdi 20kg em 8 meses com acompanhamento personalizado. O ambiente é incrível e os profissionais são extremamente dedicados. Recomendo de olhos fechados!',
    avatar: 'MS',
  },
  {
    name: 'Pedro Almeida',
    role: 'Aluno há 3 anos',
    rating: 5,
    text: 'Já treinei em várias academias, mas nenhuma se compara à GF. Os equipamentos são de primeira linha, os treinos são sempre desafiadores e o resultado aparece. Melhor investimento que fiz na minha saúde.',
    avatar: 'PA',
  },
  {
    name: 'Juliana Ferreira',
    role: 'Aluna há 1 ano',
    rating: 5,
    text: 'Comecei sem nenhuma experiência e hoje já consigo fazer exercícios que nunca imaginei. O personal trainer do plano Premium é fantástico, sempre atencioso e motivador. Amo treinar aqui!',
    avatar: 'JF',
  },
  {
    name: 'Ricardo Mendes',
    role: 'Aluno há 4 anos',
    rating: 5,
    text: 'O plano Black vale cada centavo. O atendimento VIP, o nutricionista dedicado e a área exclusiva fazem toda a diferença. Meus resultados nunca foram tão bons. A GF é referência!',
    avatar: 'RM',
  },
  {
    name: 'Camila Oliveira',
    role: 'Aluna há 1 ano',
    rating: 5,
    text: 'As aulas em grupo são demais! Principalmente as de funcional e spinning. O ambiente é super acolhedor e a galera é motivada. Me sinto em casa toda vez que entro na academia.',
    avatar: 'CO',
  },
]

/**
 * Testimonials — Carrossel de depoimentos dos clientes com navegação.
 */
export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const { ref, isInView } = useSectionInView(0.1)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[current]

  return (
    <section id="depoimentos" className="py-24 lg:py-32 relative bg-dark-lighter">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Depoimentos"
          title="O Que Nossos Alunos Dizem"
          description="Histórias reais de transformação e superação dos nossos alunos."
        />

        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto mt-12"
        >
          {/* Card de depoimento */}
          <div className="relative glass-card rounded-3xl p-8 md:p-12 min-h-[320px] flex flex-col justify-between">
            {/* Ícone de citação */}
            <div className="absolute top-6 right-8 text-primary/10">
              <Quote size={80} />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {/* Estrelas */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-lg md:text-xl text-light-text leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Autor */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center font-heading font-bold text-white text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-text text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navegação */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-dark-border">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1)
                      setCurrent(i)
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-primary w-8' : 'bg-dark-border hover:bg-muted-text'
                    }`}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-muted-text hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-muted-text hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
