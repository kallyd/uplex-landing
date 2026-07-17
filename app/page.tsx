"use client";

import { useRef, useState } from "react";
import anime from "animejs";
import { MotionSystem } from "../components/motion-system";
import { NeuralCanvas } from "../components/neural-canvas";

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const Mark = () => <span className="mark" aria-hidden="true"><i /><i /><i /></span>;

const agents = ["PRODUCT", "ARCHITECTURE", "FRONTEND", "BACKEND", "DATABASE", "QA", "SECURITY", "DEPLOY"];
const engines = [
  ["01", "Operating System", "Um runtime que transforma objetivos em estados, tarefas, handoffs e decisões rastreáveis."],
  ["02", "Autonomous Workforce", "48 agentes especializados operam como uma organização coordenada — não como prompts isolados."],
  ["03", "Knowledge Engine", "Contexto, decisões e fontes confiáveis formam uma memória organizacional viva e navegável."],
  ["04", "Quality Engine", "Testes, evidências e gates verificam o que realmente foi executado antes de qualquer entrega."],
  ["05", "Security Engine", "Postura, análise heurística e scanners profissionais disponíveis entram no ciclo desde a arquitetura."],
  ["06", "Delivery Engine", "Ambiente, release, health check e rollback seguem um fluxo explícito, governado e auditável."],
];
const flow = [
  ["01", "INTENÇÃO", "Você descreve o negócio, o problema e o resultado esperado."],
  ["02", "ARQUITETURA", "O sistema converte visão em decisões, escopo e backlog executável."],
  ["03", "EXECUÇÃO", "Agentes constroem, integram e documentam cada parte do produto."],
  ["04", "EVIDÊNCIA", "QA e Segurança testam a revisão real e registram limitações."],
  ["05", "EVOLUÇÃO", "Resultados e aprendizados retornam ao núcleo de conhecimento."],
];
const faqs = [
  ["A UplexOS é um gerador de sites?", "Não. É uma camada operacional para coordenar estratégia, produto, engenharia, qualidade, segurança e entrega. Uma landing page pode ser uma saída; o sistema completo é o produto."],
  ["Os agentes operam sem supervisão?", "A autonomia é proporcional ao risco. Leitura e planejamento podem ser automáticos; instalações, rede, produção, dados sensíveis e mudanças irreversíveis atravessam políticas e aprovações."],
  ["O sistema já executa testes reais?", "Sim. O Testing MCP descobre scripts, cria planos allowlisted, executa checks configurados, limita timeout e output e retorna exit code, duração e hash. Scanners de segurança só rodam quando realmente instalados."],
  ["Posso integrar meu stack atual?", "A arquitetura foi desenhada para adapters. Git, browser, database, deploy, secrets e observabilidade podem ser conectados sem misturar credenciais, contexto ou autoridade entre projetos."],
  ["A UplexOS substitui minha equipe?", "Ela amplia a capacidade da equipe e torna o processo explícito. Pessoas permanecem responsáveis por intenção, prioridade, orçamento, risco e exceções; agentes assumem trabalho operacional verificável."],
];

function NeuralCore() {
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  const startAnime = () => {
    if (animated.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animated.current = true;
    anime.timeline({ easing: "easeOutExpo" })
      .add({ targets: ".core", scale: [0.55, 1], opacity: [0, 1], duration: 1100 })
      .add({ targets: ".agent", scale: [0, 1], opacity: [0, 1], delay: anime.stagger(75), duration: 700 }, "-=750")
      .add({ targets: ".connections line", strokeDashoffset: [anime.setDashoffset, 0], delay: anime.stagger(35), duration: 1000 }, "-=850");
    anime({ targets: ".core", scale: [1, 1.035], duration: 1800, direction: "alternate", loop: true, easing: "easeInOutSine" });
    anime({ targets: ".agent", translateY: (_element: Element,i: number) => i % 2 ? [-3, 4] : [4, -3], duration: (_element: Element,i: number) => 1800 + i * 110, direction: "alternate", loop: true, easing: "easeInOutSine" });
  };
  const onMove = (e: React.PointerEvent) => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = ref.current?.getBoundingClientRect(); if (!r || !ref.current) return;
    ref.current.style.setProperty("--rx", `${((e.clientY-r.top)/r.height-.5)*-7}deg`);
    ref.current.style.setProperty("--ry", `${((e.clientX-r.left)/r.width-.5)*7}deg`);
  };
  return <div className="core-wrap" ref={ref} onPointerEnter={startAnime} onPointerMove={onMove} onPointerLeave={() => { ref.current?.style.setProperty("--rx","0deg"); ref.current?.style.setProperty("--ry","0deg"); }} aria-label="Representação visual da rede UplexOS">
    <NeuralCanvas/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
    <div className="core-glow"/><div className="core"><Mark/><strong>UPLEX</strong><span>OPERATING CORE</span></div>
    {agents.map((a,i)=><div className={`agent agent-${i}`} key={a}><b>{String(i+1).padStart(2,"0")}</b>{a}</div>)}
    <svg className="connections" viewBox="0 0 600 600" aria-hidden="true"><g>{[0,45,90,135,180,225,270,315].map(d=><line key={d} x1="300" y1="300" x2={300+250*Math.cos(d*Math.PI/180)} y2={300+250*Math.sin(d*Math.PI/180)}/>)}</g></svg>
  </div>;
}

