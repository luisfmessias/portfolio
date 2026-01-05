import React, { useState } from 'react'
import { motion } from 'framer-motion'

import eu from '../public/AssetsPortifolio/Skills/EuShowing.png'
import next from '../public/AssetsPortifolio/Skills/Next.png'
import react from '../public/AssetsPortifolio/Skills/react.png'
import js from '../public/AssetsPortifolio/Skills/js.png'
import ts from '../public/AssetsPortifolio/Skills/ts.png'
import html from '../public/AssetsPortifolio/Skills/html.png'
import css from '../public/AssetsPortifolio/Skills/css.png'
import node from '../public/AssetsPortifolio/Skills/node.png'
import tailwind from '../public/AssetsPortifolio/Skills/tailwind.png'
import bootstrap from '../public/AssetsPortifolio/Skills/bootstrap.png'
import prisma from '../public/AssetsPortifolio/Skills/prisma.png'
import vs from '../public/AssetsPortifolio/Skills/vscode.png'
import gh from '../public/AssetsPortifolio/Skills/github.png'
import git from '../public/AssetsPortifolio/Skills/git.png'
import figma from '../public/AssetsPortifolio/Skills/figma.png'

const Skills = () => {
  const [avatarAtivo, setAvatarAtivo] = useState(false)
  const [techAtiva, setTechAtiva] = useState(null)

  const techIcons = [
    { img: next, color: 'rgba(255,255,255,0.9)', rot: -360, name: 'Next.js' },
    { img: react, color: 'rgba(97,218,251,1)', rot: 360, name: 'React' },
    { img: js, color: 'rgba(247,223,30,1)', rot: -360, name: 'JavaScript' },
    { img: ts, color: 'rgba(49,120,198,1)', rot: 360, name: 'TypeScript' },
    { img: html, color: 'rgba(227,79,38,1)', rot: -360, name: 'HTML' },
    { img: css, color: 'rgba(21,114,182,1)', rot: 360, name: 'CSS' },
    { img: node, color: 'rgba(104,160,99,1)', rot: -360, name: 'Node.js' },
    { img: tailwind, color: 'rgba(6,182,212,1)', rot: 360, name: 'Tailwind CSS' },
    { img: bootstrap, color: 'rgba(121,82,179,1)', rot: -360, name: 'Bootstrap' },
    { img: prisma, color: 'rgba(0,161,135,0.9)', rot: 360, name: 'Prisma' },
    { img: vs, color: 'rgba(0,122,204,1)', rot: -360, name: 'VS Code' },
    { img: gh, color: 'rgba(162,89,255,1)', rot: 360, name: 'GitHub' },
    { img: git, color: 'rgba(240,80,50,1)', rot: -360, name: 'Git' },
    { img: figma, color: 'rgba(162,89,255,1)', rot: 360, name: 'Figma' },
  ]

  // CONFIGURAÇÃO DE ANIMAÇÃO
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white p-4"
    >
      
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase"
        >
          SKILLS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl pb-6 text-[#a7a6a6] font-mono"
        >
          Código limpo não é opcional.
        </motion.p>
      </div>

      <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center">
        {/* AVATAR */}
        <div className="md:absolute md:left-0 flex flex-col items-center text-center w-56 mb-12 md:mb-0 relative">
          <div
            className={`
              absolute -top-12 left-1/2 -translate-x-1/2 z-20
              bg-white text-[#159A9C] font-bold py-2 px-4 rounded-xl
              shadow-[0_10px_25px_rgba(0,0,0,0.3)]
              transition-all duration-300 pointer-events-none
              before:content-[''] before:absolute before:top-full before:left-1/2 
              before:-translate-x-1/2 before:border-8 before:border-transparent 
              before:border-t-white
              ${avatarAtivo
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-75 translate-y-4'}
            `}
          >
            <p className="whitespace-nowrap text-xs font-mono">
              Se você pode imaginar, eu posso programar!
            </p>
          </div>

          <motion.div
            onMouseEnter={() => setAvatarAtivo(true)}
            onMouseLeave={() => setAvatarAtivo(false)}
            onClick={() => setAvatarAtivo(prev => !prev)}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-40 h-40 rounded-full overflow-hidden
              shadow-[0_0_130px_rgba(0,197,200,0.5)]
              transition-all duration-700
              hover:shadow-[0_0_180px_rgba(0,197,200,0.7)]
              cursor-pointer relative z-10
            "
          >
            <img src={eu} alt="Eu" className="w-full h-full object-cover" />
          </motion.div>

          <h2 className="text-white text-3xl font-mono mt-6 uppercase">
            Aqui estão <br /> algumas <br />
            <span className="text-[#0fe4e7] text-4xl">tecnologias</span> <br />
            que uso
          </h2>
        </div>

        {/* GRID DE ÍCONES */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid grid-cols-4 md:grid-cols-7 gap-x-5 gap-y-10"
        >
          {techIcons.map((tech, index) => {
            const ativo = techAtiva === index

            return (
              <motion.div
                key={index}
                variants={itemVariants} 
                onClick={() => setTechAtiva(ativo ? null : index)}
                whileHover={{
                  scale: 1.15,
                  boxShadow: `0 0 30px ${tech.color}`,
                  borderColor: tech.color,
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-16 h-16 md:w-20 md:h-20 border border-white/5 rounded-2xl flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
              >
                {/* ÍCONE */}
                <motion.img
                  src={tech.img}
                  alt={tech.name}
                  whileHover={{ rotate: tech.rot, scale: 1.2 }}
                  className="max-w-full max-h-full object-contain z-10"
                />

                {/* TOOLTIP */}
                <span
                  style={{ color: tech.color }}
                  className={`
                    absolute -top-7
                    text-xs md:text-sm font-mono whitespace-nowrap
                    transition-all duration-300
                    drop-shadow-[0_0_8px_currentColor]
                    ${ativo
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-2'}
                    group-hover:opacity-100 group-hover:translate-y-0
                  `}
                >
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills