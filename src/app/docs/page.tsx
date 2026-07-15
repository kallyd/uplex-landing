import { Info, Terminal } from "lucide-react";

export default function DocsIntroPage() {
  return (
    <>
      <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
        UplexOS Documentação
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">O que é o UplexOS?</h1>
      <p className="text-xl text-zinc-400 font-light mb-12 leading-relaxed">
        A esteira definitiva para transformar programadores em donos de Software House escalável, 
        orquestrada por Inteligência Artificial.
      </p>

      {/* Alert / Notice */}
      <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-5 mb-12 flex gap-4 items-start">
        <Info className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-blue-400 font-semibold mb-1">Nota de Versão</h4>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Esta documentação refere-se à versão <strong>v4.0 Enterprise</strong>. 
            O UplexOS não é um chatbot, nem um mero template. É um Sistema Operacional de Engenharia projetado para orquestrar o ciclo de vida completo do desenvolvimento de software.
          </p>
        </div>
      </div>

      <div className="prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">Uma Força de Trabalho Autônoma</h2>
        <p className="text-zinc-400 leading-relaxed mb-8">
          O UplexOS introduz o conceito de Força de Trabalho Autônoma. Ele orquestra e implanta agentes especialistas — de Product Managers e Arquitetos de Sistemas a Engenheiros de Frontend e Auditores de Segurança — operando de forma sincronizada. Esta não é uma coleção de ferramentas isoladas, mas uma equipe de experts executando fluxos de trabalho complexos e de múltiplas etapas com total autonomia.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">Filosofia e Manifesto</h2>
        <ul className="text-zinc-400 space-y-4 mb-8">
          <li><strong className="text-white">Qualidade antes da velocidade:</strong> A rapidez é um subproduto de processos rigorosos e dominados. Não sacrificamos a integridade arquitetônica por vitórias de curto prazo.</li>
          <li><strong className="text-white">Contexto antes da geração:</strong> Ação sem inteligência é apenas ruído. Toda entrega é fundamentada em conhecimento organizacional profundo e intenção estratégica.</li>
          <li><strong className="text-white">Execução Sistêmica:</strong> Não construímos meras features; engenheiramos sistemas completos.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">Sistema de Tiers</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          O UplexOS opera em diferentes modos de intensidade (Tiers) adaptando suas regras de governança ao escopo de cada cliente:
        </p>
        <div className="grid gap-4 mb-8">
          <div className="p-4 rounded-xl border border-zinc-800 bg-[#0A0A0A]">
            <h4 className="text-white font-bold mb-2">TIER 1 (MVP Mode)</h4>
            <p className="text-sm text-zinc-400"><code>Performance e Velocidade &gt; Design</code>. Foco em lançamento rápido, ideal para Landing Pages e Portfólios.</p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-800 bg-[#0A0A0A]">
            <h4 className="text-white font-bold mb-2">TIER 2 (Startup Mode)</h4>
            <p className="text-sm text-zinc-400"><code>Equilíbrio: A Conversão é Rainha</code>. Balanço entre design e performance (Dashboards, sistemas dinâmicos).</p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-800 bg-[#0A0A0A]">
            <h4 className="text-white font-bold mb-2">TIER 3 (Enterprise Mode)</h4>
            <p className="text-sm text-zinc-400"><code>Segurança &gt; Performance &gt; Design</code>. Proteção de dados, conformidade (PCI, LGPD) e arquitetura sólida.</p>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <a href="/docs/requisitos" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
            Próximo: Pré-Requisitos
          </a>
        </div>
      </div>
    </>
  );
}
