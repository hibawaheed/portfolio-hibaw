"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Float } from "@react-three/drei"
import type * as THREE from "three"

// Simple Sword Model
function SimpleSword({ scale = 1 }) {
  const group = useRef<THREE.Group>(null)

  // Simple rotation animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.2
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={group} scale={[scale, scale, scale]} position={[0, 0, 0]}>
      {/* Sword Handle */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#3d2817" roughness={0.9} />
      </mesh>

      {/* Handle Grip Wrapping */}
      <mesh position={[0, -1.5, 0]}>
        <torusGeometry args={[0.1, 0.02, 8, 16, Math.PI * 2]} />
        <meshStandardMaterial color="#222222" roughness={0.5} />
      </mesh>
      <mesh position={[0, -1.3, 0]}>
        <torusGeometry args={[0.1, 0.02, 8, 16, Math.PI * 2]} />
        <meshStandardMaterial color="#222222" roughness={0.5} />
      </mesh>
      <mesh position={[0, -1.7, 0]}>
        <torusGeometry args={[0.1, 0.02, 8, 16, Math.PI * 2]} />
        <meshStandardMaterial color="#222222" roughness={0.5} />
      </mesh>

      {/* Sword Guard */}
      <mesh position={[0, -1.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 0.8, 0.2]} />
        <meshStandardMaterial color="#555555" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Sword Blade */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.1, 3, 0.4]} />
        <meshStandardMaterial color="#aaaaaa" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Blade Tip */}
      <mesh position={[0, 2.1, 0]}>
        <coneGeometry args={[0.05, 0.4, 16]} />
        <meshStandardMaterial color="#aaaaaa" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Blade Edge Highlight */}
      <mesh position={[0, 0.5, 0.2]}>
        <boxGeometry args={[0.02, 3, 0.02]} />
        <meshStandardMaterial color="#dddddd" roughness={0.1} metalness={1} />
      </mesh>
      <mesh position={[0, 0.5, -0.2]}>
        <boxGeometry args={[0.02, 3, 0.02]} />
        <meshStandardMaterial color="#dddddd" roughness={0.1} metalness={1} />
      </mesh>

      {/* Decorative Elements on Guard */}
      <mesh position={[0, -1.1, 0.15]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#444444" roughness={0.2} metalness={0.9} />
      </mesh>
      <mesh position={[0, -1.1, -0.15]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#444444" roughness={0.2} metalness={0.9} />
      </mesh>
    </group>
  )
}

export default function SwordModel({ className = "h-[300px] w-[300px]" }) {
  return (
    <div className={`${className} overflow-visible`}>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} intensity={0.5} castShadow />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <SimpleSword scale={1} />
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
