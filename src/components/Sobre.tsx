import React from 'react';
import { motion } from 'framer-motion';
import eu from '../public/AssetsPortifolio/Sobre/EuNoFundoAzul.png';
import balao from '../public/AssetsPortifolio/Sobre/Balao8bits.png';

const Sobre = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  return (
    <section id='sobre' className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4 py-20 overflow-hidden">
      
      
      <div className="text-center text-white mb-16">
        <motion.h1 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase"
        >
          SOBRE
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl pb-6 text-[#a7a6a6] font-mono"
        >
          Simplicidade, lógica e eficiência.
        </motion.p>
      </div>

      
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full gap-12 md:gap-44">
        
        <div className="relative">
          

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }} 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-[40px] overflow-hidden shadow-[0_0_80px#00c5c845] border border-[#159a9c]/90 z-20"
          >
            <img src={eu} alt="Minha foto" className="w-full h-full object-cover scale-110" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              rotate: [12, 372] 
            }}
            viewport={{ once: true }}
            transition={{ 
              opacity: { delay: 0.7, duration: 0.5 },
              scale: { delay: 0.7, duration: 0.5 },
              rotate: { delay: 1.2, duration: 18, repeat: Infinity, ease: "linear" }
            }}
            className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 border border-[#159a9c]/90 shadow-[0_0_50px#00c5c847] rounded-lg"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              scale: [1, 1.15, 1] 
            }}
            viewport={{ once: true }}
            transition={{ 
              opacity: { delay: 0.8, duration: 0.5 },
              scale: { delay: 1.3, duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-48 left-48 md:top-64 md:left-72 w-16 h-16 md:w-20 md:h-20 border border-[#159a9c]/20 shadow-[0_0_80px#00c5c863] rounded-lg bg-[#00c5c81a] -z-10"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            className="absolute -top-8 -right-8 md:-top-12 md:-right-14 w-24 md:w-40 z-30 animate-bounce"
          >
            <img src={balao} alt="Balao Hello World" className="w-full" />
          </motion.div>
        </div>

        <div className="flex-1 text-[#b6b5b5] space-y-6 max-w-lg md:text-lg leading-relaxed text-justify font-mono">
          <motion.p 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            transition={{ delay: 0.6 }}
          >
            Hey! Eu sou o <strong className='text-white'>Luis Fernando</strong>, desenvolvedor <strong className='text-white'>júnior full stack</strong>, focado em transformar ideias em interfaces claras, funcionais e bem estruturadas.
          </motion.p>

          <motion.p 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            transition={{ delay: 0.8 }}
          >
            Estou na área de desenvolvimento web há <strong className='text-white'>mais de 2 anos</strong>, desde que iniciei a faculdade de <strong className='text-white'>Análise e Desenvolvimento de Sistemas</strong>. Atualmente, foco meus estudos e projetos em <strong className='text-white'>JavaScript, TypeScript, Next.js e Node.js</strong>.  
          </motion.p>

          <motion.p 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            transition={{ delay: 1.0 }}
          >
            Busco constantemente novos desafios que me permitam evoluir profissionalmente e contribuir para projetos inovadores.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default Sobre;