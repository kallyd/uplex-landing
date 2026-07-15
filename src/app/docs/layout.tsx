import { Footer } from "@/components/sections/Footer";
import { DocsSidebar } from "@/components/sections/DocsSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* Header estático da Documentação */}
      <div className="sticky top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 h-20 flex items-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="UplexOS Logo" className="h-8 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform" />
            <span className="font-bold tracking-widest text-[#D4AF37] text-xs uppercase ml-4 hidden sm:block border-l border-white/10 pl-4 py-1">Docs</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a href="/" className="hover:text-white transition-all hidden sm:block">Voltar para Home</a>
            <a href="https://pay.cakto.com.br/3c9yve2_977106" target="_blank" className="px-5 py-2 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">Acesso Antecipado</a>
          </nav>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] flex gap-12 flex-1 pt-12 pb-24 relative">
        <DocsSidebar />
        <div className="flex-1 max-w-4xl pt-4">
          {children}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
