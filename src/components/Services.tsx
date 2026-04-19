import { motion } from 'framer-motion'
import { Check, Zap, Crown, Flame } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '../hooks/useSectionInView'
import { staggerContainer, staggerItem } from '../lib/animations'

/** Dados dos planos */
const plans = [
  {
    name: 'Básico',
    icon: Zap,
    price: '89',
    period: '/mês',
    description: 'Ideal para quem está começando sua jornada fitness.',
    features: [
      'Acesso à musculação',
      'Horário comercial (6h-22h)',
      'Avaliação física mensal',
      'Acesso ao app de treinos',
      'Armário incluso',
    ],
    popular: false,
    cta: 'Começar Agora',
  },
  {
    name: 'Premium',
    icon: Crown,
    price: '149',
    period: '/mês',
    description: 'O mais escolhido! Acesso completo com acompanhamento.',
    features: [
      'Acesso ilimitado 24h',
      'Todas as aulas em grupo',
      'Personal trainer 2x/semana',
      'Avaliação física semanal',
      'Área de alongamento e spa',
      'Suplementação com desconto',
      'Estacionamento grátis',
    ],
    popular: true,
    cta: 'Escolher Premium',
  },
  {
    name: 'Black',
    icon: Flame,
    price: '249',
    period: '/mês',
    description: 'Experiência exclusiva com atendimento VIP personalizado.',
    features: [
      'Tudo do plano Premium',
      'Personal trainer ilimitado',
      'Nutricionista dedicado',
      'Acesso área VIP',
      'Toalhas e kit fitness',
      'Prioridade em aulas',
      'Acompanhamento online 24h',
      'Treino em outras unidades',
    ],
    popular: false,
    cta: 'Ser Black',
  },
]

/**
 * Services — Seção de planos / serviços com cards estilizados.
 * O plano Premium é destacado como o mais popular.
 */
export default function Services() {
  const { ref, isInView } = useSectionInView(0.1)

  return (
    <section id="planos" className="py-24 lg:py-32 relative bg-dark-lighter">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Nossos Planos"
          title="Escolha o Plano Ideal"
          description="Planos flexíveis que se adaptam ao seu estilo de vida. Todos com acesso a equipamentos de última geração."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={`relative rounded-3xl p-8 transition-all duration-500 group hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-gradient-to-b from-primary/10 to-dark-card border-2 border-primary/30 shadow-2xl shadow-primary/10'
                  : 'glass-card hover:border-primary/15'
              }`}
            >
              {/* Badge "Mais Popular" */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Mais Popular
                </div>
              )}

              {/* Ícone */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.popular
                    ? 'bg-primary text-white'
                    : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                } transition-all duration-300`}
              >
                <plan.icon size={28} />
              </div>

              {/* Nome e descrição */}
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-text text-sm mb-6">{plan.description}</p>

              {/* Preço */}
              <div className="flex items-end gap-1 mb-8">
                <span className="text-muted-text text-lg">R$</span>
                <span className="font-heading font-black text-5xl gradient-text">
                  {plan.price}
                </span>
                <span className="text-muted-text text-sm mb-2">
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-light-text">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Botão CTA */}
              <a
                href="#contato"
                className={`block text-center py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105'
                    : 'border-2 border-dark-border text-white hover:border-primary hover:bg-primary/5'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
