"use client";
import {useEffect,useState} from "react";import Scene from "./Scene";import DigitalSphere from "./DigitalSphere";import ParticleField from "./ParticleField";
export default function Hero3D({className="absolute inset-0"}:{className?:string}){
 const [m,setM]=useState(false);useEffect(()=>setM(window.innerWidth<768),[]);
 return <Scene className={className}><DigitalSphere mobile={m}/><ParticleField count={m?250:1200}/></Scene>}
