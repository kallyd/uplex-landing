"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, Code, Paintbrush, ShieldCheck, Database, Rocket } from "lucide-react";
import { useRef } from "react";

const agents = [
  { id: 1, name: "Product Manager", role: "Escopo & Negócios", icon: <Bot className="w-6 h-6" />, color: "bg-zinc-100", glow: "shadow-[0_0_30px_rgba(212,175,55,0.3)]" },
  { id: 2, name: "Software Architect", role: "Documentação", icon: <Database className="w-6 h-6" />, color: "bg-zinc-200", glow: "shadow-[0_0_30px_rgba(212,175,55,0.3)]" },
  { id: 3, name: "UI Designer", role: "Design System", icon: <Paintbrush className="w-6 h-6" />, color: "bg-zinc-300", glow: "shadow-[0_0_30px_rgba(212,175,55,0.3)]" },
  { id: 4, name: "Frontend Engineer", role: "Interface", icon: <Code className="w-6 h-6" />, color: "bg-zinc-400", glow: "shadow-[0_0_30px_rgba(212,175,55,0.3)]" },
  { id: 5, name: "Security Engineer", role: "Auditoria", icon: <ShieldCheck className="w-6 h-6" />, color: "bg-zinc-500", glow: "shadow-[0_0_30px_rgba(212,175,55,0.3)]" },
  { id: 6, name: "DevOps Engineer", role: "Deploy CI/CD", icon: <Rocket className="w-6 h-6" />, color: "bg-zinc-600", glow: "shadow-[0_0_30px_rgba(212,175,55,0.3)]" },
];

export function Timeline3D() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-[#050505] text-white relative overflow-hidden perspective-1000 border-t border-white/5">
      {/* Luzes de fundo Premium */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#D4AF37] blur-[150px] rounded-full pointer-events-none mix-blend-screen"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-[#D4AF37] text-sm font-bold mb-6 uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.05)]"
          >
            Handoff Workflow
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">O Fluxo Perfeito.</h2>
          <p className="text-xl text-zinc-400 font-light">
            Nenhuma IA solta escrevendo código do zero. O UplexOS obriga os agentes a passarem 
            o bastão em uma linha de montagem de software hiper-estruturada.
          </p>
        </div>

        {/* 3D Container */}
        <motion.div 
          style={{ rotateX, scale, opacity, transformStyle: "preserve-3d" }}
          className="relative max-w-6xl mx-auto py-20"
        >
          {/* Linha conectora Dourada */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 overflow-hidden hidden md:block" style={{ transform: "translateZ(-50px)" }}>
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_20px_rgba(212,175,55,0.8)]"
            ></motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 100, z: -100 }}
                whileInView={{ opacity: 1, y: 0, z: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                whileHover={{ scale: 1.1, z: 50, rotateY: 10, rotateX: -10 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative group cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <div 
                    className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-6 relative border border-zinc-800 bg-[#0A0A0A] shadow-[0_20px_40px_-10px_rgba(0,0,0,1)] transition-all duration-300 group-hover:border-[#D4AF37]/50 group-hover:${agent.glow}`}
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>
                    <div className={`absolute inset-0 ${agent.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity rounded-2xl`}></div>
                    
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      className="text-zinc-400 group-hover:text-white transition-colors"
                      style={{ transform: "translateZ(50px)" }}
                    >
                      {agent.icon}
                    </motion.div>
                  </div>
                  
                  <div 
                    className="text-center bg-black/60 backdrop-blur-xl px-4 py-3 rounded-xl border border-zinc-800"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <h3 className="font-bold text-white mb-1 text-sm whitespace-nowrap">{agent.name}</h3>
                    <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">{agent.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
