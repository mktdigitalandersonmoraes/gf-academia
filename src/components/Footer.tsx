import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react'
import { fadeInUp } from '../lib/animations'
import { useSectionInView } from '../hooks/useSectionInView'

/** Links de navegação do footer */
const footerLinks = {
  academia: [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Nossos Planos', href: '#planos' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ],
  servicos: [
    { label: 'Musculação', href: '#planos' },
    { label: 'Funcional', href: '#planos' },
    { label: 'Personal Trainer', href: '#equipe' },
    { label: 'Aulas em Grupo', href: '#planos' },
    { label: 'Nutrição', href: '#planos' },
  ],
}

/** Links de redes sociais */
const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

/**
 * Footer — Rodapé com links, informações de contato e redes sociais.
 */
export default function Footer() {
  const { ref, isInView } = useSectionInView(0.1)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-lighter border-t border-dark-border">
      <div className="section-divider" />

      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Grid principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center mb-6 group">
              <img 
                src="/images/logo.png" 
                alt="GF Academia" 
                className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-muted-text text-sm leading-relaxed mb-6">
              Transformando vidas através do esporte e do bem-estar há mais de 15
              anos. Sua evolução começa aqui.
            </p>
            {/* Redes sociais */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-muted-text hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Academia */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Academia</h4>
            <ul className="space-y-3">
              {footerLinks.academia.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-text text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Serviços */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-text text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato rápido */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-text">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Rua das Palmeiras, 1234 — Centro, São Paulo/SP</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-text">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-text">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>contato@gfacademia.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-text text-sm text-center md:text-left">
            © {new Date().getFullYear()} GF Academia. Todos os direitos reservados.
          </p>
          <p className="text-muted-text/50 text-xs">
            Feito com 🧡 para transformar vidas
          </p>
        </div>
      </motion.div>

      {/* Botão voltar ao topo */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/20 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}
