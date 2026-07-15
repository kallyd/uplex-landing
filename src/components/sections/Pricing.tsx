"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Acesso Antecipado",
    description: "Para desenvolvedores pioneiros que querem acesso imediato ao UplexOS v4.0.",
    price: "R$ 57,90",
    period: "pagamento único",
    features: [
      "Sistema Operacional UplexOS v4.0",
      "CLI Completa (Comandos e Onboarding)",
      "Acesso aos 12 Agentes Especialistas",
      "Timeline Dinâmica no Terminal",
      "Boilerplates TIER 1 e TIER 2",
      "Geração de Dossiês Automatizada",
      "Acesso Vitalício às atualizações da v4",
      "Suporte via Comunidade VIP"
    ],
    cta: "Garantir Vaga",
    link: "https://pay.cakto.com.br/3c9yve2_977106",
    highlighted: true
  },
  {
    name: "Enterprise",
    description: "Para software houses que faturam múltiplos 6-dígitos e precisam de escala total.",
    price: "Sob Consulta",
    period: "contrato anual",
    features: [
      "Tudo do Acesso Antecipado",
      "Suporte Direct com Engenheiros Core",
      "Setup de CI/CD Customizado",
      "Infraestrutura TIER 3 (PCI/LGPD)",
      "Agentes de FinOps Dedicados",
      "Consultoria de Arquitetura",
      "Treinamento in-company para devs",
      "White-label total"
    ],
    cta: "Falar com Vendas",
    link: "#",
    highlighted: false
  }
];

export function PricingSection() {
  return (
    <section className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Escala Ilimitada. <br className="hidden md:block"/> Preço Único.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            A Uplex Academy não está apenas vendendo um curso. Estamos liberando 
            a infraestrutura proprietária que nossa equipe usa todos os dias.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 rounded-3xl border ${
                plan.highlighted 
                  ? "bg-zinc-900 border-emerald-500/30 shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)]" 
                  : "bg-black border-zinc-800"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">/ {plan.period}</span>
              </div>
              
              <a 
                href={plan.link}
                className={`w-full py-4 rounded-xl flex items-center justify-center font-medium transition-all ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </a>
              
              <div className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-1 rounded-full p-1 ${plan.highlighted ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-gray-400"}`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
