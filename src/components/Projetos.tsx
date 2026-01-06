import React, { useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion'

import milhao from '../public/AssetsPortifolio/Projetos/Primeiro Milhão.jpg'
import powerman from '../public/AssetsPortifolio/Projetos/Power Man.jpg'
import amaar from '../public/AssetsPortifolio/Projetos/Amaar.jpg'
import nike from '../public/AssetsPortifolio/Projetos/Nike.jpg'
import github from '../public/AssetsPortifolio/Projetos/github.png'
import githubblack from '../public/AssetsPortifolio/contato/github.png'
import portifolio from '../public/AssetsPortifolio/Projetos/portifolio.jpg'
import tech from '../public/AssetsPortifolio/Projetos/tech.jpg'


import milhao1 from '../public/AssetsPortifolio/Projetos/modal/milhaomodal1.png'
import milhao2 from '../public/AssetsPortifolio/Projetos/modal/milhaomodal2.png'
import power1 from '../public/AssetsPortifolio/Projetos/modal/pmmodal1.png'
import power2 from '../public/AssetsPortifolio/Projetos/modal/pmmodal2.png'
import portifolio1 from '../public/AssetsPortifolio/Projetos/modal/portifoliomodal1.png'
import portifolio2 from '../public/AssetsPortifolio/Projetos/modal/portifoliomodal2.png'
import amaar1 from '../public/AssetsPortifolio/Projetos/modal/amaarmodal1.png'
import amaar2 from '../public/AssetsPortifolio/Projetos/modal/amaarmodal2.png'
import tech1 from '../public/AssetsPortifolio/Projetos/modal/techmodal1.png'
import tech2 from '../public/AssetsPortifolio/Projetos/modal/techmodal2.png'
import nike1 from '../public/AssetsPortifolio/Projetos/modal/nikemodal1.png'
import nike2 from '../public/AssetsPortifolio/Projetos/modal/nikmodal2.png'



const Projetos = () => {
  const containerRef = useRef(null)
  const [modalProjeto, setModalProjeto] = useState(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const listaProjetos = [
    {
      id: 1,
      titulo: 'Primeiro Milhão',
      img: milhao,
      techs: ['TypeScript', 'Next.13', 'Node.js', 'Tailwind', 'Prisma'],
      desc: 'Simulador financeiro estratégico com projeções de juros compostos rumo ao primeiro milhão.',

      modal: {
        descricaoLonga:
          'Uma ferramenta poderosa de planejamento financeiro que permite aos usuários visualizar o crescimento de seu patrimônio ao longo do tempo. O sistema calcula variáveis complexas como aporte inicial, aporte mensal e taxa para traçar a rota exata até o primeiro milhão.',
        imagens: [milhao1, milhao2],
        techp:
          'Organizar dados financeiros complexos sem poluir a interface.',
        linkRepo: '#',
        linkOnline: '#',
        funcionalidades:
          'Simulação de juros compostos • Visualização clara de crescimento • Sessão de histórico de calculos',
        foco1: 'UX',
        foco2: 'UI',
        foco3: 'Responsividade',
      },
    },
    {
      id: 2,
      titulo: 'Power Man',
      img: powerman,
      techs: ['TypeScript', 'Next.13', 'Node.js', 'Tailwind', 'Prisma', 'SQL'],
      desc: 'Plataforma de gestão e agendamento online com interface intuitiva para barbearia',

      modal: {
        descricaoLonga:
          'Sistema completo de agendamento que conecta clientes e barbeiros. A plataforma permite a reserva de horários em tempo real, escolha de profissionais específicos e gestão de serviços, eliminando conflitos de agenda e filas de espera.',
        imagens: [power1, power2],
        techp:
          'Transformar métricas em insights claros.',
        linkRepo: '#',
        linkOnline: '#',
        funcionalidades:
          'Agendamento em tempo real • Gestão de barbeiros e serviços • Notificações automáticas para clientes',
        foco1: 'Usabilidade',
        foco2: 'Clareza',
        foco3: 'UX',
      },
    },
    {
      id: 3,
      titulo: 'Portifólio Pessoal',
      img: portifolio,
      techs: ['TypeScript', 'Next.13', 'Node.js', 'Tailwind'],
      desc: 'Experiência interativa focada em performance e exibição de competências Full-Stack.',

      modal: {
        descricaoLonga:
          'Este projeto foi construído para ser meu cartão de visitas técnico, mostrar quem sou eu. Ele foca em performance, acessibilidade e uma experiência de usuário (UX) fluida através de animações.',
        imagens: [portifolio1, portifolio2],
        techp:
          'Criar impacto visual sem perder performance.',
        linkRepo: '#',
        linkOnline: '#',
        funcionalidades:
          'Seções animadas • Design responsivo • Interação com cursor e animações suaves',
        foco1: 'UX',
        foco2: 'UI',
        foco3: 'Animações',
      },
    },
    {
      id: 4,
      titulo: 'Amaar',
      img: amaar,
      techs: ['TypeScript', 'Next.13', 'Node.js', 'Tailwind'],
      desc: 'Plataforma social para centralizar o resgate e facilitar a adoção responsável de animais em Maringá.',

      modal: {
        descricaoLonga:
          'Plataforma social de impacto que conecta ONGs, protetores independentes e adotantes. O sistema permite o cadastro detalhado de animais resgatados, formulário inteligente de apadrinhameto e sistema de doação com pix.',
        imagens: [amaar1, amaar2],
        techp:
          'Criar empatia e confiança no usuário.',
        linkRepo: '#',
        linkOnline: '#',
        funcionalidades:
          'Cadastro detalhado de animais abandonados • Formulário inteligente de apadrinhamento • Sistema de doação integrado com Pix',
        foco1: 'Organização',
        foco2: 'Acessibilidade',
        foco3: 'UX',
      },
    },
    {
      id: 5,
      titulo: 'Tech Store',
      img: tech,
      techs: ['HTML', 'CSS', 'JavaScript'],
      desc: 'Uma plataforma de vendas focada no nicho tecnológico. O projeto explora técnicas avançadas de exibição de produtos, filtros dinâmicos e um fluxo de animação focado em entreter o usuário.',

      modal: {
        descricaoLonga:
          'Projeto conceito de e-commerce inspirado na Nike.',
        imagens: [tech1, tech2],
        techp:
          'Criar impacto visual sem perder performance.',
        linkRepo: '#',
        linkOnline: '#',
        funcionalidades:
          'Filtros dinâmicos de produtos • Animações de transição entre categorias • Exibição detalhada de produtos',
        foco1: 'Consistência visual',
        foco2: 'UI',
        foco3: 'UX',
      },
    },
    {
      id: 6,
      titulo: 'Nike Store',
      img: nike,
      techs: ['HTML', 'CSS', 'JavaScript'],
      desc: 'Landing page interativa com transições fluidas para exibição de calçados esportivos.',

      modal: {
        descricaoLonga:
          'Interface desenvolvida para demonstrar produtos de forma imersiva. Através de transições fluidas e foco em tipografia, o projeto simula a experiência de uma marca esportiva.',
        imagens: [nike1, nike2],
        techp:
          'Criar impacto visual sem perder performance.',
        linkRepo: '#',
        linkOnline: '#',
        funcionalidades:
          'Transições fluidas entre seções • Foco em tipografia e design minimalista • Exibição imersiva de produtos',
        foco1: 'Branding',
        foco2: 'Design',
        foco3: 'Experiência',
      },
    },

  ]

  return (
    <>
      <motion.div
        ref={containerRef}
        id="projetos"
        style={{ opacity, scale }}
        className="min-h-screen font-mono py-28 overflow-x-hidden"
      >
        <div className="text-center text-white mb-16 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase"
          >
            PROJETOS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-[#a7a6a6] font-mono"
          >
            Não é conceito. É sistema funcionando.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 max-w-7xl m-auto">
          {listaProjetos.map((projeto, index) => (
            <motion.div
              key={projeto.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col text-center"
            >

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden bg-[#0c0c0c] shadow-[0_0_50px#00c5c825]"
              >
                <div className="imgs relative h-[300px] overflow-hidden">
                  <motion.img
                    src={projeto.img}
                    alt={projeto.titulo}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-20"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40">
                    <h3 className="text-white text-5xl mb-4 font-poppins font-bold drop-shadow-[0_0_40px_white]">
                      {projeto.titulo}
                    </h3>

                    <div className="flex flex-wrap justify-center gap-2 px-4">
                      {projeto.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-[#00c5c8] border border-[#00c5c8]/50 bg-[#101010]/80 px-3 py-1 rounded-full font-bold uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="max-h-0 opacity-0 -translate-y-5 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0 p-0 group-hover:p-6 bg-[#070f0f]">
                  <p className="text-white border-l-2 border-[#00c5c8] pl-4">
                    {projeto.desc}
                  </p>
                </div>
              </motion.div>

              {/* BOTÕES */}
              <div className="flex gap-4 mt-4">
                <motion.a
                  onClick={() => setModalProjeto(projeto)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center py-4 rounded-xl text-white bg-[#00c5c811] border border-emerald-400/50 cursor-pointer"
                >
                  Ver Mais →
                </motion.a>

                <motion.a
                  href={projeto.modal.linkRepo}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-transparent border border-white border-b-8 text-white text-sm"
                >
                  Código
                  <img src={github} className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {modalProjeto && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4 overflow-x-hidden overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative bg-[#ffffff] rounded-2xl max-w-5xl w-full max-h-[100vh] overflow-y-auto"
            >
              <button
                onClick={() => setModalProjeto(null)}
                className="absolute top-4 right-4 text-red-500 text-2xl font-bold"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-6">
                {modalProjeto.modal.imagens.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-full h-56 object-cover rounded-xl border border-white/30 transition-transform duration-300"
                  />
                ))}
              </div>

              <div className="px-8 pb-8 space-y-6">
                <h2 className="text-3xl font-semibold text-black">
                  {modalProjeto.titulo}
                </h2>

                <p className="text-gray-800">
                  {modalProjeto.modal.descricaoLonga}
                </p>

                <div>
                  <h3 className="font-semibold text-black text-2xl mb-5">Tecnologias</h3>
                  <p className="text-gray-800">
                    {modalProjeto.techs.join(', ')}
                  </p>
                </div>

                <div className="text-gray-800">
                  <h3 className="font-semibold text-black text-2xl mb-5">Funcionalidades</h3>
                  <p>{modalProjeto.modal.funcionalidades}</p>
                </div>

                <div className="text-gray-800">
                  <h3 className="font-semibold text-black text-2xl mb-5">Foco do Sistema</h3>
                  <div className="flex flex-col md:flex-row gap-3">
                    <p className="bg-green-300 px-5 py-1 rounded-full text-center">
                      {modalProjeto.modal.foco1}
                    </p>
                    <p className="bg-green-300 px-5 py-1 rounded-full text-center">
                      {modalProjeto.modal.foco2}
                    </p>
                    <p className="bg-green-300 px-5 py-1 rounded-full text-center">
                      {modalProjeto.modal.foco3}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className='font-semibold text-black text-2xl mb-5'>Ver o código</h3>
                  <a
                    href={modalProjeto.modal.linkRepo}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-transparent border border-black border-b-8 text-black text-lg"
                  >
                    Ver código
                    <img src={githubblack} className="w-6 h-6" />
                  </a>
                </div>


              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projetos
