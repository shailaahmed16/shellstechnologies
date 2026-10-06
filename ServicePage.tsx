import {bySlug,process} from "@/lib/services";import PageHero from "./PageHero";import ProcessTimeline from "./ProcessTimeline";import CTA from "./CTA";
export default function ServicePage({slug}:{slug:string}){const s=bySlug(slug);
 return <><PageHero title={s.title} text={s.blurb}/>
 <section className="mx-auto max-w-6xl px-6 py-20 grid gap-12 md:grid-cols-2"><div><h2 className="font-display text-3xl font-bold">What we build</h2><ul className="mt-5 grid gap-2">{s.builds.map(b=><li key={b} className="rounded-xl bg-soft px-4 py-3">{b}</li>)}</ul></div>
 <div><h2 className="font-display text-3xl font-bold">Technologies</h2><div className="mt-5 flex flex-wrap gap-2">{s.tech.map(t=><span key={t} className="rounded-full border border-violet/40 px-4 py-1.5 text-sm">{t}</span>)}</div><h2 className="mt-10 font-display text-3xl font-bold">Examples</h2><ul className="mt-4 list-disc pl-5">{s.cases.map(c=><li key={c}>{c}</li>)}</ul></div></section>
 <section className="bg-soft/50 py-12"><h2 className="text-center font-display text-3xl font-bold">How we deliver {s.title.toLowerCase()}</h2><ProcessTimeline steps={process}/></section>
 <section className="mx-auto max-w-3xl px-6 py-20"><h2 className="font-display text-3xl font-bold">Questions</h2>{s.faq.map(([q,a])=><details key={q} className="border-b border-violet/20 py-4"><summary className="cursor-pointer font-medium">{q}</summary><p className="mt-2 text-ink/70">{a}</p></details>)}</section>
 <CTA/></>}
