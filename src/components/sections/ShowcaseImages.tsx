"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function ShowcaseImages() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Visualização de Alto Nível</h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Interfaces Premium (TIER 2 e TIER 3) geradas sob o protocolo do UplexOS, 
            mesclando performance absoluta com estética de classe mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 relative rounded-3xl overflow-hidden border border-zinc-800 group h-[300px] md:h-full shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&grayscale=true" 
              alt="Dashboard Complexo" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 mb-3 inline-block tracking-widest">TIER 2 • DASHBOARDS</span>
              <h3 className="text-2xl font-bold text-white mb-2">Painéis Operacionais</h3>
              <p className="text-zinc-400 text-sm max-w-md hidden md:block">
                Gráficos em tempo real, tabelas de alta densidade e estados globais complexos gerenciados autonomamente.
              </p>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6 h-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 relative rounded-3xl overflow-hidden border border-zinc-800 group h-[250px] md:h-auto shadow-xl"
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&grayscale=true" 
                alt="Analytics" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-70"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-lg font-bold text-white">Integração de Dados</h3>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-1 relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 group h-[250px] md:h-auto flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/10 to-[#050505] shadow-[0_0_30px_rgba(212,175,55,0.05)]"
            >
              <div className="absolute inset-0 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors z-0"></div>
              
              <div className="z-10 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-[#D4AF37]/50 mb-4 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                  <Play className="w-6 h-6 text-[#D4AF37] ml-1" fill="currentColor" />
                </div>
                <span className="text-white font-medium">Ver Handoff em Ação</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
