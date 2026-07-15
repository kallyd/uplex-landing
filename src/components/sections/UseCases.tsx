"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, ShoppingCart, Server } from "lucide-react";

const cases = [
  {
    id: "saas",
    title: "SaaS & Dashboards",
    description: "Interfaces ricas com tabelas, gráficos e gerenciamento de estado global. O TIER 2 perfeito.",
    icon: <LayoutDashboard className="w-5 h-5 text-zinc-300" />,
    color: "from-zinc-800/50 to-zinc-900/50",
    border: "border-zinc-800",
    mockup: (
      <div className="w-full h-full flex gap-3 p-4 opacity-70">
        <div className="w-1/4 h-full bg-zinc-900 rounded-md border border-zinc-800 flex flex-col gap-2 p-2">
          <div className="w-full h-4 bg-zinc-800 rounded mb-2"></div>
          <div className="w-3/4 h-3 bg-zinc-800 rounded"></div>
          <div className="w-2/3 h-3 bg-zinc-800 rounded"></div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="w-full h-1/3 bg-zinc-900 rounded-md border border-zinc-800 flex items-end p-2 gap-1">
            <div className="w-1/5 h-1/2 bg-[#D4AF37]/20 rounded-t"></div>
            <div className="w-1/5 h-3/4 bg-[#D4AF37]/40 rounded-t"></div>
            <div className="w-1/5 h-full bg-[#D4AF37]/60 rounded-t"></div>
            <div className="w-1/5 h-2/3 bg-[#D4AF37]/30 rounded-t"></div>
          </div>
          <div className="w-full flex-1 bg-zinc-900 rounded-md border border-zinc-800 p-2">
            <div className="w-full h-3 bg-zinc-800 rounded mb-2"></div>
            <div className="w-3/4 h-3 bg-zinc-800 rounded"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "ecommerce",
    title: "Landing Pages",
    description: "Alta conversão (TIER 1). Integração nativa com Stripe e otimização severa de Web Vitals.",
    icon: <ShoppingCart className="w-5 h-5 text-zinc-300" />,
    color: "from-zinc-800/50 to-zinc-900/50",
    border: "border-zinc-800",
    mockup: (
      <div className="w-full h-full flex flex-col gap-3 p-4 opacity-70">
        <div className="w-full h-8 bg-zinc-900 rounded-md border border-zinc-800 flex items-center justify-between px-3">
          <div className="w-12 h-3 bg-zinc-800 rounded"></div>
          <div className="w-8 h-3 bg-[#D4AF37]/40 rounded"></div>
        </div>
        <div className="w-full h-20 bg-zinc-900 rounded-md border border-zinc-800 flex flex-col items-center justify-center gap-2">
          <div className="w-1/2 h-4 bg-zinc-800 rounded"></div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-2">
          <div className="bg-zinc-900 rounded border border-zinc-800"></div>
          <div className="bg-zinc-900 rounded border border-zinc-800"></div>
          <div className="bg-zinc-900 rounded border border-zinc-800"></div>
        </div>
      </div>
    )
  },
  {
    id: "enterprise",
    title: "Enterprise APIs",
    description: "Sistemas complexos TIER 3. Isolamento multi-tenant e segurança em nível bancário.",
    icon: <Server className="w-5 h-5 text-[#D4AF37]" />,
    color: "from-[#D4AF37]/10 to-transparent",
    border: "border-[#D4AF37]/30",
    mockup: (
      <div className="w-full h-full flex items-center justify-center p-4 relative">
        <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 z-10 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/30 animate-pulse"></div>
        </div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent left-0 top-1/2 -translate-y-1/2"></div>
        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent left-1/2 top-0 -translate-x-1/2"></div>
      </div>
    )
  }
];

export function UseCases() {
  return (
    <section className="py-24 bg-[#050505] text-white relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">O que o sistema constrói?</h2>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Desde landing pages de alta conversão até arquiteturas Enterprise. O UplexOS adapta 
            seus Tiers operacionais para entregar o código exato que seu negócio exige.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col rounded-2xl bg-[#0A0A0A] border ${useCase.border} overflow-hidden hover:scale-[1.02] transition-transform shadow-xl`}
            >
              <div className={`h-48 w-full bg-gradient-to-br ${useCase.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                <div className="absolute inset-0 z-10">{useCase.mockup}</div>
              </div>
              <div className="p-6 flex flex-col flex-1 border-t border-zinc-900">
                <div className="flex items-center gap-3 mb-4">
                  {useCase.icon}
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
