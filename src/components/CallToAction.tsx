import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useSectionInView } from '../hooks/useSectionInView'
import { fadeInUp } from '../lib/animations'

/**
 * CallToAction — Seção de destaque para incentivar o cadastro.
 * Fundo com gradiente e efeito de blur para criar senso de urgência.
 */
export default function CallToAction() {
  const { ref, isInView } = useSectionInView(0.2)

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="section-divider mb-24" />

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Borda gradiente sutil */}
          <div className="absolute inset-0 rounded-3xl border border-primary/10" />

          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            Oferta Especial
          </span>

          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Primeira Semana{' '}
            <span className="gradient-text">Totalmente Grátis!</span>
          </h2>

          <p className="text-muted-text text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Experimente todos os nossos serviços sem compromisso. Venha conhecer
            nossa estrutura, treinar com nossos profissionais e descobrir por que
            somos a academia #1 da região.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-lg rounded-full hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 group"
            >
              Quero Minha Semana Grátis
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/15 text-white font-semibold text-lg rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              Fale pelo WhatsApp
            </a>
          </div>

          {/* Texto de confiança */}
          <p className="mt-8 text-muted-text text-sm">
            ✓ Sem cartão de crédito &nbsp; ✓ Sem compromisso &nbsp; ✓ Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  )
}
