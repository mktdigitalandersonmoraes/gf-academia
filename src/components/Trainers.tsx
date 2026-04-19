import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '../hooks/useSectionInView'
import { staggerContainer, staggerItem } from '../lib/animations'

/** Dados dos personal trainers */
const trainers = [
  {
    name: 'Carlos Silva',
    role: 'Personal Trainer & Coach',
    specialty: 'Musculação e Hipertrofia',
    image: '/images/trainer-1.png',
    instagram: '#',
    bio: 'Especialista em treinos de força com 10+ anos de experiência. Certificado CREF e pós-graduado em fisiologia do exercício.',
  },
  {
    name: 'Ana Rodrigues',
    role: 'Personal Trainer & Nutricionista',
    specialty: 'Funcional e Emagrecimento',
    image: '/images/trainer-2.png',
    instagram: '#',
    bio: 'Formada em Educação Física e Nutrição. Especialista em transformação corporal com abordagem integrada.',
  },
  {
    name: 'Rafael Costa',
    role: 'Personal Trainer',
    specialty: 'CrossFit e Condicionamento',
    image: '/images/trainer-3.png',
    instagram: '#',
    bio: 'Ex-atleta de alto rendimento. Certificado CrossFit Level 3 e especialista em performance esportiva.',
  },
]

/**
 * Trainers — Seção da equipe de personal trainers com cards interativos.
 */
export default function Trainers() {
  const { ref, isInView } = useSectionInView(0.1)

  return (
    <section id="equipe" className="py-24 lg:py-32 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Nossa Equipe"
          title="Personal Trainers"
          description="Profissionais qualificados e apaixonados por transformar vidas através do exercício."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.name}
              variants={staggerItem}
              className="group relative rounded-3xl overflow-hidden glass-card hover:border-primary/20 transition-all duration-500"
            >
              {/* Foto do trainer */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={`Personal Trainer ${trainer.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay que aparece no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Info no hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm text-light-text/80 leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>

                {/* Instagram link */}
                <a
                  href={trainer.instagram}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-primary hover:border-primary transition-all duration-300 -translate-y-2 group-hover:translate-y-0"
                  aria-label={`Instagram de ${trainer.name}`}
                >
                  <Instagram size={18} />
                </a>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {trainer.role}
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {trainer.specialty}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
