
'use client';

import { Model } from './canvas/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

export default function Modelo3D() {
  return (

    <Canvas
      id="obj3D"
      className="z-50 hidden xl:block opacity-80 -translate-1/2 xl:border-4 xl:border-[var(--accent)]/60"
      style={{ position: "absolute", top: "50%", left: "50%", width: "100vw", height: "100vh" }}
    >
      <Stage environment={"park"} intensity={0.1} shadows={true} adjustCamera={true}>
        <Model scale={0.4} rotation={[10, 10, 5]} />
      </Stage>
      <OrbitControls enableZoom={false} autoRotateSpeed={4} />
    </Canvas>

  )
}