"use client";

import { Book, Terminal, Settings, ShieldCheck, Box, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DocsSidebar() {
  const pathname = usePathname();

  const navItems = [
    { title: "Introdução", icon: <Book className="w-4 h-4" />, href: "/docs" },
    { title: "Pré-Requisitos", icon: <Box className="w-4 h-4" />, href: "/docs/requisitos" },
    { title: "Instalação & Setup", icon: <Terminal className="w-4 h-4" />, href: "/docs/instalacao" },
    { title: "Lista de Skills", icon: <Zap className="w-4 h-4" />, href: "/docs/skills" },
    { title: "Quality & Security", icon: <ShieldCheck className="w-4 h-4" />, href: "/docs/seguranca" },
  ];

  return (
    <div className="hidden md:block w-64 shrink-0">
      <aside className="sticky top-28 flex flex-col h-[calc(100vh-140px)] border-r border-zinc-900/50 pr-6 overflow-y-auto">
        <h3 className="text-zinc-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-6 ml-3">Conteúdo Base</h3>
        <nav className="flex flex-col gap-1">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={index}
                href={item.href}
                className={`group flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all ${
                  isActive 
                    ? "bg-[#D4AF37]/10 text-[#D4AF37] font-semibold shadow-[inset_2px_0_0_0_#D4AF37]" 
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`${isActive ? "text-[#D4AF37]" : "text-zinc-500 group-hover:text-zinc-300 transition-colors"}`}>
                    {item.icon}
                  </span>
                  {item.title}
                </div>
                {isActive && <ChevronRight className="w-4 h-4 opacity-50" />}
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-auto pt-8 pb-4">
          <a href="https://pay.cakto.com.br/3c9yve2_977106" target="_blank" className="flex items-center justify-center w-full py-3 px-4 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 hover:bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-semibold transition-colors">
            Adquirir Licença
          </a>
        </div>
      </aside>
    </div>
  );
}
