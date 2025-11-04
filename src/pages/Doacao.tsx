
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Heart, DollarSign, Gift, CreditCard, Copy, Check, PiggyBank, Stethoscope, Home, Utensils} from 'lucide-react'
import toast from 'react-hot-toast'
import PawAnimation from '../components/PawAnimation'


const Doacao = () => {
  const [pixCopiado, setPixCopiado] = useState(false)
  const pixKey = 'ongamaar@gmail.com'

  const copiarPix = () => {
    navigator.clipboard.writeText(pixKey)
    setPixCopiado(true)
    toast.success('Chave PIX copiada!')
    setTimeout(() => setPixCopiado(false), 3000)
  }

  const formasDoacao = [
    {
      icon: CreditCard,
      title: 'PIX',
      description: 'Forma mais rápida e prática',
      destaque: true
    },
    {
      icon: DollarSign,
      title: 'Doação Local',
      description: 'Praça Espaço de Adoção ou Praça do Bem Estar Animal (Pq. do Ingá'
    },
    {
      icon: Gift,
      title: 'Doação de Itens',
      description: 'Ração, medicamentos, cobertores'
    },
    {
      icon: Heart,
      title: 'Doação Recorrente',
      description: 'Seja um anjo da guarda mensal'
    }
  ]

  const usoRecursos = [
    {
      icon: Stethoscope,
      title: 'Cuidados Veterinários',
      porcentagem: '40%',
      description: 'Consultas, cirurgias, medicamentos e exames'
    },
    {
      icon: Utensils,
      title: 'Alimentação',
      porcentagem: '30%',
      description: 'Ração de qualidade para todos os animais'
    },
    {
      icon: Home,
      title: 'Abrigo e Infraestrutura',
      porcentagem: '20%',
      description: 'Manutenção do abrigo e melhorias'
    },
    {
      icon: PiggyBank,
      title: 'Reserva de Emergência',
      porcentagem: '10%',
      description: 'Para casos urgentes e imprevistos'
    }
  ]

  const valoresSugeridos = [
    { valor: 25, descricao: '1 semana de ração para 1 animal' },
    { valor: 50, descricao: 'Consulta veterinária básica' },
    { valor: 100, descricao: 'Castração de 1 animal' },
    { valor: 200, descricao: '1 mês de cuidados completos' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <PawAnimation />

      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Faça uma Doação
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Sua generosidade salva vidas. Cada doação faz a diferença na vida de um animal
            </p>
          </motion.div>
        </div>
      </section>

      {/* PIX em Destaque */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Doação via PIX
            </h2>
            <p className="text-xl text-gray-600">
              A forma mais rápida e segura de ajudar
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border-2 border-green-200"
          >
            <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="h-10 w-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Chave PIX</h3>
            
            <div className="bg-white rounded-lg p-6 mb-6 border border-green-200">
              <p className="text-lg text-gray-600 mb-2">E-mail:</p>
              <p className="text-2xl font-mono font-bold text-gray-900 mb-4">{pixKey}</p>
              
              <button
                onClick={copiarPix}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  pixCopiado 
                    ? 'bg-green-500 text-white' 
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {pixCopiado ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5 mr-2" />
                    Copiar Chave PIX
                  </>
                )}
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">QR Code PIX</h4>
              <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto flex items-center justify-center mb-4">
                <div className="text-center">
                  <img src="./src/assets/qrcode.png" alt="" />
                  <p className="text-gray-500 text-sm">QR Code PIX</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Escaneie o código com seu app de banco
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outras Formas de Doação */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Outras Formas de Ajudar
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a forma que melhor se adapta a você
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {formasDoacao.map((forma, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`text-center p-6 rounded-2xl ${
                  forma.destaque 
                    ? 'bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-300' 
                    : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  forma.destaque 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                    : 'bg-gradient-to-r from-gray-500 to-gray-600'
                }`}>
                  <forma.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{forma.title}</h3>
                <p className="text-gray-600">{forma.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Usamos os Recursos */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Usamos os Recursos
            </h2>
            <p className="text-xl text-gray-600">
              Transparência total no uso das doações
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usoRecursos.map((uso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <uso.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{uso.porcentagem}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{uso.title}</h3>
                <p className="text-gray-600 text-sm">{uso.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Necessidades */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Itens Mais Necessários
            </h2>
            <p className="text-xl text-gray-600">
              Você também pode doar itens que sempre precisamos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-300 to-purple-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alimentação</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ração para cães (adulto e filhote)</li>
                <li>• Ração para gatos (adulto e filhote)</li>
                <li>• Ração terapêutica</li>
                <li>• Petiscos e snacks</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-100 to-cyan-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medicamentos</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Vermífugos</li>
                <li>• Antipulgas</li>
                <li>• Antibióticos</li>
                <li>• Anti-inflamatórios</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-blue-300 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Materiais</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cobertores e toalhas</li>
                <li>• Coleiras e guias</li>
                <li>• Brinquedos</li>
                <li>• Material de limpeza</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cada Doação Salva uma Vida
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a nós nessa missão de amor e transformação. 
              Sua generosidade é a esperança de um animal em necessidade.
            </p>
            <button
              onClick={copiarPix}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Doar Agora via PIX
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Doacao
