"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  output?: string;
}

export function CodeBlock({ code, language = "bash", output }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Remove o $ inicial das linhas para o usuário copiar apenas os comandos reais
  const cleanCodeToCopy = code.replace(/^\$\s/gm, '');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanCodeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar", err);
    }
  };

  const codeLines = code.trim().split('\n');

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#0A0A0A] overflow-hidden mb-12 shadow-xl">
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-[#111]">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-zinc-700/50"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-zinc-700/50"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-zinc-700/50"></div>
          </div>
          <span className="text-zinc-500 text-xs font-mono font-semibold uppercase tracking-wider">{language}</span>
        </div>
        <button 
          onClick={handleCopy}
          className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/5 text-xs font-semibold"
          title="Copiar código"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />}
          {copied ? <span className="text-[#D4AF37]">Copiado!</span> : <span>Copiar</span>}
        </button>
      </div>
      
      <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
        <div className="flex flex-col gap-1">
          {codeLines.map((line, i) => {
            const isCommand = line.trim().startsWith('$');
            const content = isCommand ? line.replace(/^\$\s/, '') : line;
            
            return (
              <div key={i} className="flex">
                {isCommand && <span className="text-[#D4AF37] select-none mr-3">$</span>}
                <span className={isCommand ? "text-zinc-100" : "text-zinc-400"}>{content}</span>
              </div>
            );
          })}
        </div>
        
        {output && (
          <div className="mt-4 pt-4 border-t border-zinc-800/50">
            <div className="text-zinc-500 text-xs mb-2 select-none uppercase tracking-wider">Saída (Output)</div>
            <div className="text-zinc-400 font-mono whitespace-pre-wrap text-[13px]">{output}</div>
          </div>
        )}
      </div>
    </div>
  );
}
