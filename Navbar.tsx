"use client";
import Link from "next/link";import {usePathname} from "next/navigation";import {useEffect,useState} from "react";import {Menu,X} from "lucide-react";import {AnimatePresence,motion} from "framer-motion";
const links=[["Home","/"],["About","/about"],["Services","/services"],["Products","/products"],["Portfolio","/portfolio"],["Why Us","/why-choose-us"],["How We Work","/how-we-work"],["Contact","/contact"]];
export default function Navbar(){
 const p=usePathname(),[s,setS]=useState(false),[o,setO]=useState(false);
 useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
 useEffect(()=>setO(false),[p]);
 return <header className="fixed top-3 inset-x-3 md:inset-x-8 z-50"><nav aria-label="Primary" className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all text-white ${s?"glass bg-[#1a0b33]/70":""}`}>
  <Link href="/" className="font-display font-bold leading-none tracking-wide">SHELLS<span className="block text-[10px] tracking-[0.35em] text-bright">TECHNOLOGIES</span></Link>
  <ul className="hidden lg:flex gap-6 text-sm">{links.map(([l,h])=><li key={h}><Link href={h} aria-current={p===h?"page":undefined} className={`relative py-1 hover:text-bright ${p===h?"text-bright after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-bright":""}`}>{l}</Link></li>)}</ul>
  <Link href="/contact" data-magnetic className="hidden lg:block rounded-full bg-gradient-to-r from-prime to-bright px-5 py-2 text-sm font-semibold">Start a Project</Link>
  <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={o} onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></nav>
  <AnimatePresence>{o&&<motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0}} className="glass bg-[#1a0b33]/95 mt-2 rounded-2xl p-5 text-white lg:hidden grid gap-3">{links.map(([l,h])=><Link key={h} href={h}>{l}</Link>)}<Link href="/contact" className="rounded-full bg-prime text-center py-2">Start a Project</Link></motion.div>}</AnimatePresence></header>}
