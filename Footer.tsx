import Link from "next/link";import {company} from "@/lib/company";import {services} from "@/lib/services";
export default function Footer(){return <footer className="dark-s px-6 py-14"><div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-3">
 <div><p className="font-display text-xl font-bold">SHELLS TECHNOLOGIES</p><p className="mt-3 text-white/70 max-w-xs">Software, AI and immersive digital experiences.</p><p className="mt-4 text-sm">{company.email}<br/>{company.phone}<br/>{company.location}</p></div>
 <ul className="grid gap-1 text-sm text-white/80">{services.map(s=><li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
 <ul className="grid gap-1 text-sm text-white/80 content-start">{["about","products","portfolio","why-choose-us","how-we-work","contact"].map(h=><li key={h}><Link href={`/${h}`} className="capitalize">{h.replace(/-/g," ")}</Link></li>)}</ul></div></footer>}
