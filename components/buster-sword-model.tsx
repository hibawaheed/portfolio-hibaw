"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Float } from "@react-three/drei"
import type * as THREE from "three"

// Buster Sword Model based on reference image
function BusterSword({ scale = 1 }) {
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
      <mesh position={[0, -2.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1.5, 16]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.3} />
      </mesh>

      {/* Handle Wrapping */}
      <mesh position={[0, -2.5, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 1.4, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} />
      </mesh>

      {/* Sword Guard */}
      <mesh position={[0, -1.7, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 16]} />
        <meshStandardMaterial color="#333333" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Sword Blade - Main black part */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.2, 4, 1.2]} />
        <meshStandardMaterial color="#222222" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Blade Tip */}
      <mesh position={[0, 2.7, 0]}>
        <coneGeometry args={[0.6, 0.8, 4]} />
        <meshStandardMaterial color="#222222" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Blade Edge Highlights - Silver edges */}
      <mesh position={[0.11, 0.5, 0]}>
        <boxGeometry args={[0.01, 4, 1.21]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.1} metalness={1} />
      </mesh>
      <mesh position={[-0.11, 0.5, 0]}>
        <boxGeometry args={[0.01, 4, 1.21]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.1} metalness={1} />
      </mesh>

      {/* Edge highlights for the tip */}
      <mesh position={[0, 2.7, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[0.61, 0.81, 4]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.1} metalness={1} wireframe={true} />
      </mesh>

      {/* Decorative Elements on Guard */}
      <mesh position={[0, -1.7, 0.3]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#444444" roughness={0.2} metalness={0.9} />
      </mesh>
      <mesh position={[0, -1.7, -0.3]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#444444" roughness={0.2} metalness={0.9} />
      </mesh>
    </group>
  )
}

export default function BusterSwordModel({ className = "h-[500px] w-[500px]" }) {
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
          <BusterSword scale={0.8} />
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
