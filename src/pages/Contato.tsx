
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircleDashed as MessageCircle, Instagram, Facebook } from 'lucide-react'
import toast from 'react-hot-toast'
import PawAnimation from '../components/PawAnimation'


const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulação de envio
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.')

    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contatos = [
    {
      icon: Phone,
      title: 'Telefone/WhatsApp',
      info: '(44) 9991-32021',
      description: 'Disponível 24h para emergências'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'ongamaar@gmail.com',
      description: 'Respondemos em até 24 horas'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Maringá - PR',
      description: 'Praça Espaço de Adoção ou Praça do Bem Estar Animal (Pq. do Ingá)'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      info: 'Segunda a Sábado',
      description: '8h às 18h'
    }
  ]

  const redesSociais = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/ongamaar/',
      followers: '33K seguidores'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/p/ONG-AMAAR-Maring%C3%A1-PR-100087766129983/',
      followers: 'Siga nossa página'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/5544984548193',
      followers: 'Fale conosco'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#6f8aff] to-[#764BA2]">
      {/* Hero Section */}
      
    <PawAnimation />
      <section className="py-20 bg-gradient-to-br from-[#667eea71] to-[#8511f252]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Estamos aqui para ajudar. Fale conosco sobre adoção, voluntariado ou emergências
            </p>
          </motion.div>
        </div>
        
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contatos.map((contato, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-gradient-to-r from-[#667eea71] to-[#8511f252] rounded-2xl p-6"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contato.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contato.title}</h3>
                <p className="text-blue-600 font-semibold mb-1">{contato.info}</p>
                <p className="text-gray-600 text-sm">{contato.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Siga-nos nas Redes Sociais
            </h2>
            <p className="text-xl text-gray-900">
              Acompanhe nosso trabalho e histórias de sucesso
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {redesSociais.map((rede, index) => (
              <motion.a
                key={index}
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-[#667eea71] to-[#8511f252] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <rede.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{rede.name}</h3>
                <p className="text-blue-900 font-semibold">{rede.followers}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Localização
            </h2>
            <p className="text-xl text-gray-600">
              Atendemos toda a região de Maringá e cidades vizinhas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="h-96 bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.9591461576715!2d-51.93816092513797!3d-23.425842906626592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd121ecae02bb%3A0xf3e9e57ab3821027!2zUHJhw6dhIEVzcGHDp28gQWRvw6fDo28!5e0!3m2!1spt-BR!2sbr!4v1761583876139!5m2!1spt-BR!2sbr" width="1300" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergência */}
      <section className="py-20 bg-red-50 border-t border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-red-800 mb-4">
              Emergências 24 Horas
            </h2>
            <p className="text-lg text-red-700 mb-6">
              Para casos urgentes de resgate ou animais em risco de vida
            </p>
            <a
              href="tel:+55443127-5251"
              className="inline-flex items-center bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              (44) 3127-5251
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contato
