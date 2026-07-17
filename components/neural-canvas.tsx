"use client";
import { useEffect, useRef } from "react";
import anime from "animejs";

type Node = { angle:number; radius:number; depth:number; pulse:number; speed:number; size:number };

export function NeuralCanvas(){
  const canvasRef=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{const canvas=canvasRef.current;if(!canvas)return;const ctx=canvas.getContext("2d");if(!ctx)return;const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;let width=0,height=0,dpr=1,frame=0,visible=true;const pointer={x:0,y:0,targetX:0,targetY:0};
    const nodes:Node[]=Array.from({length:34},(_,i)=>({angle:(Math.PI*2*i)/34,radius:90+(i%7)*24,depth:.35+(i%5)*.13,pulse:.15,speed:.00008+(i%4)*.000025,size:1.5+(i%4)*.55}));
    const pulses=nodes.filter((_,i)=>i%4===0);const animation=reduced?null:anime({targets:pulses,pulse:[.12,1],duration:1200,delay:anime.stagger(130),direction:"alternate",loop:true,easing:"easeInOutSine"});
    const resize=()=>{const r=canvas.getBoundingClientRect();dpr=Math.min(devicePixelRatio||1,2);width=r.width;height=r.height;canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)};resize();const ro=new ResizeObserver(resize);ro.observe(canvas);
    const move=(e:PointerEvent)=>{const r=canvas.getBoundingClientRect();pointer.targetX=(e.clientX-r.left-r.width/2)/r.width;pointer.targetY=(e.clientY-r.top-r.height/2)/r.height};canvas.addEventListener("pointermove",move);canvas.addEventListener("pointerleave",()=>{pointer.targetX=0;pointer.targetY=0});
    const visibility=()=>visible=!document.hidden;document.addEventListener("visibilitychange",visibility);
    const render=(time:number)=>{frame=requestAnimationFrame(render);if(!visible)return;pointer.x+=(pointer.targetX-pointer.x)*.04;pointer.y+=(pointer.targetY-pointer.y)*.04;ctx.clearRect(0,0,width,height);const cx=width/2+pointer.x*24,cy=height/2+pointer.y*18,scale=Math.min(width,height)/600;const projected=nodes.map((n,i)=>{const a=n.angle+(reduced?0:time*n.speed)*(i%2?1:-1),z=.72+n.depth*.5+Math.sin(a*2+time*.0004)*.08;return{x:cx+Math.cos(a)*n.radius*scale*z+pointer.x*n.depth*22,y:cy+Math.sin(a)*n.radius*scale*.66*z+pointer.y*n.depth*18,z,n}});
      ctx.globalCompositeOperation="lighter";for(let i=0;i<projected.length;i++){for(let j=i+1;j<projected.length;j++){const a=projected[i],b=projected[j],dist=Math.hypot(a.x-b.x,a.y-b.y);if(dist<95*scale){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(255,92,0,${(1-dist/(95*scale))*.13})`;ctx.lineWidth=.55;ctx.stroke()}}}
      for(const p of projected){const glow=8+p.n.pulse*12;const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,glow);g.addColorStop(0,`rgba(255,170,80,${.65+p.n.pulse*.3})`);g.addColorStop(.2,"rgba(255,92,0,.55)");g.addColorStop(1,"rgba(255,92,0,0)");ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,glow,0,Math.PI*2);ctx.fill();ctx.fillStyle="#ff6a12";ctx.beginPath();ctx.arc(p.x,p.y,p.n.size*p.z,0,Math.PI*2);ctx.fill()}
      const core=ctx.createRadialGradient(cx,cy,0,cx,cy,115*scale);core.addColorStop(0,"rgba(255,92,0,.22)");core.addColorStop(.45,"rgba(255,92,0,.05)");core.addColorStop(1,"rgba(255,92,0,0)");ctx.fillStyle=core;ctx.beginPath();ctx.arc(cx,cy,115*scale,0,Math.PI*2);ctx.fill();ctx.globalCompositeOperation="source-over"};frame=requestAnimationFrame(render);
    return()=>{cancelAnimationFrame(frame);animation?.pause();ro.disconnect();canvas.removeEventListener("pointermove",move);document.removeEventListener("visibilitychange",visibility)}
  },[]);
  return <canvas className="neural-canvas" ref={canvasRef} aria-hidden="true"/>;
}
