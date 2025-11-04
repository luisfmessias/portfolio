
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {Heart, PawPrint,  Users, Home as HomeIcon, Award} from 'lucide-react'
import PawAnimation from '../components/PawAnimation'


const Home = () => {
  const stats = [
    { icon: PawPrint, number: '2000+', label: 'Animais Resgatados' },
    { icon: HomeIcon, number: '1500+', label: 'Adoções Realizadas' },
    { icon: Users, number: '11', label: 'Anos de Dedicação' },
    { icon: Award, number: '100%', label: 'Amor e Cuidado' },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r  from-[#6f8aff] to-[#764BA2] from--10% ">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Cada Animal Merece
              <span className="block text-[#7aceff]">Uma Segunda Chance</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Há mais de 11 anos, a AMAAR transforma vidas através do amor, 
              cuidado e dedicação aos animais em situação de abandono em Maringá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/doacao"
                className="bg-white text-[#764BA2] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#9d66d41f] hover:text-white hover:border-2 border-white transition-colors shadow-lg"
              >
                Fazer Doação
              </Link>
              <Link
                to="/apadrinhamento"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#764BA2] transition-colors"
              >
                Apadrinhar um Pet
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <PawAnimation />

      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r  from-[#4a6bff] to-[#7d40b9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-[#667eea28] to-[#e711f229]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nossa Missão é Salvar Vidas
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A AMAAR nasceu do amor incondicional aos animais e da necessidade 
                urgente de dar uma segunda chance àqueles que foram abandonados. 
                Cada resgate é uma nova história de esperança.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#764BA2] w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-gray-700">Resgate de animais em situação de risco</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#764BA2] w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-gray-700">Cuidados veterinários completos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#764BA2] w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-gray-700">Castração responsável</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#764BA2] w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-gray-700">Busca por lares amorosos</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="./src/assets/dogs.png"
                alt="Cão resgatado sendo cuidado"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-purple-700">+11</div>
                <div className="text-gray-600">Anos de amor</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#6f8aff] to-[#764BA2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Seja Parte Desta Transformação
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Sua ajuda pode salvar uma vida hoje. Cada doação, cada adoção, 
              cada gesto de amor faz a diferença na vida de um animal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resgate"
                className="bg-white text-[#764BA2] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#9d66d41f] hover:text-white hover:border-2 border-white transition-colors shadow-lg"
              >
                Reportar Resgate
              </Link>
              <Link
                to="/contato"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#764BA2] transition-colors"
              >
                Entre em Contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
