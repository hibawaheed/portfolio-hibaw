"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Float } from "@react-three/drei"
import type * as THREE from "three"

// Simple Axe Model
function SimpleAxe({ scale = 1 }) {
  const group = useRef<THREE.Group>(null)

  // Simple rotation animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group ref={group} scale={[scale, scale, scale]} position={[0, 0, 0]}>
      {/* Axe Handle */}
      <mesh position={[0, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 4, 16]} />
        <meshStandardMaterial color="#5c3d2e" roughness={0.8} />
      </mesh>

      {/* Handle Grip Wrapping */}
      <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 1.2, 16]} />
        <meshStandardMaterial color="#3d2817" roughness={0.9} />
      </mesh>

      {/* Axe Head Base */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
        <meshStandardMaterial color="#555555" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Axe Blade */}
      <mesh position={[0, 1.2, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.5, 1, 32, 1]} />
        <meshStandardMaterial color="#888888" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Axe Blade Back */}
      <mesh position={[0, 1.2, -0.4]} rotation={[Math.PI / 2, Math.PI, 0]}>
        <coneGeometry args={[0.3, 0.6, 32, 1]} />
        <meshStandardMaterial color="#888888" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Blade Edge */}
      <mesh position={[0, 1.2, 0.7]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.02, 16, 32, Math.PI / 2]} />
        <meshStandardMaterial color="#cccccc" roughness={0.1} metalness={1} />
      </mesh>

      {/* Decorative Elements */}
      <mesh position={[0, 1.2, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.2, 0.03, 16, 16]} />
        <meshStandardMaterial color="#444444" roughness={0.2} metalness={0.9} />
      </mesh>
    </group>
  )
}

export default function SimpleAxeModel({ className = "h-[500px] w-[500px]" }) {
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
          <SimpleAxe scale={1.2} />
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