export default function Home() {
  const [menu,setMenu]=useState(false); const [open,setOpen]=useState<number|null>(0);
  return <>
    <MotionSystem/>
    <div className="noise" aria-hidden="true" />
    <header className="header"><a className="brand" href="#top" aria-label="UplexOS, início"><Mark/><b>UPLEX</b><span>OS</span></a>
      <nav className={menu?"nav open":"nav"} aria-label="Navegação principal"><a href="#sistema">Sistema</a><a href="#fluxo">Como funciona</a><a href="#engines">Engines</a><a href="#proof">Estado atual</a></nav>
      <a className="mini-cta" href="#start">INICIAR SISTEMA <Arrow/></a><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Abrir menu" aria-expanded={menu}><i/><i/></button>
    </header>

    <main id="top">
      <section className="hero section"><div className="hero-copy reveal"><div className="eyebrow"><span/>AGENTIC COMPANY OPERATING SYSTEM</div><h1>A empresa que existe <em>dentro do seu sistema.</em></h1><p>Uma força de trabalho de IA para planejar, construir, validar, proteger e evoluir produtos digitais — com contexto, governança e evidências.</p><div className="actions"><a className="button primary" href="#sistema">EXPLORAR O SISTEMA <Arrow/></a><a className="button ghost" href="#proof">VER CAPACIDADES</a></div><small><i/> CORE LOCAL ATIVO · EXECUÇÃO GOVERNADA</small></div>
        <div className="hero-visual reveal"><NeuralCore/><div className="visual-label"><span>LIVE SYSTEM</span><b>09 MCP NODES</b></div></div>
        <div className="hero-word" aria-hidden="true">SYSTEM</div>
      </section>

      <div className="ticker" aria-label="Capacidades UplexOS"><div>{[...agents,...agents].map((a,i)=><span key={i}><i/> {a}</span>)}</div></div>

      <section className="manifest section" id="sistema"><div className="section-index">01 / MANIFESTO</div><div className="manifest-grid"><h2 className="reveal">Software não deveria nascer de comandos soltos.</h2><div className="manifest-copy reveal"><p>Ferramentas fragmentadas geram velocidade aparente e dívida real. O contexto se perde. A qualidade vira opinião. A segurança chega tarde. E ninguém consegue explicar por que uma decisão foi tomada.</p><p>A UplexOS substitui improviso por um sistema operacional de execução. Cada agente conhece seu papel. Cada ação respeita um limite. Cada entrega preserva evidência.</p><strong>Não geramos apenas código.<br/>Engenheiramos sistemas completos.</strong></div></div></section>

      <section className="metrics"><div><b>48</b><span>AGENTES<br/>CANÔNICOS</span></div><div><b>09</b><span>MCPs<br/>ATIVOS</span></div><div><b>33</b><span>FONTES<br/>REGISTRADAS</span></div><div><b>20</b><span>TESTES<br/>APROVADOS</span></div></section>

      <section className="flow section" id="fluxo"><div className="section-head"><div><span>02 / OPERATIONAL FLOW</span><h2>Da intenção humana<br/>à execução sistêmica.</h2></div><p>Uma linha contínua de decisões, especialidades e gates. Sem saltos invisíveis.</p></div><div className="flow-list">{flow.map((x,i)=><article className="flow-row reveal" key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p><span className="flow-dot">{i<flow.length-1&&<i/>}</span></article>)}</div></section>

      <section className="engines section" id="engines"><div className="section-head"><div><span>03 / CORE ENGINES</span><h2>Uma organização.<br/>Seis motores.</h2></div><p>Camadas independentes trabalham como uma única unidade operacional.</p></div><div className="engine-grid">{engines.map((e,i)=><article className={`engine-card reveal card-${i}`} key={e[0]}><div><span>{e[0]}</span><i/></div><h3>{e[1]}</h3><p>{e[2]}</p><a href="#start" aria-label={`Conhecer ${e[1]}`}><Arrow/></a></article>)}</div></section>

      <section className="console section" id="proof"><div className="console-copy reveal"><div className="eyebrow"><span/>EVIDENCE, NOT THEATER</div><h2>O sistema prova o que executou.</h2><p>Uma aprovação não é um texto bonito. Cada teste preserva comando, duração, exit code, output redigido, hash e limitações. Ferramenta ausente aparece como ausente — nunca como sucesso.</p><ul><li><i/>Execução limitada por perfil e timeout</li><li><i/>Scanners profissionais allowlisted</li><li><i/>Aprovações específicas e expiráveis</li><li><i/>Evidência append-only por execução</li></ul></div>
        <div className="terminal reveal"><div className="terminal-top"><span><i/><i/><i/></span><b>UPLEX / QUALITY GATE</b><em>LIVE</em></div><div className="terminal-body"><p><span>$</span> uplex test --profile standard</p><div className="scanline"/><code>DISCOVERY</code><p className="muted">framework ......... nextjs<br/>package_manager ... npm<br/>revision .......... 7f3c2a1</p><code>EXECUTION</code>{[["TYPECHECK","PASSED","1.84s"],["UNIT","PASSED","4.21s"],["BUILD","PASSED","12.7s"],["SECURITY","NOT_INSTALLED","—"]].map(x=><div className="result" key={x[0]}><b>{x[0]}</b><span className={x[1]==="PASSED"?"pass":"warn"}>{x[1]}</span><em>{x[2]}</em></div>)}<div className="gate"><span>GATE DECISION</span><b>CONDITIONAL PASS</b></div></div></div>
      </section>

      <section className="principles section"><div className="section-index">04 / DOCTRINE</div><div className="principle-grid"><article className="reveal"><span>01</span><h3>Contexto antes da geração.</h3><p>Ação sem inteligência é apenas ruído. Toda entrega começa pela compreensão do negócio e termina em conhecimento preservado.</p></article><article className="reveal"><span>02</span><h3>Qualidade antes da velocidade.</h3><p>Rapidez é consequência de processos dominados. O sistema não troca integridade por uma demonstração superficial.</p></article><article className="reveal"><span>03</span><h3>Autonomia proporcional ao risco.</h3><p>Quanto maior o impacto, mais explícitos se tornam os limites, aprovações, evidências e caminhos de recuperação.</p></article></div></section>

      <section className="faq section"><div className="section-head"><div><span>05 / QUESTIONS</span><h2>Sem caixa-preta.</h2></div><p>O que a UplexOS é, como opera e onde estão os limites atuais.</p></div><div className="faq-list">{faqs.map((f,i)=><article className={open===i?"faq-item active":"faq-item"} key={f[0]}><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}><span>{String(i+1).padStart(2,"0")}</span><b>{f[0]}</b><i>+</i></button><div><p>{f[1]}</p></div></article>)}</div></section>

      <section className="final section" id="start"><div className="final-orbit" aria-hidden="true"/><div className="eyebrow"><span/>INITIALIZE THE FUTURE</div><h2>Sua visão dirige.<br/><em>A UplexOS constrói.</em></h2><p>Entre no sistema operacional projetado para transformar intenção em produto real — com inteligência, rigor e escala.</p><a className="button primary large" href="mailto:contato@uplex.com.br">INICIAR UM PROJETO <Arrow/></a><div className="final-meta"><span>UPLEXOS / V4.1</span><span>LOCAL-FIRST · GOVERNED · EXTENSIBLE</span></div></section>
    </main>

    <footer><a className="brand" href="#top"><Mark/><b>UPLEX</b><span>OS</span></a><p>Agentic Company Operating System.</p><div><a href="#sistema">Sistema</a><a href="#engines">Engines</a><a href="#proof">Capacidades</a></div><span>© 2026 UPLEX</span></footer>
  </>;
}
