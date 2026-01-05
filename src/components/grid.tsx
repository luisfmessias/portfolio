import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface AnimatedBackgroundProps {
  mousePosition: MousePosition;
}

export default function AnimatedBackground({ mousePosition }: AnimatedBackgroundProps): JSX.Element {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  // 1. Memoriza as partículas para elas ficarem fixas e flutuarem sozinhas
  const particles = useMemo(() => 
    Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 5,
    }))
  , []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#0a0a0a] overflow-hidden">
      
      {/* 2. GLOW QUE SEGUE O MOUSE */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(21, 154, 156, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 3. GRID COM EFEITO LANTERNA (Revelado pelo mouse) */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(21, 154, 156, 0.2) 1px, transparent 2px),
            linear-gradient(90deg, rgba(21, 154, 156, 0.2) 1px, transparent 2px)
          `,
          backgroundSize: '100px 100px',
          WebkitMaskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
          maskImage: `radial-gradient(620px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
        }}
      />

      {/* 4. ORBS PARALLAX */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(21, 154, 156, 0.2) 0%, transparent 70%)',
          filter: 'blur(20px)',
          y: y1,
        }}
      />

      {/* 5. PARTICULAS MEMORIZADAS (Flutuam sem interagir com o mouse) */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.4)]"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}