"use client";
import { motion } from "framer-motion";
import { Brain, Shield, Rocket, Layers, Workflow, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6 text-blue-400" />,
    title: "Autonomous Workforce",
    description: "Agentes especialistas — de PMs a Engenheiros de QA — operando de forma sincronizada com total autonomia."
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    title: "Knowledge Engine",
    description: "Inteligência Organizacional. Cada decisão e padrão é capturado para garantir consistência absoluta."
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Quality Engine",
    description: "Auditoria profunda e revisão cruzada obrigatórias. Código submetido a testes rigorosos antes do deploy."
  },
  {
    icon: <Rocket className="w-6 h-6 text-orange-400" />,
    title: "Delivery Engine",
    description: "CI/CD automatizado, telemetria embutida e infraestrutura monitorada para máxima performance."
  },
  {
    icon: <Workflow className="w-6 h-6 text-pink-400" />,
    title: "Handoff Contínuo",
    description: "Fluxo de vida perfeito: PM → Arquiteto → Design → Frontend → Backend → QA → DevOps."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
    title: "Sistema de Tiers",
    description: "Adapta regras de governança ao projeto: MVP (Velocidade), Startup (Equilíbrio) ou Enterprise (Segurança)."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Execução Sistêmica</h2>
          <p className="text-gray-400 text-lg">
            Não construímos meras features; engenheiramos sistemas completos. 
            Cada micro-componente se integra perfeitamente à macro-arquitetura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
