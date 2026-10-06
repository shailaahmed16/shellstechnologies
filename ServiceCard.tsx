"use client";
import Link from "next/link";import {useRef} from "react";import type {Service} from "@/lib/services";
export default function ServiceCard({s}:{s:Service}){
 const r=useRef<HTMLAnchorElement>(null);
 const mv=(e:React.MouseEvent)=>{const el=r.current!,b=el.getBoundingClientRect(),x=(e.clientX-b.left)/b.width,y=(e.clientY-b.top)/b.height;
  el.style.transform=`perspective(800px) rotateY(${(x-.5)*14}deg) rotateX(${(.5-y)*14}deg) translateZ(8px)`;el.style.setProperty("--x",x*100+"%");el.style.setProperty("--y",y*100+"%")};
 return <Link ref={r} href={`/services/${s.slug}`} onMouseMove={mv} onMouseLeave={()=>{r.current!.style.transform=""}} className="group block rounded-3xl border border-violet/20 bg-white p-6 transition-transform duration-200 [background-image:radial-gradient(260px_circle_at_var(--x,50%)_var(--y,50%),rgba(168,85,247,.18),transparent)] hover:shadow-[0_20px_60px_-20px_#8B5CF6]">
  <span className="font-display text-sm text-prime">{s.n}</span><h3 className="mt-2 font-display text-xl font-bold">{s.title}</h3><p className="mt-2 text-sm text-ink/70">{s.blurb}</p><p className="mt-4 text-xs text-prime max-h-0 overflow-hidden opacity-0 transition-all group-hover:max-h-12 group-hover:opacity-100">{s.builds.slice(0,3).join(" · ")}</p></Link>}
