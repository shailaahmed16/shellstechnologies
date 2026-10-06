"use client";
import {useMemo,useRef} from "react";import {useFrame} from "@react-three/fiber";import * as THREE from "three";
export default function ParticleField({count=1200,radius=6}:{count?:number;radius?:number}){
 const ref=useRef<THREE.Points>(null);
 const pos=useMemo(()=>{const a=new Float32Array(count*3);for(let i=0;i<count;i++){const r=radius*(0.4+Math.random()*0.8),t=Math.random()*6.28,p=Math.acos(2*Math.random()-1);a.set([r*Math.sin(p)*Math.cos(t),r*Math.sin(p)*Math.sin(t),r*Math.cos(p)],i*3)}return a},[count,radius]);
 useFrame((_,d)=>{if(ref.current)ref.current.rotation.y+=d*0.03});
 return <points ref={ref}><bufferGeometry><bufferAttribute attach="attributes-position" array={pos} count={count} itemSize={3}/></bufferGeometry><pointsMaterial size={0.03} color="#A855F7" transparent opacity={0.8} sizeAttenuation depthWrite={false}/></points>}
