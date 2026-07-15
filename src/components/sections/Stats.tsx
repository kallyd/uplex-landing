"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "0", suffix: " Intervenção Humana", desc: "No código gerado pós-escopo" },
  { value: "100", suffix: "%", desc: "Aderência ao Handoff Protocol" },
  { value: "12", suffix: " Agentes", desc: "Especialistas simultâneos na timeline" },
  { value: "3", suffix: " Tiers", desc: "MVP, Startup e Enterprise Mode" },
];

export function Stats() {
  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      {/* Glow horizontal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                  {stat.value}
                </span>
                <span className="text-xl font-bold text-zinc-400 ml-1">{stat.suffix}</span>
              </div>
              <p className="text-sm text-zinc-500 font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
