import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/** Slides do carrossel hero */
const slides = [
  {
    image: '/images/banner-1.webp',
    headline: 'Transforme Seu Corpo,\nTransforme Sua Vida',
    subheadline:
      'A GF Academia oferece o melhor ambiente para você alcançar seus objetivos. Equipamentos de última geração e profissionais qualificados.',
  },
  {
    image: '/images/banner-2.webp',
    headline: 'Supere Seus\nLimites Todo Dia',
    subheadline:
      'Treinos personalizados, acompanhamento profissional e uma comunidade que te motiva a ir além. Comece sua jornada agora.',
  },
  {
    image: '/images/banner-4.webp',
    headline: 'Sua Melhor Versão\nComeça Aqui',
    subheadline:
      'Aulas em grupo, musculação, funcional e muito mais. Encontre o treino perfeito para o seu estilo de vida.',
  },
]

/**
 * Hero — Seção principal com carrossel de imagens em tela cheia,
 * headline animada, sub-headline e botão CTA.
 */
export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Auto-play a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Slides de imagem de fundo */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Overlay escuro para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/30 to-dark/80" />
        </motion.div>
      </AnimatePresence>

      {/* Conteúdo do hero */}
      <div className="relative z-10 h-full flex items-center pt-[25vh] md:pt-[20vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              {/* Headline */}
              <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 whitespace-pre-line">
                <span className="gradient-text">
                  {slides[current].headline}
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-light-text/80 max-w-xl mb-8 leading-relaxed">
                {slides[current].subheadline}
              </p>

              {/* Botões CTA */}
              <div className="flex flex-row flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-0">
                <a
                  href="#planos"
                  className="inline-flex w-fit items-center justify-center px-4 py-2 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-sm sm:text-lg rounded-full hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 animate-pulse-glow"
                >
                  Comece Agora
                </a>
                <a
                  href="#sobre"
                  className="inline-flex w-fit items-center justify-center px-4 py-2 sm:px-8 sm:py-4 border-2 border-white/20 text-white font-semibold text-sm sm:text-lg rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  Saiba Mais
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Setas de navegação */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-primary/30 hover:border-primary/40 transition-all duration-300"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-primary/30 hover:border-primary/40 transition-all duration-300"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === current
                ? 'w-10 bg-primary'
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  )
}
