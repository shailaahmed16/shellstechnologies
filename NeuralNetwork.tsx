"use client";
import {useMemo} from "react";import * as THREE from "three";
export default function NeuralNetwork({layers=[4,6,6,3]}:{layers?:number[]}){
 const {pts,lines}=useMemo(()=>{const pts:THREE.Vector3[][]=layers.map((n,l)=>Array.from({length:n},(_,i)=>new THREE.Vector3((l-(layers.length-1)/2)*1.6,(i-(n-1)/2)*0.6,0)));
  const v:number[]=[];for(let l=0;l<pts.length-1;l++)pts[l].forEach(a=>pts[l+1].forEach(b=>v.push(a.x,a.y,a.z,b.x,b.y,b.z)));return {pts:pts.flat(),lines:new Float32Array(v)}},[layers]);
 return <group><lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" array={lines} count={lines.length/3} itemSize={3}/></bufferGeometry><lineBasicMaterial color="#8B5CF6" transparent opacity={0.35}/></lineSegments>
 {pts.map((p,i)=><mesh key={i} position={p}><sphereGeometry args={[0.07]}/><meshBasicMaterial color="#EDE9FE"/></mesh>)}</group>}
