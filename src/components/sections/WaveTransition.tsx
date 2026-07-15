"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function WaveTransition() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Anima o path do SVG baseado no scroll do usuário
  // Estado 1 (reta) -> Estado 2 (onda acentuada) -> Estado 3 (reta novamente)
  const pathData = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "M0,100 C250,100 750,100 1000,100 L1000,0 L0,0 Z", // Reta base
      "M0,100 C250,200 750,0 1000,100 L1000,0 L0,0 Z",   // Onda curvada máxima
      "M0,100 C250,100 750,100 1000,100 L1000,0 L0,0 Z"  // Volta a reta
    ]
  );

  return (
    <div ref={containerRef} className="w-full relative h-[150px] -mt-[100px] z-20 pointer-events-none overflow-hidden">
      <svg 
        className="absolute bottom-0 w-full h-full drop-shadow-[0_20px_30px_rgba(16,185,129,0.2)]" 
        viewBox="0 0 1000 150" 
        preserveAspectRatio="none"
      >
        <motion.path 
          d={pathData} 
          fill="#000000" // Cor igual a section de cima para mascarar o fundo
        />
        {/* Linha de borda brilhante na onda */}
        <motion.path 
          d={pathData} 
          fill="transparent"
          stroke="url(#neonGradient)" 
          strokeWidth="3"
        />
        
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#10b981" /> {/* Emerald 500 */}
            <stop offset="70%" stopColor="#3b82f6" /> {/* Blue 500 */}
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
