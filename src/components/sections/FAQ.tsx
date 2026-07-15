"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que é exatamente o UplexOS?",
    answer: "O UplexOS não é um curso ou um mero chatbot. É um Sistema Operacional completo desenvolvido no terminal, feito para gerenciar o fluxo de vida (Handoff) de produtos digitais. Ele atua como uma Software House inteira, automatizando desde o Product Manager até o DevOps."
  },
  {
    question: "Preciso saber programar para usar?",
    answer: "Não. A proposta da Uplex Academy (Trilha Iniciante) é exatamente permitir que você atue como Diretor de Produto (CEO) enquanto os agentes autônomos geram o código, fazem a auditoria e realizam o deploy (publicação) do software na Vercel."
  },
  {
    question: "Como funciona a geração de código?",
    answer: "Diferente de IAs que cospem blocos aleatórios, o UplexOS opera sob Tiers de Governança. O código é forjado por um Frontend Engineer, testado pelo QA Engineer e barrado se o Security Engineer encontrar vulnerabilidades, respeitando estritamente o Handoff Corporativo."
  },
  {
    question: "Quais tecnologias os projetos gerados usam?",
    answer: "A base técnica da documentação arquitetural da Uplex utiliza Next.js 15, Tailwind v4, Bancos de Dados robustos e Autenticação (Clerk/Stripe) dependendo da necessidade mapeada na fase de onboarding interativo."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h2>
          <p className="text-gray-400">Tudo o que você precisa saber sobre o UplexOS.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-zinc-800 rounded-2xl bg-black overflow-hidden transition-colors hover:border-zinc-700"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-zinc-900 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
