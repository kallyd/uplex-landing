"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";

const lines = [
  { text: "[10:23] 👤 Product Manager: Escopo do projeto 'app-clinica' finalizado.", color: "text-zinc-400" },
  { text: "[10:24] 👤 Software Architect: Diretrizes arquiteturais e banco de dados definidos.", color: "text-zinc-300" },
  { text: "[10:25] 👤 UI Designer: Tokens visuais e design system gerados.", color: "text-zinc-400" },
  { text: "[10:28] 👤 Frontend Engineer: Interface desenvolvida usando Next.js 15 e Tailwind.", color: "text-zinc-300" },
  { text: "[10:31] 👤 Backend Engineer: APIs RESTful e lógica de negócios implementadas.", color: "text-zinc-400" },
  { text: "[10:34] 👤 Security Engineer: Auditoria concluída. Nenhuma vulnerabilidade encontrada.", color: "text-zinc-300" },
  { text: "[10:36] 👤 QA Engineer: Testes End-to-End aprovados. Cobertura: 94%.", color: "text-zinc-400" },
  { text: "[10:38] 👤 DevOps Engineer: Deploy em produção concluído via Vercel.", color: "text-zinc-300" }
];

export function TerminalSection() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < lines.length ? prev + 1 : prev));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#050505] text-white relative overflow-hidden perspective-1000 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,_#050505_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 text-[#D4AF37] text-sm font-bold tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.05)] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Demonstração ao Vivo
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">Assista a Mágica <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Acontecer.</span></h2>
            <p className="text-zinc-400 text-xl mb-10 leading-relaxed font-light">
              Esqueça integrações de 10 ferramentas diferentes. Inicie o projeto e 
              assista enquanto departamentos inteiros de IA assumem o controle direto 
              no seu terminal.
            </p>
            
            {/* CTA De Video Demonstração */}
            <div className="mb-10">
              <button className="group relative flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-2 pr-6 rounded-full hover:bg-zinc-800 transition-colors shadow-lg">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform">
                  <Play className="w-5 h-5 text-black ml-1" fill="currentColor" />
                </div>
                <div className="text-left">
                  <span className="block text-white font-semibold text-sm">Ver Demonstração Completa</span>
                  <span className="block text-zinc-500 text-xs">Vídeo • 3 Minutos</span>
                </div>
              </button>
            </div>

          </motion.div>
          
          <div className="lg:w-1/2 w-full perspective-1000">
            <motion.div 
              style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
              className="rounded-2xl border border-zinc-800 bg-[#0A0A0A] shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] overflow-hidden font-mono text-sm relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" style={{ transform: "translateZ(1px)" }}></div>
              
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-[#111] backdrop-blur-md">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-zinc-700"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-zinc-700"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-zinc-700"></div>
                </div>
                <span className="text-zinc-500 text-xs font-semibold tracking-widest">uplex-os ~ bash</span>
                <div className="w-10"></div>
              </div>
              
              <div className="p-8 h-[400px] overflow-y-auto text-[15px] leading-relaxed" style={{ transform: "translateZ(20px)" }}>
                <div className="text-zinc-500 mb-6 flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold">~</span>
                  <span className="text-zinc-300">/uplex-os</span>
                  <span className="text-zinc-600">$</span> 
                  <span className="text-white font-medium">./onboarding.sh --start</span>
                </div>
                
                <div className="space-y-4">
                  {lines.slice(0, visibleLines).map((line, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`${line.color} font-medium tracking-wide`}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  
                  {visibleLines < lines.length && (
                    <div className="flex items-center gap-2 text-[#D4AF37] mt-6 font-bold text-lg">
                      <span className="animate-pulse">_</span>
                    </div>
                  )}
                  
                  {visibleLines === lines.length && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-[#D4AF37] mt-8 font-black text-lg bg-[#D4AF37]/10 p-4 rounded-lg border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                    >
                      ✓ WORKFLOW COMPLETO. SISTEMA PRONTO PARA PRODUÇÃO.
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
