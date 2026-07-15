import { ShieldCheck, Lock, AlertTriangle } from "lucide-react";

export default function SegurancaPage() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Quality & Security Engine</h1>
      <p className="text-xl text-zinc-400 font-light mb-12 leading-relaxed">
        A barreira arquitetural que previne Inteligências Artificiais de quebrarem a aplicação 
        ou introduzirem falhas críticas de infraestrutura.
      </p>

      <div className="prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">O Bloqueio de Deploy</h2>
        <p className="text-zinc-400 leading-relaxed mb-6">
          A entrega de código perde o sentido sem uma validação rigorosa. No fluxo (Handoff) do UplexOS, a etapa do <code>Security Engineer</code> e <code>QA Engineer</code> <strong>não é opcional</strong>. O sistema impõe uma barreira física no pipeline.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <Lock className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Auditoria Estrita</h3>
            <p className="text-zinc-400 text-sm">
              Nenhuma linha de código gerada pelo backend vai pro repositório sem ser submetida aos padrões globais de checagem da OWASP e tipagem estrita (TypeScript/Zod).
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <ShieldCheck className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">CI/CD Simulado</h3>
            <p className="text-zinc-400 text-sm">
              Usamos Ganchos locais na pasta <code>.uplex/ops/</code> contendo linters e testes unitários. Se houver falha na esteira, o comando de "salvar" (git push) é sumariamente bloqueado.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">Emenda 2: Doutrina de Override Limitado</h2>
        <p className="text-zinc-400 leading-relaxed mb-6">
          O agente de Segurança possui autoridade suprema e pode barrar deploys criando o arquivo <code>SECURITY_HALT.md</code>. Porém, você (como CEO/Product Manager do UplexOS) pode acionar o Conselho de Arbitragem Executivo para forçar um deploy emergencial.
        </p>
        
        <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-5 mb-10 flex gap-4 items-start">
          <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-red-500 font-semibold mb-1">Cuidado Extremo (Quebra de Veto)</h4>
            <p className="text-zinc-400 text-sm leading-relaxed mb-3">
              O override só pode ser usado nos Tiers 1 (MVP) e 2 (Startup). 
              <strong>No TIER 3 (Enterprise)</strong>, o Override é impossível para vetores de conformidade regulatória (PCI, LGPD). O sistema vai ignorar seu pedido de deploy.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Ao forçar um deploy, o sistema cria um <code>RISK_ACCEPTANCE.md</code>, documentando formalmente a sua quebra de protocolo, o risco injetado em produção e a data limite de refatoração do débito técnico.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-between">
          <a href="/docs/skills" className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-400 font-semibold rounded-lg hover:text-white transition-colors">
            Voltar
          </a>
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#F3E5AB] transition-colors">
            Voltar à Home
          </a>
        </div>
      </div>
    </>
  );
}
