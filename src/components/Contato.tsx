import React from 'react'
import { motion } from 'framer-motion'
import wpp from '../public/AssetsPortifolio/Contato/whatsapp.png'
import insta from '../public/AssetsPortifolio/Contato/social-media.png'
import linkedin from '../public/AssetsPortifolio/Contato/linkedin.png'
import gh from '../public/AssetsPortifolio/Contato/github.png'

const Contato = () => {
  // 1. Container Principal (Cascata Geral)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 } // Intervalo entre Título -> Texto -> Botão -> Div Social
    }
  }

  // 2. Itens que sobem (Título, Texto, Botão, Email)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  }

  // 3. Container Interno das Redes Sociais (Cascata dos Ícones)
  const socialGroupVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, // Velocidade da entrada de cada ícone
        delayChildren: 0.2     // Espera um pouco antes de começar o primeiro ícone
      }
    }
  }

  // 4. Animação Individual do Ícone (Deslizando para a direita)
  const singleIconVariants = {
    hidden: { opacity: 0, x: -30 }, // Começa 30px à esquerda
    visible: { 
      opacity: 1, 
      x: 0,                          // Move-se para a posição original (direita)
      transition: { type: "spring", stiffness: 120 } 
    }
  }

  return (
    <footer id='contato' className="min-h-screen flex items-center justify-center bg-white mt-60 px-4 py-20">
      <motion.div 
        className="text-center text-black flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        
        <motion.h1 variants={itemVariants} className=" ctt text-7xl mb-2 font-poppins font-bold">
          Vamos construir algo <br /> sério!
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl mt-10 tracking-wide font-roboto font-medium">
          Da ideia aos detalhes finais, cada projeto é pensado com intenção e clareza. <br /> 
          Se isso fez sentido pra você, o contato está logo abaixo.
        </motion.p>

        <motion.a
          variants={itemVariants}
          href="#projetos"
          className="
            relative overflow-hidden flex items-center justify-center
            px-9 py-4 rounded-xl mt-10 bg-transparent font-bold
            w-fit mx-auto border border-b-8 border-black
            text-black font-mono text-lg transition-all duration-200 ease-out
            hover:scale-105 hover:shadow-[0_0_100px_rgba(0,0,0,0.15)]
            before:content-[''] before:absolute before:top-[-50%] before:left-[-50%]
            before:w-[200%] before:h-[200%]
            before:bg-[linear-gradient(0deg,transparent,transparent_30%,rgba(0,0,0,0.3))]
            before:rotate-[-45deg] before:opacity-0 before:transition-all
            before:duration-500 before:ease-out
            hover:before:opacity-100 hover:before:translate-y-full
          "
        >
          ENTRAR EM CONTATO
        </motion.a>

        {/* CONTAINER DAS REDES SOCIAIS COM ANIMAÇÃO PRÓPRIA */}
        <motion.div 
          variants={socialGroupVariants} // Ativa a cascata dos ícones
          className="flex justify-center space-x-10 mt-10 p-5 rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.1)] w-fit mx-auto"
        >
          {[
            { src: wpp, alt: "WhatsApp", url: "https://wa.me/5511999999999" },
            { src: insta, alt: "Instagram", url: "https://www.instagram.com/luisfernandosilva8855" },
            { src: linkedin, alt: "LinkedIn", url: "https://www.linkedin.com/in/luisfernandosilva8855" },
            { src: gh, alt: "GitHub", url: "https://github.com/luisfernandosilva8855" }
          ].map((social, index) => (
            <motion.a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              variants={singleIconVariants} // Cada ícone faz o movimento individual
              whileHover={{ scale: 1.4, rotate: 5 }}
            >
              <img src={social.src} alt={social.alt} className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="mt-8 font-poppins font-bold tracking-wide text-gray-800">
            luisfernandosilva8855@gmail.com
          </p>
        </motion.div>

      </motion.div>
    </footer>
  )
}

export default Contato