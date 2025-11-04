
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Calendar, DollarSign, Gift, Users, Phone, Mail } from 'lucide-react'
import toast from 'react-hot-toast'
import PawAnimation from '../components/PawAnimation'


const Apadrinhamento = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    animalEscolhido: '',
    tipoApadrinhamento: '',
    mensagem: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `🐾 INTERESSE EM APADRINHAMENTO - AMAAR 🐾

👤 Dados do Padrinho/Madrinha:
Nome: ${formData.nome}
E-mail: ${formData.email}
Telefone: ${formData.telefone}

🐕 Animal Escolhido: ${formData.animalEscolhido}
💝 Tipo de Apadrinhamento: ${formData.tipoApadrinhamento}

📝 Mensagem:
${formData.mensagem}

Obrigado pelo interesse em apadrinhar! Entraremos em contato em breve.`

    const whatsappNumber = '5544999999999'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
    toast.success('Interesse enviado! Entraremos em contato em breve.')

    setFormData({
      nome: '',
      email: '',
      telefone: '',
      animalEscolhido: '',
      tipoApadrinhamento: '',
      mensagem: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const tiposApadrinhamento = [
    {
      tipo: 'Miau de Rua',
      valor: 'R$ 10/mês',
      beneficios: ['Acompanhamento veterinário básico', 'Fotos mensais do seu afilhado'],
      icon: Heart
    },
    {
      tipo: 'Frajolinha',
      valor: 'R$ 35/mês',
      beneficios: ['Tudo do Miau de Rua', 'Medicamentos necessários', 'Exames regulares'],
      icon: Star,
      popular: true
    },
    {
      tipo: 'Disney',
      valor: 'R$ 100/mês',
      beneficios: ['Tudo do Frajolinha', 'Cuidados especiais', 'Tratamentos específicos'],
      icon: Gift
    }
  ]

  const beneficiosPadrinho = [
    {
      icon: Calendar,
      title: 'Acompanhamento Regular',
      description: 'Receba fotos e vídeos do seu afilhado mensalmente'
    },
    {
      icon: Users,
      title: 'Visitas ao Abrigo',
      description: 'Visite seu afilhado sempre que desejar'
    },
    {
      icon: Heart,
      title: 'Certificado de Padrinho',
      description: 'Receba um certificado personalizado'
    },
    {
      icon: Phone,
      title: 'Contato Direto',
      description: 'Fale diretamente com nossa equipe'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <PawAnimation />

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Programa de Apadrinhamento
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Seja um anjo da guarda! Apadrinhe um animal e acompanhe sua jornada de perto
            </p>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona o Apadrinhamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O apadrinhamento é uma forma especial de ajudar um animal específico,
              acompanhando sua recuperação e cuidados até encontrar um lar definitivo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {beneficiosPadrinho.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <beneficio.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{beneficio.title}</h3>
                <p className="text-gray-600">{beneficio.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Apadrinhamento */}
      {/* Tipos de Apadrinhamento */}
<section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Tipos de Apadrinhamento
      </h2>
      <p className="text-xl text-gray-600">
        Escolha o plano que melhor se adapta às suas possibilidades
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {tiposApadrinhamento.map((tipo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className={`bg-white rounded-2xl p-8 text-center relative transition-all duration-300
            ${tipo.popular
              ? 'ring-2 ring-blue-500 shadow-2xl scale-105'
              : 'shadow-lg hover:ring-2 hover:ring-blue-500 hover:shadow-2xl hover:scale-105'
            }`}
        >
          {tipo.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Mais Popular
              </span>
            </div>
          )}

          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300
              ${tipo.popular
                ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-blue-500 hover:to-purple-500'
              }`}
          >
            <tipo.icon className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {tipo.tipo}
          </h3>

          <div className="text-3xl font-bold text-blue-600 mb-6">
            {tipo.valor}
          </div>

          <ul className="space-y-3 text-left">
            {tipo.beneficios.map((beneficio, beneficioIndex) => (
              <li key={beneficioIndex} className="flex items-start">
                <Heart
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                />
                <span className="text-gray-700">{beneficio}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>




      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Seja um Anjo da Guarda
            </h2>
            <p className="text-xl text-white/90 mb-8">
              O apadrinhamento é mais que uma doação, é criar um vínculo especial
              e acompanhar a transformação de uma vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdMaBc_NLFLQGApk1SaGJ8fiZ7UeIzEKX5RRNlyuWPsI8Hphg/viewform" target='_blank'
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Quero Apadrinhar
              </a>
              <a
                href="/contato"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Tire suas Dúvidas
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Apadrinhamento
