import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '../hooks/useSectionInView'
import { staggerContainer, staggerItem } from '../lib/animations'

/** Lista de unidades */
const locations = [
  { name: 'Missionária', image: '/images/unidade-missionaria.jpg' },
  { name: 'Yervant' },
  { name: 'São Jorge' },
  { name: 'Apurá', image: '/images/unidade-apura.png', objectPosition: '35% center' },
  { name: 'Canhema', image: '/images/unidade-canhema.jpg' },
]

/**
 * Locations — Seção das unidades da academia.
 */
export default function Locations() {
  const { ref, isInView } = useSectionInView(0.1)

  return (
    <section id="unidades" className="py-24 lg:py-32 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Unidades"
          title="Nossas Unidades"
          description="Cada unidade pensando no seu bem-estar e desenvolvimento."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto"
        >
          {locations.map((location) => (
            <motion.div
              key={location.name}
              variants={staggerItem}
              className="group relative rounded-3xl overflow-hidden glass-card hover:border-primary/20 transition-all duration-500"
            >
              {/* Foto ou Placeholder */}
              {location.image ? (
                <div className="relative h-64 overflow-hidden border-b border-white/5">
                  <img
                    src={location.image}
                    alt={`Unidade ${location.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: (location as { name: string; image?: string; objectPosition?: string }).objectPosition ?? 'center center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
              ) : (
                <div className="relative h-64 bg-dark-lighter/50 flex flex-col items-center justify-center border-b border-white/5">
                  <MapPin size={40} className="text-muted-text/30 mb-3" />
                  <span className="text-sm font-medium text-muted-text/50">Foto em breve</span>
                </div>
              )}

              {/* Info da Unidade */}
              <div className="p-6 text-center">
                <h3 className="font-heading font-bold text-xl text-white">
                  {location.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
