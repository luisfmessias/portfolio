import React from 'react'
import { motion } from 'framer-motion'
import { PawPrint } from 'lucide-react'

const PawAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(14)].map((_, i) => ( // 🔹 aumentei de 6 para 14
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-20, -100], // 🔹 mesmo movimento suave de antes (subindo)
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4, // 🔹 pequeno atraso pra não ficarem sincronizadas
          }}
          style={{
            left: `${(i * 7) % 100}%`, // 🔹 espalha melhor horizontalmente
            top: `${50 + (i % 2) * 100}%`, // 🔹 diferentes alturas de partida
          }}
        >
          <PawPrint className="h-8 w-8 text-white/30" fill="currentColor" />
        </motion.div>
      ))}
    </div>
  )
}

export default PawAnimation
