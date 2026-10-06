"use client";
import {Canvas} from "@react-three/fiber";import {Suspense,useEffect,useState,ReactNode} from "react";
export default function Scene({children,className=""}:{children:ReactNode;className?:string}){
 const [ok,setOk]=useState<boolean|null>(null);
 useEffect(()=>{try{const c=document.createElement("canvas");setOk(!!(c.getContext("webgl2")||c.getContext("webgl")))}catch{setOk(false)}},[]);
 if(ok===false)return <div className={`${className} bg-[radial-gradient(circle,#8B5CF6,transparent_60%)] opacity-60`} aria-hidden/>;
 if(!ok)return <div className={className}/>;
 return <div className={className} aria-hidden><Canvas dpr={[1,1.5]} camera={{position:[0,0,6],fov:50}}><ambientLight intensity={0.4}/><pointLight position={[4,3,4]} intensity={30} color="#A855F7"/><Suspense fallback={null}>{children}</Suspense></Canvas></div>}
