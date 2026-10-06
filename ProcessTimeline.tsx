"use client";
import {useEffect,useRef,useState} from "react";import {process} from "@/lib/services";
export default function ProcessTimeline({steps=process}:{steps?:string[]}){
 const [a,setA]=useState(0),refs=useRef<(HTMLLIElement|null)[]>([]);
 useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setA(+(e.target as HTMLElement).dataset.i!)}),{rootMargin:"-45% 0px -45% 0px"});refs.current.forEach(r=>r&&io.observe(r));return()=>io.disconnect()},[]);
 return <ol className="relative mx-auto max-w-2xl border-l-2 border-violet/20 pl-8">{steps.map((s,i)=><li key={s} data-i={i} ref={el=>{refs.current[i]=el}} className={`py-14 transition-all duration-500 ${i<=a?"opacity-100":"opacity-30"}`}><span className={`absolute -left-[11px] h-5 w-5 rounded-full ${i<=a?"bg-bright shadow-[0_0_20px_#A855F7]":"bg-soft"}`}/><span className="text-sm text-prime">Step {i+1}</span><h3 className="font-display text-3xl font-bold">{s}</h3></li>)}</ol>}
