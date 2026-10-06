import dynamic from "next/dynamic";
const Hero3D=dynamic(()=>import("./Hero3D"),{ssr:false});
export default function PageHero({title,text}:{title:string;text:string}){return <section className="dark-s relative min-h-[70vh] overflow-hidden px-6 pt-40 pb-20"><div className="grid-bg absolute inset-0"/><Hero3D className="absolute inset-0 opacity-70"/><div className="relative mx-auto max-w-5xl"><h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02] max-w-3xl">{title}</h1><p className="mt-6 max-w-xl text-lg text-white/75">{text}</p></div></section>}
