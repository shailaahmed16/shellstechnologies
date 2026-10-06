"use client";
import {useRef,useState} from "react";import {useFrame} from "@react-three/fiber";import {Float} from "@react-three/drei";import * as THREE from "three";
export default function DigitalSphere({mobile=false}:{mobile?:boolean}){
 const g=useRef<THREE.Group>(null),r1=useRef<THREE.Mesh>(null),r2=useRef<THREE.Mesh>(null),core=useRef<THREE.MeshStandardMaterial>(null);const [hot,setHot]=useState(false);
 useFrame((s,d)=>{
  if(g.current){g.current.rotation.y+=(s.pointer.x*0.6-g.current.rotation.y)*0.05;g.current.rotation.x+=(-s.pointer.y*0.4-g.current.rotation.x)*0.05;
   const sc=typeof window!=="undefined"?window.scrollY/800:0;g.current.position.y=sc*1.2;g.current.rotation.z=sc*0.5}
  if(r1.current)r1.current.rotation.x+=d*0.4;if(r2.current)r2.current.rotation.y+=d*0.6;
  if(core.current)core.current.emissiveIntensity+=((hot?2.4:1.1)-core.current.emissiveIntensity)*0.1});
 const nodes=Array.from({length:mobile?6:14},(_,i)=>{const a=i*2.4,y=(i/14-0.5)*3;return [Math.cos(a)*2,y,Math.sin(a)*2] as [number,number,number]});
 return <group ref={g}>
  <mesh onPointerOver={()=>setHot(true)} onPointerOut={()=>setHot(false)}><icosahedronGeometry args={[1,mobile?3:5]}/><meshStandardMaterial ref={core} color="#6D28D9" emissive="#8B5CF6" emissiveIntensity={1.1} roughness={0.2} metalness={0.6}/></mesh>
  <mesh ref={r1}><torusGeometry args={[1.7,0.012,16,120]}/><meshBasicMaterial color="#A855F7"/></mesh>
  <mesh ref={r2} rotation={[1,0,0]}><torusGeometry args={[2.1,0.012,16,120]}/><meshBasicMaterial color="#EDE9FE"/></mesh>
  {nodes.map((p,i)=><Float key={i} speed={2} floatIntensity={0.6}><group position={p}><mesh><sphereGeometry args={[0.05]}/><meshBasicMaterial color="#EDE9FE"/></mesh></group></Float>)}
  <mesh position={[2.3,0.8,0.5]} rotation={[0,-0.5,0]}><planeGeometry args={[1,0.6]}/><meshPhysicalMaterial color="#fff" transparent opacity={0.18} roughness={0} transmission={0.6} side={THREE.DoubleSide}/></mesh>
 </group>}
