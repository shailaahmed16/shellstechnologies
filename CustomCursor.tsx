"use client";
import {useEffect,useRef} from "react";
export default function CustomCursor(){const d=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!matchMedia("(pointer:fine)").matches||matchMedia("(prefers-reduced-motion:reduce)").matches)return;document.body.classList.add("cc");let big=false;
  const m=(e:MouseEvent)=>{const t=(e.target as HTMLElement).closest("a,button,[data-magnetic]");big=!!t;d.current!.style.transform=`translate(${e.clientX-10}px,${e.clientY-10}px) scale(${big?2.4:1})`;
   const mg=(e.target as HTMLElement).closest("[data-magnetic]") as HTMLElement|null;if(mg){const b=mg.getBoundingClientRect();mg.style.transform=`translate(${(e.clientX-b.left-b.width/2)*.2}px,${(e.clientY-b.top-b.height/2)*.3}px)`}};
  const out=(e:MouseEvent)=>{const mg=(e.target as HTMLElement).closest?.("[data-magnetic]") as HTMLElement|null;if(mg)mg.style.transform=""};
  addEventListener("mousemove",m);addEventListener("mouseout",out);return()=>{removeEventListener("mousemove",m);removeEventListener("mouseout",out);document.body.classList.remove("cc")}},[]);
 return <div ref={d} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-5 w-5 rounded-full border border-bright bg-bright/30 mix-blend-screen transition-transform duration-100 [@media(pointer:fine)]:block"/>}
