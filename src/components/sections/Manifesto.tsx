"use client";

import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12 text-center">
            Manifesto Uplex
          </h2>
          
          <div className="space-y-12 text-xl md:text-3xl font-medium leading-tight text-gray-400">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="hover:text-white transition-colors duration-500"
            >
              <span className="text-white font-bold">Qualidade antes da velocidade.</span> A rapidez é um subproduto de processos rigorosos e dominados. Não sacrificamos a integridade arquitetônica por vitórias de curto prazo.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="hover:text-white transition-colors duration-500"
            >
              <span className="text-white font-bold">Contexto antes da geração.</span> Ação sem inteligência é apenas ruído. Toda entrega é meticulosamente fundamentada em conhecimento organizacional profundo e intenção estratégica.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="hover:text-white transition-colors duration-500"
            >
              Nossa visão para a próxima década é <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">redefinir a própria natureza</span> da criação de software global. Estamos forjando a infraestrutura onde a visão humana direciona e o UplexOS constrói.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
