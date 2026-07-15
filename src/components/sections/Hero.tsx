"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Sparkles } from "lucide-react";
import Balancer from "react-wrap-balancer";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] text-white pt-32 pb-20">
      
      {/* BACKGROUND PREMIUM */}
      <div className="absolute inset-0 z-0">
        {/* Malha de pontos (Dotted grid) sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        {/* Glow dourado central vindo do topo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none"></div>
        {/* Vinheta escura nas bordas para dar profundidade ao centro */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* TAG TOPO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(212,175,55,0.05)]"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Uplex OS v4.0 Enterprise</span>
          </motion.div>
          
          {/* TÍTULO */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-8 leading-[1.05] text-white drop-shadow-2xl"
          >
            <Balancer>
              A Força de Trabalho <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-600">
                Autônoma
              </span>
            </Balancer>
          </motion.h1>
          
          {/* SUBTÍTULO */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-zinc-400 mb-14 max-w-3xl font-light leading-relaxed"
          >
            Não é um template. É o primeiro <strong className="text-white font-medium">Sistema Operacional de Engenharia</strong> do mundo. 
            Orquestre Inteligências Artificiais e construa softwares massivos.
          </motion.p>
          
          {/* CTA & BOTOES */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center"
          >
            {/* BOTÃO PREMIUM COM BORDA ANIMADA DOURADA */}
            <div className="relative group rounded-[1.2rem]">
              {/* O Gradiente que gira fazendo a borda animada */}
              <div className="absolute -inset-[2px] rounded-[1.3rem] overflow-hidden">
                <motion.div
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#D4AF37_360deg)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              <a 
                href="https://pay.cakto.com.br/3c9yve2_977106" 
                target="_blank" 
                className="relative flex items-center justify-center gap-3 px-10 py-5 bg-[#050505] text-white font-bold rounded-[1.2rem] transition-all group-hover:bg-[#0a0a0a]"
              >
                <Terminal className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-lg tracking-wide">Instalar UplexOS</span>
              </a>
              
              {/* Sombra Glow do botão que reage ao hover */}
              <div className="absolute inset-0 rounded-[1.2rem] bg-[#D4AF37] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10"></div>
            </div>
            
            <a 
              href="/docs" 
              className="group px-8 py-5 text-zinc-500 font-medium flex items-center justify-center gap-3 hover:text-white transition-colors"
            >
              <span className="text-lg tracking-wide">Ler Documentação</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
