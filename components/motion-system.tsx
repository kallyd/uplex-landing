"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionSystem(){useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("motion-ready");return}gsap.registerPlugin(ScrollTrigger);const context=gsap.context(()=>{
  gsap.timeline({defaults:{ease:"power3.out"}}).from(".header",{y:-90,duration:.8}).from(".hero .eyebrow",{y:18,opacity:0,duration:.6},"-=.25").from(".hero h1",{y:70,opacity:0,duration:1.1},"-=.35").from(".hero-copy>p,.hero .actions,.hero-copy>small",{y:28,opacity:0,duration:.7,stagger:.12},"-=.65").from(".hero-visual",{scale:.84,opacity:0,rotation:3,duration:1.3},"-=1.1");
  gsap.to(".hero-word",{xPercent:-10,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});gsap.to(".hero-visual",{yPercent:18,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1.2}});
  gsap.utils.toArray<HTMLElement>(".reveal").forEach((el,i)=>gsap.fromTo(el,{y:55,opacity:0,rotateX:i%3===0?5:0},{y:0,opacity:1,rotateX:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%",once:true}}));
  gsap.from(".metrics>div",{y:55,opacity:0,stagger:.12,duration:.8,scrollTrigger:{trigger:".metrics",start:"top 82%"}});gsap.from(".metrics b",{textContent:0,duration:1.4,snap:{textContent:1},stagger:.1,ease:"power2.out",scrollTrigger:{trigger:".metrics",start:"top 78%",once:true}});
  gsap.from(".flow-row",{x:-45,opacity:0,stagger:.13,duration:.8,scrollTrigger:{trigger:".flow-list",start:"top 78%"}});gsap.from(".engine-card",{y:70,opacity:0,scale:.96,stagger:.09,duration:.8,scrollTrigger:{trigger:".engine-grid",start:"top 80%"}});
  gsap.to(".terminal",{y:-25,rotationY:-2,ease:"none",scrollTrigger:{trigger:".console",start:"top bottom",end:"bottom top",scrub:1}});gsap.from(".result",{x:25,opacity:0,stagger:.18,duration:.6,scrollTrigger:{trigger:".terminal",start:"top 70%"}});
  gsap.to(".final-orbit",{rotation:180,scale:1.15,ease:"none",scrollTrigger:{trigger:".final",start:"top bottom",end:"bottom top",scrub:1.3}});document.documentElement.classList.add("motion-ready")
  });return()=>{context.revert();ScrollTrigger.getAll().forEach(x=>x.kill())}},[]);return null}
