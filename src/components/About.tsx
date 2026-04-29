import { motion } from 'framer-motion'
import { Users, Clock } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '../hooks/useSectionInView'
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../lib/animations'

/** Números / estatísticas da academia */
const stats = [
  { icon: Users, value: '2.000+', label: 'Alunos Ativos' },
  { icon: Clock, value: '14+', label: 'Anos de Experiência' },
]

/**
 * About — Seção "Sobre a Academia" com imagem, texto descritivo e estatísticas.
 */
export default function About() {
  const { ref, isInView } = useSectionInView(0.15)

  return (
    <section id="sobre" className="py-24 lg:py-32 relative">
      {/* Divisor superior */}
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Quem Somos"
          title="Sobre a GF Academia"
          description="Há mais de 14 anos transformando vidas através do esporte e do bem-estar."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16">
          {/* Imagem */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/images/about-gym.webp"
                alt="Interior da GF Academia"
                className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
            {/* Card flutuante de destaque */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 right-2 sm:-right-6 lg:-right-10 glass-card rounded-2xl p-6 max-w-[220px]"
            >
              <div className="text-4xl font-heading font-black gradient-text mb-1">14+</div>
              <div className="text-sm text-muted-text">Anos transformando vidas e superando limites</div>
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-6">
              Mais do que uma academia,{' '}
              <span className="gradient-text">um estilo de vida.</span>
            </h3>
            <div className="space-y-4 text-muted-text leading-relaxed">
              <p>
                A GF Academia nasceu com o propósito de oferecer um espaço completo
                para quem busca saúde, qualidade de vida e resultados reais. Com
                equipamentos de última geração e um time de profissionais
                apaixonados, criamos o ambiente perfeito para sua evolução.
              </p>
              <p>
                Aqui, cada aluno é único. Nossos programas são desenvolvidos
                individualmente, respeitando seu ritmo e seus objetivos. Seja para
                emagrecer, ganhar massa muscular, melhorar o condicionamento ou
                simplesmente viver melhor. A GF tem o plano ideal para você.
              </p>
              <p>
                Contamos com uma infraestrutura moderna e acolhedora, com áreas de
                musculação, cardio, alongamento e muito mais. Venha conhecer e
                sentir a diferença.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-24 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="glass-card rounded-2xl p-6 text-center group hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <stat.icon size={24} />
              </div>
              <div className="font-heading font-black text-3xl text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-text">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
