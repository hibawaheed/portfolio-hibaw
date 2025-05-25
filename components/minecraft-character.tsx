"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

// Minecraft Enderman in suit character
function MinecraftCharacter({ scale = 1 }) {
  const group = useRef<THREE.Group>(null)

  // Animation
  useFrame((state) => {
    if (group.current) {
      // Gentle bobbing
      group.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1

      // Subtle rotation
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={group} scale={[scale, scale, scale]} position={[0, -1, 0]}>
      {/* Head */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#000000" />

        {/* Eyes */}
        <mesh position={[0.25, 0, 0.51]} scale={[0.2, 0.1, 0.01]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-0.25, 0, 0.51]} scale={[0.2, 0.1, 0.01]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.5} />
        </mesh>
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[0.8, 1.5, 0.5]} />
        <meshStandardMaterial color="#000000" />

        {/* Tie */}
        <mesh position={[0, 0, 0.26]} scale={[0.2, 0.6, 0.01]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#9900cc" emissive="#9900cc" emissiveIntensity={0.2} />
        </mesh>

        {/* Suit details - white shirt */}
        <mesh position={[0, 0.2, 0.26]} scale={[0.6, 0.2, 0.01]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </mesh>

      {/* Arms */}
      <mesh position={[0.65, 0.75, 0]}>
        <boxGeometry args={[0.5, 1.5, 0.5]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[-0.65, 0.75, 0]}>
        <boxGeometry args={[0.5, 1.5, 0.5]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Legs */}
      <mesh position={[0.25, -0.75, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.5]} />
        <meshStandardMaterial color="#000000" />

        {/* Shoe detail */}
        <mesh position={[0, -0.7, 0]} scale={[1, 0.2, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </mesh>
      <mesh position={[-0.25, -0.75, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.5]} />
        <meshStandardMaterial color="#000000" />

        {/* Shoe detail */}
        <mesh position={[0, -0.7, 0]} scale={[1, 0.2, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </mesh>

      {/* Gold button detail */}
      <mesh position={[-0.3, 0.9, 0.26]} scale={[0.08, 0.08, 0.01]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ffcc00" emissive="#ffcc00" emissiveIntensity={0.3} />
      </mesh>
    </group>
  )
}

export default function MinecraftCharacterModel({ className = "h-96 w-96" }) {
  return (
    <div className={`${className} overflow-visible`}>
      <Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <MinecraftCharacter scale={1.5} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
