import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Image as ImageIcon } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '../hooks/useSectionInView'
import { fadeInUp } from '../lib/animations'

/** Tipos de mídia permitidos na galeria */
type MediaType = 'photo' | 'video'

/** Interface para os itens da galeria */
interface GalleryItem {
  id: number
  type: MediaType
  unit: string
  title: string
  src: string
}

/** 
 * Dados de exemplo (MOCK) para a galeria.
 * Mais tarde, você pode substituir pelas suas fotos e links do YouTube.
 */
const mockGalleryItems: GalleryItem[] = [
  // Missionária
  {
    id: 1,
    type: 'photo',
    unit: 'Missionária',
    title: 'Musculação',
    src: '/images/missionaria/musculacao-1.webp',
  },
  {
    id: 2,
    type: 'photo',
    unit: 'Missionária',
    title: 'Musculação',
    src: '/images/missionaria/musculacao-2.webp',
  },
  {
    id: 4,
    type: 'photo',
    unit: 'Missionária',
    title: 'Área Cardio',
    src: '/images/missionaria/cardio-1.webp',
  },
  {
    id: 6,
    type: 'photo',
    unit: 'Missionária',
    title: 'Área Cardio',
    src: '/images/missionaria/cardio-3.webp',
  },
  {
    id: 7,
    type: 'photo',
    unit: 'Missionária',
    title: 'Área Funcional',
    src: '/images/missionaria/funcional-1.webp',
  },
  {
    id: 8,
    type: 'photo',
    unit: 'Missionária',
    title: 'Área Funcional',
    src: '/images/missionaria/funcional-2.webp',
  },
  // Yervant
  {
    id: 9,
    type: 'photo',
    unit: 'Yervant',
    title: 'Musculação',
    src: '/images/yervant/yervant-1.webp',
  },
  {
    id: 10,
    type: 'photo',
    unit: 'Yervant',
    title: 'Musculação',
    src: '/images/yervant/yervant-2.webp',
  },
  {
    id: 11,
    type: 'photo',
    unit: 'Yervant',
    title: 'Musculação',
    src: '/images/yervant/yervant-3.webp',
  },
  {
    id: 12,
    type: 'photo',
    unit: 'Yervant',
    title: 'Área Cardio',
    src: '/images/yervant/yervant-4.webp',
  },
  {
    id: 13,
    type: 'photo',
    unit: 'Yervant',
    title: 'Área Cardio',
    src: '/images/yervant/yervant-5.webp',
  },
  {
    id: 14,
    type: 'photo',
    unit: 'Yervant',
    title: 'Funcional',
    src: '/images/yervant/yervant-6.webp',
  },
  // Apurá
  {
    id: 15,
    type: 'photo',
    unit: 'Apurá',
    title: 'Aulas',
    src: '/images/apura/Aulas.webp',
  },
  {
    id: 16,
    type: 'photo',
    unit: 'Apurá',
    title: 'Área Cardio',
    src: '/images/apura/Cardio.webp',
  },
  {
    id: 17,
    type: 'photo',
    unit: 'Apurá',
    title: 'Área Cardio',
    src: '/images/apura/Cardio 3.webp',
  },
  {
    id: 18,
    type: 'photo',
    unit: 'Apurá',
    title: 'Musculação',
    src: '/images/apura/Musculação.webp',
  },
  {
    id: 19,
    type: 'photo',
    unit: 'Apurá',
    title: 'Musculação',
    src: '/images/apura/Musculação 2.webp',
  },
  {
    id: 20,
    type: 'photo',
    unit: 'Apurá',
    title: 'Musculação',
    src: '/images/apura/Musculação 4.webp',
  },
]

/** Unidades disponíveis para o filtro */
const units = ['Missionária', 'Canhema', 'Apurá', 'São Jorge', 'Yervant']

/**
 * Gallery — Nova seção de galeria de fotos e vídeos.
 */
export default function Gallery() {
  const { ref, isInView } = useSectionInView(0.1)
  const [activeUnit, setActiveUnit] = useState('Missionária')
  const [activeType, setActiveType] = useState<MediaType>('photo')

  // Filtra os itens com base na unidade e no tipo de mídia
  const filteredItems = mockGalleryItems.filter(
    (item) => item.unit === activeUnit && item.type === activeType
  )

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-dark-lighter relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Nossa Estrutura"
          title="Galeria GF Academia"
          description="Explore nossas unidades, equipamentos de ponta e o ambiente feito para o seu resultado."
        />

        {/* Sistema de Filtros (Unidades) */}
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-3 mt-12 mb-8"
        >
          {units.map((unit) => (
            <button
              key={unit}
              onClick={() => setActiveUnit(unit)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeUnit === unit
                  ? 'bg-primary text-dark shadow-lg shadow-primary/30 scale-105'
                  : 'bg-dark-card border border-dark-border text-muted-text hover:text-white hover:border-primary/50'
              }`}
            >
              {unit}
            </button>
          ))}
        </motion.div>

        {/* Sub-filtro (Fotos / Vídeos) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setActiveType('photo')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-colors ${
              activeType === 'photo'
                ? 'bg-dark-border text-white'
                : 'text-muted-text hover:text-white hover:bg-dark-card'
            }`}
          >
            <ImageIcon size={18} />
            Fotos
          </button>
          <button
            onClick={() => setActiveType('video')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-colors ${
              activeType === 'video'
                ? 'bg-dark-border text-white'
                : 'text-muted-text hover:text-white hover:bg-dark-card'
            }`}
          >
            <Play size={18} />
            Vídeos
          </button>
        </motion.div>

        {/* Grid da Galeria */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border aspect-[4/3] flex flex-col"
              >
                {item.type === 'photo' ? (
                  <>
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <ImageIcon size={16} className="text-primary" />
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">
                          {item.unit}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Para vídeos, usamos um iframe do YouTube */}
                    <div className="relative w-full h-full">
                      <iframe
                        src={item.src}
                        title={item.title}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {/* Badge indicando que é da GF Academia */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-dark/80 backdrop-blur-sm border border-white/10 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                        <Play size={12} className="text-primary" /> Vídeo
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-muted-text">
            Nenhuma mídia encontrada para este filtro.
          </div>
        )}
      </div>
    </section>
  )
}
