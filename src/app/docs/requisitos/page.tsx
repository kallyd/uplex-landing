import { CodeBlock } from "@/components/ui/CodeBlock";
import { CheckCircle2, Cloud } from "lucide-react";

export default function RequisitosPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Pré-Requisitos</h1>
      <p className="text-xl text-zinc-400 font-light mb-12 leading-relaxed">
        Prepare sua máquina antes de clonar e inicializar a engine do UplexOS.
      </p>

      <div className="prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-2">Ambiente Local</h2>
        <p className="text-zinc-400 leading-relaxed mb-6">
          O UplexOS roda diretamente do seu terminal local. Para que os agentes consigam manipular arquivos e executar deploys autônomos sem quebrar o Handoff, você precisa ter instalados:
        </p>

        <ul className="space-y-4 mb-10 bg-[#0A0A0A] p-6 rounded-xl border border-zinc-800/50">
          <li className="flex gap-3 items-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <span className="text-zinc-300"><strong>Node.js</strong> (Versão 20 LTS ou superior) — O motor que roda a CLI.</span>
          </li>
          <li className="flex gap-3 items-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <span className="text-zinc-300"><strong>Git</strong> — Essencial para o <code>git-operator</code> e versionamento autônomo.</span>
          </li>
          <li className="flex gap-3 items-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <span className="text-zinc-300"><strong>Docker</strong> (Opcional) — Apenas para setups isolados de bancos TIER 3 Locais.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-2">Como verificar?</h2>
        <p className="text-zinc-400 mb-6">Abra o terminal do seu computador (Bash, Zsh ou PowerShell) e rode os comandos abaixo para confirmar as versões instaladas:</p>
        
        <CodeBlock 
          language="bash"
          code={`$ node -v
$ git --version
$ docker --version`}
          output={`v24.18.0
git version 2.55.0
Docker version 29.6.1`}
        />

        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-2 mt-8">Contas Necessárias (Nuvem)</h2>
        <p className="text-zinc-400 leading-relaxed mb-6">
          A Uplex não hospeda o código do seu cliente na infraestrutura corporativa por motivos de privacidade e conformidade. Você precisará conectar suas contas nas plataformas parceiras:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-xl border border-zinc-800 bg-[#0A0A0A] hover:border-[#D4AF37]/50 transition-colors group">
            <Cloud className="w-6 h-6 text-zinc-500 group-hover:text-white mb-3 transition-colors" />
            <h4 className="text-white font-bold mb-2">GitHub</h4>
            <p className="text-sm text-zinc-500">Onde os repositórios fonte nascem e recebem os commits autônomos.</p>
          </div>
          <div className="p-5 rounded-xl border border-zinc-800 bg-[#0A0A0A] hover:border-[#D4AF37]/50 transition-colors group">
            <Cloud className="w-6 h-6 text-zinc-500 group-hover:text-white mb-3 transition-colors" />
            <h4 className="text-white font-bold mb-2">Vercel</h4>
            <p className="text-sm text-zinc-500">Alvo do <code>DevOps Engineer</code> para o deploy das aplicações do cliente.</p>
          </div>
          <div className="p-5 rounded-xl border border-zinc-800 bg-[#0A0A0A] hover:border-[#D4AF37]/50 transition-colors group">
            <Cloud className="w-6 h-6 text-zinc-500 group-hover:text-white mb-3 transition-colors" />
            <h4 className="text-white font-bold mb-2">Clerk & Stripe</h4>
            <p className="text-sm text-zinc-500">Ferramentas-chave requeridas pelo TIER 2 para Auth e Pagamentos.</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between">
          <a href="/docs" className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-400 font-semibold rounded-lg hover:text-white hover:bg-zinc-900 transition-colors">
            Voltar: Introdução
          </a>
          <a href="/docs/instalacao" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Próximo: Instalação & Setup
          </a>
        </div>
      </div>
    </div>
  );
}
