import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Send, Instagram } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '../hooks/useSectionInView'
import { fadeInLeft, fadeInRight } from '../lib/animations'

/** Dados das unidades para contato */
const unitsData = [
  {
    name: 'Missionária',
    address: 'Rua Frei Lourenço de Alcântara, 75 - Vila Missionaria, São Paulo/SP',
    phone: '(11) 94478-6613',
    hours: 'Seg-Sex: 6h-22h | Sáb: 9h-14h',
    mapUrl: 'https://maps.google.com/maps?q=Rua%20Frei%20Louren%C3%A7o%20de%20Alc%C3%A2ntara,%2075%20-%20Vila%20Missionaria,%20S%C3%A3o%20Paulo/SP&t=&z=15&ie=UTF8&iwloc=&output=embed',
    instagram: 'https://www.instagram.com/gf.missionaria.oficial/'
  },
  {
    name: 'Yervant',
    address: 'Av. Yervant Kissajikian, 3636 - Americanópolis, São Paulo/SP',
    phone: '(11) 99771-0042',
    hours: 'Seg-Sex: 6h-23h | Sáb: 9h-14h',
    mapUrl: 'https://maps.google.com/maps?q=Av.%20Yervant%20Kissajikian,%203636%20-%20American%C3%B3polis,%20S%C3%A3o%20Paulo/SP&t=&z=15&ie=UTF8&iwloc=&output=embed',
    instagram: 'https://www.instagram.com/gf.yervant.oficial/'
  },
  {
    name: 'Apurá',
    address: 'R. Salvador Dali, 3 - Jardim Apura, São Paulo/SP',
    phone: '(11) 99877-6895',
    hours: 'Seg-Sex: 6h-22h | Sáb: 9h-14h',
    mapUrl: 'https://maps.google.com/maps?q=R.%20Salvador%20Dali,%203%20-%20Jardim%20Apura,%20S%C3%A3o%20Paulo/SP&t=&z=15&ie=UTF8&iwloc=&output=embed',
    instagram: 'https://www.instagram.com/gf.apura.oficial/'
  },
  {
    name: 'São Jorge',
    address: 'Rua Dina de Azevedo Alvim, 181 - Jardim São Jorge, São Paulo/SP',
    phone: '(11) 91137-2695',
    hours: 'Seg-Sex: 6h-23h | Sáb: 9h-14h',
    mapUrl: 'https://maps.google.com/maps?q=Rua%20Dina%20de%20Azevedo%20Alvim,%20181%20-%20Jardim%20S%C3%A3o%20Jorge,%20S%C3%A3o%20Paulo/SP&t=&z=15&ie=UTF8&iwloc=&output=embed',
    instagram: 'https://www.instagram.com/gf.saojorge.oficial/'
  },
  {
    name: 'Canhema',
    address: 'Rua Vinte e Seis de Abril, 20 - Canhema, Diadema/SP',
    phone: '(11) 95630-8853',
    hours: 'Seg-Sex: 6h-23h | Sáb: 9h-14h',
    mapUrl: 'https://maps.google.com/maps?q=Rua%20Vinte%20e%20Seis%20de%20Abril,%2020%20-%20Canhema,%20Diadema/SP&t=&z=15&ie=UTF8&iwloc=&output=embed',
    instagram: 'https://www.instagram.com/gf.canhema.oficial/'
  }
]

/**
 * Contact — Seção de contato com formulário e informações.
 */
export default function Contact() {
  const { ref, isInView } = useSectionInView(0.1)
  const [activeUnit, setActiveUnit] = useState('Missionária')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentUnit = unitsData.find(u => u.name === activeUnit) || unitsData[0]

  const contactInfo = [
    { icon: MapPin, label: 'Endereço', value: currentUnit.address },
    { icon: Phone, label: 'Telefone', value: currentUnit.phone },
    { icon: Clock, label: 'Horário', value: currentUnit.hours },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      value: '@' + currentUnit.instagram.split('instagram.com/')[1].replace(/\//g, ''), 
      link: currentUnit.instagram 
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simula envio do formulário
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contato" className="py-24 lg:py-32 relative bg-dark-lighter">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contato"
          title="Fale Conosco"
          description="Tem alguma dúvida? Selecione a unidade e entre em contato conosco."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-12">
          {/* Informações de contato */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col h-full"
          >
            {/* Seletor de Unidades */}
            <div className="flex flex-wrap gap-2 mb-8">
              {unitsData.map((unit) => (
                <button
                  key={unit.name}
                  onClick={() => setActiveUnit(unit.name)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeUnit === unit.name
                      ? 'bg-primary text-dark shadow-lg shadow-primary/20 scale-105'
                      : 'bg-dark-card border border-dark-border text-muted-text hover:border-primary/50 hover:text-white'
                  }`}
                >
                  {unit.name}
                </button>
              ))}
            </div>

            <div className="space-y-6 flex-grow">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {info.label}
                    </h4>
                    {(info as any).link ? (
                      <a 
                        href={(info as any).link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:underline hover:text-primary-dark transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-text text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa dinâmico */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-dark-border h-56 bg-dark-card flex items-center justify-center relative">
              <iframe
                title={`Localização ${currentUnit.name}`}
                src={currentUnit.mapUrl}
                className="absolute inset-0 w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10">
              <h3 className="font-heading font-bold text-2xl text-white mb-8">
                Envie uma{' '}
                <span className="gradient-text">Mensagem</span>
              </h3>

              <div className="space-y-5">
                {/* Nome */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-muted-text mb-2"
                  >
                    Seu Nome
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-muted-text/50 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 outline-none"
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-muted-text mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-muted-text/50 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 outline-none"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-muted-text mb-2"
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-muted-text/50 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 outline-none"
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-muted-text mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos como podemos ajudar..."
                    className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-muted-text/50 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 outline-none resize-none"
                  />
                </div>

                {/* Botão de envio */}
                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:shadow-primary/30'
                  }`}
                >
                  {isSubmitted ? (
                    '✓ Mensagem Enviada!'
                  ) : (
                    <>
                      Enviar Mensagem <Send size={18} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
