
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {AlertTriangle, MapPin, Clock, Phone, Camera} from 'lucide-react'
import toast from 'react-hot-toast'

const Resgate = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    endereco: '',
    tipoAnimal: '',
    situacao: '',
    urgencia: '',
    descricao: '',
    tempoLocal: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `🚨 RELATÓRIO DE RESGATE - AMAAR 🚨

👤 Dados do Relator:
Nome: ${formData.nome}
Telefone: ${formData.telefone}

📍 Localização:
Endereço: ${formData.endereco}

🐾 Dados do Animal:
Tipo: ${formData.tipoAnimal}
Situação: ${formData.situacao}
Nível de Urgência: ${formData.urgencia}
Tempo no local: ${formData.tempoLocal}

📝 Descrição:
${formData.descricao}

Por favor, enviem ajuda o mais rápido possível!`

    const whatsappNumber = '5544998505849' // Substitua pelo número real
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    toast.success('Relatório enviado! Aguarde nosso contato.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-[#6200ff13] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Relatório de Resgate
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontrou um animal em situação de risco? Preencha o formulário abaixo 
            e nossa equipe entrará em contato o mais rápido possível.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dados Pessoais */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Phone className="h-5 w-5 text-purple-500 mr-2" />
                Seus Dados para Contato
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="(44) 99999-9999"
                  />
                </div>
              </div>
            </div>

            {/* Localização */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-purple-500 mr-2" />
                Localização do Animal
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Endereço Completo *
                </label>
                <input
                  type="text"
                  name="endereco"
                  required
                  value={formData.endereco}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Rua, número, bairro, pontos de referência"
                />
              </div>
            </div>

            {/* Dados do Animal */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Camera className="h-5 w-5 text-purple-500 mr-2" />
                Informações do Animal
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Animal *
                  </label>
                  <select
                    name="tipoAnimal"
                    required
                    value={formData.tipoAnimal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="Cão">Cão</option>
                    <option value="Gato">Gato</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Situação Atual *
                  </label>
                  <select
                    name="situacao"
                    required
                    value={formData.situacao}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="Ferido">Ferido</option>
                    <option value="Doente">Doente</option>
                    <option value="Abandonado">Abandonado</option>
                    <option value="Perdido">Perdido</option>
                    <option value="Maus-tratos">Maus-tratos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nível de Urgência *
                  </label>
                  <select
                    name="urgencia"
                    required
                    value={formData.urgencia}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="Crítica">Crítica (risco de vida)</option>
                    <option value="Alta">Alta (precisa de cuidados urgentes)</option>
                    <option value="Média">Média (pode aguardar algumas horas)</option>
                    <option value="Baixa">Baixa (situação estável)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Há quanto tempo o animal está no local? *
                </label>
                <select
                  name="tempoLocal"
                  required
                  value={formData.tempoLocal}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione</option>
                  <option value="Acabei de encontrar">Acabei de encontrar</option>
                  <option value="Algumas horas">Algumas horas</option>
                  <option value="1 dia">1 dia</option>
                  <option value="2-3 dias">2-3 dias</option>
                  <option value="Mais de uma semana">Mais de uma semana</option>
                  <option value="Não sei">Não sei</option>
                </select>
              </div>
            </div>

            {/* Descrição */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 text-purple-500 mr-2" />
                Descrição Detalhada
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descreva a situação do animal *
                </label>
                <textarea
                  name="descricao"
                  required
                  rows={4}
                  value={formData.descricao}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Descreva o estado do animal, comportamento, ferimentos visíveis, se tem acesso a água/comida, etc."
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6f8aff] to-purple-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-[#6f8aff] hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enviar Relatório de Resgate
            </button>
          </form>
        </motion.div>

        {/* Informações de Emergência */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold text-red-800 mb-3">
            Em Casos de Emergência
          </h3>
          <p className="text-red-700 mb-4">
            Se o animal estiver em risco iminente de vida, ligue imediatamente:
          </p>
          <div className="flex items-center justify-center bg-red-500 text-white py-3 px-6 rounded-lg font-bold text-lg">
            <Phone className="h-5 w-5 mr-2" />
            (44) 3127-5251
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resgate
