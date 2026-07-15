import { CodeBlock } from "@/components/ui/CodeBlock";
import { Info } from "lucide-react";

export default function InstalacaoPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Instalação & Setup</h1>
      <p className="text-xl text-zinc-400 font-light mb-12 leading-relaxed">
        Inicializando o UplexOS e configurando a identidade da sua Software House.
      </p>

      <div className="prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-2">1. Clonando o UplexOS</h2>
        <p className="text-zinc-400 leading-relaxed mb-6">
          Primeiro, você deve criar a pasta central da sua operação via terminal. Essa será a "sala de servidores" onde a Inteligência Artificial fará a leitura da base de conhecimento e operará a sua empresa.
        </p>

        <CodeBlock 
          language="bash"
          code={`$ git clone https://github.com/uplexacademy/uplex-os.git meu-uplex
$ cd meu-uplex`}
        />

        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-2 mt-12">2. Configuração da Identidade (/instalar)</h2>
        <p className="text-zinc-400 leading-relaxed mb-6">
          Assim que estiver dentro da pasta, o Sistema Operacional precisa "aprender" quem é você. 
          Use a skill nativa <code>/instalar</code> no console da Claude Code para iniciar a entrevista de setup corporativo. O sistema fará três perguntas principais:
        </p>

        <div className="bg-[#0A0A0A] border border-zinc-800 rounded-xl p-6 mb-8">
          <ul className="space-y-4 text-zinc-400 m-0 p-0 list-none">
            <li className="flex gap-4">
              <span className="text-[#D4AF37] font-bold">1.</span> 
              <span><strong>Identidade:</strong> Qual o nome da sua empresa (ou seu nome como freelancer) e qual é o principal serviço que você entrega hoje?</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#D4AF37] font-bold">2.</span> 
              <span><strong>Público:</strong> Quem é o seu cliente ideal e por que ele escolhe você e não a concorrência?</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#D4AF37] font-bold">3.</span> 
              <span><strong>Preferências:</strong> Como você exige que o UplexOS se comunique com você no dia a dia? (Ex: Tom mais ríspido, respostas curtas, proibição de emojis?).</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 mb-12 flex gap-4 items-start">
          <Info className="w-6 h-6 text-zinc-400 shrink-0 mt-0.5" />
          <p className="text-zinc-400 text-sm leading-relaxed m-0">
            <strong>Privacidade Absoluta:</strong> Os dados gerados pelo <code>/instalar</code> não são enviados para nuvem. Eles ficam salvos em texto plano dentro de <code>_knowledge/company/empresa.md</code> e definem o "System Prompt" permanente da sua instância.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-2">3. O Primeiro Cliente (/onboarding)</h2>
        <p className="text-zinc-400 leading-relaxed mb-6">
          Com a empresa configurada, você está pronto para atender seu primeiro cliente real. O UplexOS exige a utilização do script interativo de terminal para extrair os escopos de novos clientes.
          <br /><br />
          <strong>Atenção:</strong> Não inicie projetos de forma desestruturada conversando com a IA no chat. Use obrigatoriamente a UI via Bash:
        </p>

        <CodeBlock 
          language="bash"
          code={`$ ./.uplex/ops/onboarding.sh`}
          output={`=========================================================
   _   _       _           ___  ____
  | | | |_ __ | | _____  _/ _ \/ ___|
  | | | | '_ \| |/ _ \ \/ / | | \___ \ 
  | |_| | |_) | |  __/>  <| |_| |___) |
   \___/| .__/|_|\___/_/\_\___/|____/
        |_|                           
  A u t o n o m o u s   W o r k f l o w   E n g i n e
=========================================================
[SYSTEM] Initializing Product Manager Protocol...

--- FASE 1: PERFIL DO CLIENTE ---
Nome da Empresa / Cliente: `}
        />

        <p className="text-zinc-400 leading-relaxed mt-6">
          O script fará o interrogatório do TIER do sistema, criará as pastas estruturais em <code>_projetos/[cliente]</code> e iniciará a Máquina de Estados travando a demanda no agente "Software Architect". O Dossiê gerado é a base absoluta para a geração do código-fonte.
        </p>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between">
          <a href="/docs/requisitos" className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-400 font-semibold rounded-lg hover:text-white hover:bg-zinc-900 transition-colors">
            Voltar: Requisitos
          </a>
          <a href="/docs/skills" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Próximo: Lista de Skills
          </a>
        </div>
      </div>
    </div>
  );
}
