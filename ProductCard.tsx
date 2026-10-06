import {products} from "@/lib/products";
export default function ProductCard({p}:{p:typeof products[number]}){
 return <article className="dark-s rounded-3xl p-8"><div className="glass mb-6 h-40 rounded-2xl [transform:perspective(700px)_rotateY(-12deg)_rotateX(6deg)]"/><h3 className="font-display text-2xl font-bold">{p.name}</h3><p className="mt-2 text-white/75">{p.desc}</p><ul className="mt-4 text-sm text-white/80 list-disc pl-5">{p.features.map(f=><li key={f}>{f}</li>)}</ul><p className="mt-3 text-xs text-bright">{p.tech}</p></article>}
