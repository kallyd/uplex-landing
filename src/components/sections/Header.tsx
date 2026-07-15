"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Quando passar de 50px de scroll, muda para o modo bolha
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled 
            ? "mt-6 w-[95%] max-w-4xl rounded-full bg-black/70 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] px-6 py-3" 
            : "mt-0 w-full max-w-7xl bg-transparent px-6 md:px-12 py-6 border-transparent"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="UplexOS Logo" 
            className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-8' : 'h-10'}`} 
            style={{ filter: "drop-shadow(0px 0px 15px rgba(255,255,255,0.3))" }}
          />
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-zinc-300">
          <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Visão</a>
          <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Engines</a>
          <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Handoff</a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <a 
            href="https://pay.cakto.com.br/3c9yve2_977106" 
            target="_blank"
            className={`flex items-center justify-center bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)] ${
              scrolled ? 'px-6 py-2.5 text-sm' : 'px-8 py-3 text-base'
            }`}
          >
            Adquirir Agora
          </a>
        </div>
      </motion.header>
    </div>
  );
}
