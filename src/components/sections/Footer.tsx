"use client";

import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Luz de fundo do Footer Premium */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37] blur-[200px] pointer-events-none rounded-full opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="inline-flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="UplexOS Logo" className="h-10 w-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]" />
            </div>
            <p className="text-zinc-500 mb-8 max-w-sm leading-relaxed">
              O Primeiro Sistema Operacional Autônomo para Gestão de Software Houses do mundo. Construído para quem exige o nível Enterprise.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">A Plataforma</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="/docs" className="hover:text-white transition-colors">Autonomous Agents</a></li>
              <li><a href="/docs" className="hover:text-white transition-colors">Quality Engine</a></li>
              <li><a href="/docs" className="hover:text-white transition-colors">Delivery Engine</a></li>
              <li><a href="/docs" className="hover:text-white transition-colors">CLI Commands</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Recursos</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="/docs" className="hover:text-white transition-colors">Documentação</a></li>
              <li><a href="/docs" className="hover:text-white transition-colors">Uplex Academy</a></li>
              <li><a href="/docs" className="hover:text-white transition-colors">Suporte VIP</a></li>
              <li><a href="https://pay.cakto.com.br/3c9yve2_977106" className="text-[#D4AF37] hover:text-[#F3E5AB] font-semibold transition-colors">Comprar Acesso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-600 text-sm flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>&copy; {new Date().getFullYear()} Uplex Academy. Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a href="/docs" className="hover:text-zinc-400">Termos de Serviço</a>
            <a href="/docs" className="hover:text-zinc-400">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
