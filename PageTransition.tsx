"use client";
import {motion} from "framer-motion";import {usePathname} from "next/navigation";
export default function PageTransition({children}:{children:React.ReactNode}){const p=usePathname();
 return <motion.div key={p} initial={{opacity:0,filter:"blur(6px)"}} animate={{opacity:1,filter:"blur(0px)"}} transition={{duration:.35}}>{children}</motion.div>}
