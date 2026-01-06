import React from 'react';
import { motion } from 'framer-motion';

import dev from '../public/AssetsPortifolio/servicos/code.png';
import paint from '../public/AssetsPortifolio/servicos/paint.png';
import config from '../public/AssetsPortifolio/servicos/technology.png';

const services = [
    {
        id: '01',
        title: 'Desenvolvimento Web',
        description: 'Criação de aplicações web modernas e responsivas com as melhores tecnologias.',
        icon: dev,
        features: ['Landing pages responsivas', 'Interfaces', 'Performance otimizada', 'Sites institucionais']
    },
    {
        id: '02',
        title: 'UI Design & UX',
        description: 'Design de interfaces intuitivas focadas na melhor experiência do usuário.',
        icon: paint,
        features: ['Prototipagem no Figma', 'Design de interfaces modernas', 'Foco em usabilidade', 'Organização visual']
    },
    {
        id: '03',
        title: 'Ajustes & Melhorias',
        description: 'Otimização e modernização de projetos existentes com foco em qualidade.',
        icon: config,
        features: ['Melhorias de layout', 'Ajustes de responsividade', 'Correção de bugs', 'Novas funcionalidades']
    }
];

// ANIMAÇÕES 

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const textHeaderVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 70 }, 
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.25
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

const iconFloatingVariants = {
    animate: {
        y: [0, -20, 0],
        rotate: [-2, 15, -2],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    },
    hover: {
        scale: 1.1,
        rotate: 0,
        transition: { duration: 0.3 }
    }
};

const glowVariants = {
    animate: {
        opacity: [0.2, 0.5, 0.2], 
        scale: [1.5, 2, 1.5],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const Servicos = () => {
    return (
        <motion.section
            id="serviços"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white p-4 py-20"
        >
            
            <div className="text-center mb-20">
                <motion.h2
                    variants={textHeaderVariants}
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase"
                >
                    SERVIÇOS
                </motion.h2>
                <motion.p
                    variants={textHeaderVariants}
                    className="text-lg md:text-xl text-[#a7a6a6] font-mono"
                >
                    Soluções completas para o seu projeto digital
                </motion.p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        whileHover="hover"
                        className="relative shadow-[0_0_50px_-15px_rgba(34,211,238,0.14)] border border-cyan-900/40 backdrop-blur-sm rounded-[2.5rem] p-10 flex flex-col items-center transition-all duration-300 hover:shadow-[0_0_40px_-15px_rgba(34,211,238,0.4)] group hover:scale-105 hover:bg-cyan-950/20 hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-900/10 hover:to-cyan-800/10 cursor-pointer"
                    >
                        {/* números */}
                        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-lg shadow-inner">
                            {service.id}
                        </div>

                        {/* Ícone */}  
                        <motion.div variants={childVariants} className="mb-10 relative">
                            <motion.div
                                variants={glowVariants}
                                animate="animate"
                                className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full"
                            />

                            <motion.div
                                variants={iconFloatingVariants}
                                animate="animate"
                                className="relative p-5 rounded-2xl border border-cyan-500/30 shadow-[inset_0_0_50px_rgba(34,211,238,0.1)]"
                            >
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-10 h-10 object-contain brightness-110 transition-all group-hover:brightness-150"
                                />
                            </motion.div>
                        </motion.div>

                        
                        <motion.h3
                            variants={childVariants}
                            className="text-2xl font-bold mb-4 tracking-tight transition-colors"
                        >
                            {service.title}
                        </motion.h3>

                        {/* Descrição */}
                        <motion.p variants={childVariants} className="text-gray-400 text-center text-[16px] leading-relaxed mb-8">
                            {service.description}
                        </motion.p>

                        {/* Features */}
                        <ul className="w-full space-y-4">
                            {service.features.map((feature, idx) => (
                                <motion.li
                                    key={idx}
                                    variants={childVariants}
                                    className="flex items-center gap-3 text-lg text-gray-300 group-hover:text-white transition-colors"
                                >
                                    <motion.span
                                        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                                        className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]"
                                    />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Servicos;