import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '../hooks/useSectionInView'
import { fadeInLeft, fadeInRight } from '../lib/animations'

/** Informações de contato */
const contactInfo = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rua das Palmeiras, 1234 — Centro, São Paulo/SP',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(11) 99999-9999',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@gfacademia.com.br',
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Seg-Sex: 5h-23h | Sáb: 7h-18h | Dom: 8h-14h',
  },
]

/**
 * Contact — Seção de contato com formulário e informações.
 */
export default function Contact() {
  const { ref, isInView } = useSectionInView(0.1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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
          description="Tem alguma dúvida? Entre em contato e nossa equipe responderá o mais rápido possível."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-12">
          {/* Informações de contato */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3 className="font-heading font-bold text-2xl text-white mb-8">
              Informações de{' '}
              <span className="gradient-text">Contato</span>
            </h3>

            <div className="space-y-6">
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
                    <p className="text-muted-text text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa placeholder */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-dark-border h-48 bg-dark-card flex items-center justify-center">
              <iframe
                title="Localização GF Academia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975635942914!2d-46.65442708502212!3d-23.56115668468092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
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
