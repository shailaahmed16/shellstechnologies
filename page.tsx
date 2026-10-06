import PageHero from "@/components/PageHero";import CTA from "@/components/CTA";
const V=[["Vision","Make advanced technology feel simple and useful."],["Mission","Build reliable software, AI and 3D experiences for ambitious companies."],["Philosophy","Performance and clarity come before spectacle."]];
export default function P(){return <><PageHero title="About Shells Technologies" text="A technology company building software, AI and immersive digital products."/>
<section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">{V.map(([t,d])=><div key={t} className="rounded-3xl bg-soft p-7"><h2 className="font-display text-2xl font-bold">{t}</h2><p className="mt-2 text-ink/70">{d}</p></div>)}</section><CTA/></>}
