import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '../hooks/useSectionInView'
import { staggerContainer, staggerItem } from '../lib/animations'

/** Lista de unidades */
const locations = [
  { 
    name: 'Missionária', 
    image: '/images/unidade-missionaria.webp',
    objectPosition: 'center',
    objectFit: 'contain',
    whatsapp: 'https://api.whatsapp.com/send/?phone=5511944786613&text&type=phone_number&app_absent=0'
  },
  { 
    name: 'Yervant',
    image: '/images/unidade-yervant.webp',
    whatsapp: 'https://api.whatsapp.com/send?phone=5511997710042&text=Ol%C3%A1%2C+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es'
  },
  { 
    name: 'Apurá', 
    image: '/images/unidade-apura.webp', 
    objectPosition: 'center',
    objectFit: 'contain',
    whatsapp: 'https://api.whatsapp.com/send?phone=5511998776895&text=Ol%C3%A1%2C+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es.'
  },
  { 
    name: 'São Jorge',
    image: '/images/unidade-sao-jorge.webp',
    objectPosition: 'center',
    objectFit: 'cover',
    whatsapp: 'https://api.whatsapp.com/send?phone=5511911372695&text=Ol%C3%A1%2C+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es'
  },
  {
    name: 'Canhema',
    image: '/images/unidade-canhema.webp',
    preVenda: true,
    preVendaPrice: 'R$ 49,99',
    whatsapp: 'https://api.whatsapp.com/send?phone=5511956308853&text=Ol%C3%A1%2C+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es',
  },
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
              className="group relative flex flex-col h-full rounded-3xl overflow-hidden glass-card hover:border-primary/20 transition-all duration-500"
            >
              {/* Foto ou Placeholder */}
              {location.image ? (
                <div className="relative h-64 overflow-hidden border-b border-white/5 bg-[#121214]">
                  <img
                    src={location.image}
                    alt={`Unidade ${location.name}`}
                    className={`w-full h-full group-hover:scale-110 transition-transform duration-700 ${
                      (location as any).objectFit === 'contain' ? 'object-contain p-2' : 'object-cover'
                    }`}
                    style={{ objectPosition: (location as any).objectPosition ?? 'center center' }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                  {/* Badge Pré-Venda */}
                  {(location as any).preVenda && (
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary text-dark text-xs font-black uppercase tracking-wider animate-pulse-glow">
                        🔥 Pré-Venda
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative h-64 bg-dark-lighter/50 flex flex-col items-center justify-center border-b border-white/5">
                  <MapPin size={40} className="text-muted-text/30 mb-3" />
                  <span className="text-sm font-medium text-muted-text/50">Foto em breve</span>
                </div>
              )}

              {/* Info da Unidade */}
              <div className="p-6 text-center flex flex-col flex-grow items-center">
                <h3 className="font-heading font-bold text-xl text-white mb-4">
                  {location.name}
                </h3>
                {(location as any).preVenda ? (
                  <div className="mt-auto w-full">
                    <p className="text-muted-text text-sm mb-1">Pré-Venda por apenas</p>
                    <p className="font-heading font-black text-2xl text-primary mb-4">
                      {(location as any).preVendaPrice}<span className="text-sm font-medium text-muted-text">/mês</span>
                    </p>
                    <a
                      href={(location as any).whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-dark font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                    >
                      Garantir Minha Vaga
                    </a>
                  </div>
                ) : (
                  (location as any).whatsapp && (
                    <div className="mt-auto w-full">
                      <a
                        href={(location as any).whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold rounded-full hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
                      >
                        Falar no WhatsApp
                      </a>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
