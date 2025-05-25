"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Float } from "@react-three/drei"
import type * as THREE from "three"

// Trident Weapon Model based on reference image
function TridentWeapon({ scale = 1 }) {
  const group = useRef<THREE.Group>(null)

  // Simple rotation animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.2
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={group} scale={[scale, scale, scale]} position={[0, -1, 0]}>
      {/* Handle */}
      <mesh position={[0, -2, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 3, 16]} />
        <meshStandardMaterial color="#4a1010" roughness={0.6} metalness={0.4} />
      </mesh>

      {/* Handle decorative rings */}
      <mesh position={[0, -1.2, 0]}>
        <torusGeometry args={[0.15, 0.05, 16, 32]} />
        <meshStandardMaterial color="#888888" roughness={0.2} metalness={0.9} />
      </mesh>
      <mesh position={[0, -0.8, 0]}>
        <torusGeometry args={[0.15, 0.05, 16, 32]} />
        <meshStandardMaterial color="#888888" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Base of the blade */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 0.4, 16]} />
        <meshStandardMaterial color="#888888" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Main blade body - red center */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.1, 0.2, 2, 16]} />
        <meshStandardMaterial
          color="#cc0000"
          roughness={0.2}
          metalness={0.8}
          emissive="#ff0000"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Outer blade shell - silver */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 1.9, 16]} />
        <meshStandardMaterial color="#cccccc" roughness={0.1} metalness={1} transparent={true} opacity={0.7} />
      </mesh>

      {/* Top blade connector */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#888888" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Center prong */}
      <mesh position={[0, 2.5, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.1, 1.5, 16]} />
        <meshStandardMaterial color="#cccccc" roughness={0.1} metalness={1} />
      </mesh>

      {/* Left prong */}
      <mesh position={[-0.25, 2.3, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <coneGeometry args={[0.08, 1.2, 16]} />
        <meshStandardMaterial color="#cccccc" roughness={0.1} metalness={1} />
      </mesh>

      {/* Right prong */}
      <mesh position={[0.25, 2.3, 0]} rotation={[0, 0, Math.PI / 12]}>
        <coneGeometry args={[0.08, 1.2, 16]} />
        <meshStandardMaterial color="#cccccc" roughness={0.1} metalness={1} />
      </mesh>

      {/* Red energy core in the center */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.05, 0.15, 2.1, 16]} />
        <meshStandardMaterial
          color="#ff0000"
          roughness={0.1}
          metalness={0.5}
          emissive="#ff0000"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Side blades - left */}
      <mesh position={[-0.3, 0.5, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.1, 0.8, 0.05]} />
        <meshStandardMaterial color="#cccccc" roughness={0.1} metalness={1} />
      </mesh>

      {/* Side blades - right */}
      <mesh position={[0.3, 0.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.1, 0.8, 0.05]} />
        <meshStandardMaterial color="#cccccc" roughness={0.1} metalness={1} />
      </mesh>

      {/* Decorative elements */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[0.25, 0.05, 16, 32]} />
        <meshStandardMaterial
          color="#cc0000"
          roughness={0.2}
          metalness={0.8}
          emissive="#ff0000"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  )
}

export default function TridentWeaponModel({ className = "h-[500px] w-[500px]" }) {
  return (
    <div className={`${className} overflow-visible`}>
      <Canvas
        camera={{
          position: [-2, 0, 8],
          fov: 35,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#ff0000" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <TridentWeapon scale={0.9} />
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
