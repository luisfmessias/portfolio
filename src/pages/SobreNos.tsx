
import React from 'react'
import { motion } from 'framer-motion'
import {Heart, Users, Award, Target, Shield, Sparkles} from 'lucide-react'
import PawAnimation from '../components/PawAnimation'


const SobreNos = () => {
  const valores = [
    {
      icon: Heart,
      title: 'Amor Incondicional',
      description: 'Cada animal merece amor, cuidado e uma segunda chance de ser feliz.'
    },
    {
      icon: Shield,
      title: 'Proteção Animal',
      description: 'Defendemos os direitos dos animais e lutamos contra maus-tratos e abandono.'
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Unidos pela causa animal, trabalhamos juntos para salvar mais vidas.'
    },
    {
      icon: Sparkles,
      title: 'Transparência',
      description: 'Prestamos contas de cada doação e mostramos o impacto do seu apoio.'
    }
  ]

  const conquistas = [
    { numero: '2000+', texto: 'Animais Resgatados' },
    { numero: '1500+', texto: 'Adoções Realizadas' },
    { numero: '11', texto: 'Anos de Dedicação' },
    { numero: '500+', texto: 'Castrações Realizadas' }
  ]

  const equipe = [
    {
      nome: 'Ariane',
      cargo: 'Fundadora / Voluntária',
      foto: 'https://ongamaar.org/wp-content/uploads/2025/07/1747586969947-e1752448990322.jpg',
      descricao: 'Ariane é médica veterinária e uma das fundadoras do projeto. Atua desde o início da ONG, com mais de 11 anos de dedicação e compromisso com a causa animal.'
    },
    {
      nome: 'Julia',
      cargo: 'Voluntária',
      foto: 'https://ongamaar.org/wp-content/uploads/2025/07/julia.png',
      descricao: 'Julia é voluntária há cerca de dois anos, ajudando na feirinha de adoção e oferecendo lar temporário. Seu apoio tem sido fundamental para o acolhimento e encaminhamento dos animais.'
    },
    {
      nome: 'Gislaine',
      cargo: 'Fundadora / Voluntária',
      foto: 'https://ongamaar.org/wp-content/uploads/2025/07/gislaine.png',
      descricao: 'Gislaine é uma das fundadoras da ONG e esteve presente desde os primeiros passos do projeto. Com dedicação e sensibilidade, contribui ativamente para o acolhimento e cuidado dos animais desde o início da trajetória da organização'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6f8aff] to-[#764BA2]">
      {/* Hero Section */}
      <PawAnimation />

      <section className="py-20 bg-gradient-to-r from-purple-600 to-[#6f8aff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossa História
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Conheça a jornada da AMAAR e como transformamos vidas através do amor aos animais
            </p>
          </motion.div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Como Tudo Começou
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A AMAAR nasceu em 2013 do sonho de um grupo de voluntários apaixonados 
                por animais. Vendo a triste realidade de cães e gatos abandonados nas 
                ruas de Maringá, decidimos agir.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                O que começou como um pequeno grupo de amigos se transformou em uma 
                organização reconhecida, que já salvou mais de 2.000 animais e realizou 
                mais de 1.500 adoções responsáveis.
              </p>
              <p className="text-lg text-gray-700">
                Hoje, somos uma família unida pelo amor aos animais, trabalhando 
                incansavelmente para dar uma segunda chance a cada vida que encontramos.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="./src/assets/dog-abt.png"
                alt="Voluntários da AMAAR cuidando de animais"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-gradient-to-r from-[#6f8aff] to-[#764BA2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Missão e Visão
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Nossos valores e objetivos que nos guiam todos os dias
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-700 text-lg">
                Resgatar, cuidar e encontrar lares amorosos para animais abandonados, 
                promovendo a adoção responsável e a conscientização sobre os direitos 
                dos animais em nossa comunidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="bg-[#61acd1] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-700 text-lg">
                Ser referência em proteção animal no Paraná, criando uma sociedade 
                onde todos os animais tenham direito a uma vida digna, com amor, 
                cuidado e respeito.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que norteiam todas as nossas ações
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-[#6f8aff] to-[#764BA2]  w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <valor.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{valor.title}</h3>
                <p className="text-gray-600">{valor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conquistas */}
      <section className="py-20 bg-gradient-to-r from-[#6f8aff] to-[#764BA2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Nossas Conquistas
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Números que representam vidas transformadas
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {conquistas.map((conquista, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {conquista.numero}
                </div>
                <div className="text-white/90 text-lg">{conquista.texto}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as pessoas dedicadas que fazem a diferença todos os dias
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {equipe.map((membro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#667eea71] to-[#8511f252] rounded-2xl p-6 text-center"
              >
                <img
                  src={membro.foto}
                  alt={membro.nome}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{membro.nome}</h3>
                <p className="text-purple-900 font-semibold mb-3">{membro.cargo}</p>
                <p className="text-gray-600">{membro.descricao}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-gray-100 mb-6">
              Faça Parte da Nossa História
            </h2>
            <p className="text-xl text-gray-50 mb-8">
              Juntos, podemos salvar ainda mais vidas e criar um mundo melhor para os animais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/doacao"
                className="bg-white text-[#764BA2] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#9d66d41f] hover:text-white hover:border-2 border-white transition-colors shadow-lg"
              >
                Fazer Doação
              </a>
              <a
                href="/contato"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#764BA2] transition-colors"
              >
                Seja Voluntário
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SobreNos
