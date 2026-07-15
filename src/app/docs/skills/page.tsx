import { Zap } from "lucide-react";

export default function SkillsPage() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Lista de Skills</h1>
      <p className="text-xl text-zinc-400 font-light mb-12 leading-relaxed">
        As "Skills" são os programas, agentes ou atalhos que você ativa via barra (`/`) para realizar tarefas hiper-específicas dentro do UplexOS.
      </p>

      <div className="prose prose-invert prose-zinc max-w-none">
        
        <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-5 mb-12 flex gap-4 items-start">
          <Zap className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-1">Cargos vs Skills</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Diferente da V3, na versão 4.0 as Skills de Agentes (ex: <code>/frontend-engineer</code>) foram unificadas no Handoff. No entanto, habilidades satélites de marketing e produtividade continuam sendo executadas explicitamente no terminal.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-2">Skills de Produtividade</h2>
        
        <div className="space-y-4 mb-12">
          {/* Card Skill */}
          <div className="p-5 border border-zinc-800 rounded-xl bg-[#0A0A0A]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#D4AF37] font-mono text-lg font-bold">/apresentacao</span>
            </div>
            <p className="text-zinc-400 text-sm">
              Gera uma apresentação profissional de projeto em HTML/CSS/JS animado (pitch-deck) baseada no Dossiê do cliente para você vender a solução antes mesmo de codá-la.
            </p>
          </div>

          <div className="p-5 border border-zinc-800 rounded-xl bg-[#0A0A0A]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#D4AF37] font-mono text-lg font-bold">/design-system</span>
            </div>
            <p className="text-zinc-400 text-sm">
              Invoca o UI Designer para extrair tokens visuais (cores, logos, tipografia) e monta um repositório central de estilo antes de gerar qualquer tela.
            </p>
          </div>

          <div className="p-5 border border-zinc-800 rounded-xl bg-[#0A0A0A]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#D4AF37] font-mono text-lg font-bold">/backlog</span>
            </div>
            <p className="text-zinc-400 text-sm">
              Inspeciona e lista de forma tabular todas as tasks pendentes do projeto. Excelente para usar no início do dia de trabalho para saber onde a equipe autônoma parou.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-2">Skills de Growth & Marketing</h2>
        <p className="text-zinc-400 mb-6">O UplexOS inclui um departamento criativo integrado na pasta <code>_projetos/[nome]/marketing/</code>.</p>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="p-4 border border-zinc-800 rounded-xl bg-[#0A0A0A]">
            <span className="text-[#D4AF37] font-mono font-bold block mb-2">/canvas</span>
            <p className="text-zinc-500 text-sm">Abre um editor visual instruído a gerar banners, posts e thumbs de alta conversão.</p>
          </div>
          <div className="p-4 border border-zinc-800 rounded-xl bg-[#0A0A0A]">
            <span className="text-[#D4AF37] font-mono font-bold block mb-2">/gerar-imagens</span>
            <p className="text-zinc-500 text-sm">Conecta à DALL-E para criar assets perfeitos para o UI Designer importar.</p>
          </div>
          <div className="p-4 border border-zinc-800 rounded-xl bg-[#0A0A0A]">
            <span className="text-[#D4AF37] font-mono font-bold block mb-2">/reels & /story</span>
            <p className="text-zinc-500 text-sm">Gera roteiros long-form 9:16 altamente virais usando princípios de retenção do Growth Hacker.</p>
          </div>
          <div className="p-4 border border-zinc-800 rounded-xl bg-[#0A0A0A]">
            <span className="text-[#D4AF37] font-mono font-bold block mb-2">/configurar-apis</span>
            <p className="text-zinc-500 text-sm">Wizard seguro para você injetar chaves do ElevenLabs, HeyGen e Meta API sem expor dados no código fonte.</p>
          </div>
        </div>

        <div className="mt-12 flex justify-between">
          <a href="/docs/instalacao" className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-400 font-semibold rounded-lg hover:text-white transition-colors">
            Voltar
          </a>
          <a href="/docs/seguranca" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
            Próximo: Quality & Security
          </a>
        </div>
      </div>
    </>
  );
}
