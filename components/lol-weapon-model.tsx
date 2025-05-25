"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Float } from "@react-three/drei"

// Darius Axe Model
function DariusAxe({ scale = 1 }) {
  const group = useRef()
  const [rotation, setRotation] = useState(0)

  // Floating animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.2
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={group} scale={[scale, scale, scale]} position={[0, 0, 0]}>
      {/* Axe Handle */}
      <mesh position={[0, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.1, 3, 16]} />
        <meshStandardMaterial color="#4a3728" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Axe Head Base */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 16]} />
        <meshStandardMaterial color="#555555" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Axe Blade - Main */}
      <mesh position={[0, 0.8, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.6, 1.2, 4, 1]} />
        <meshStandardMaterial
          color="#8a0303"
          roughness={0.2}
          metalness={0.9}
          emissive="#ff0000"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Axe Blade - Back */}
      <mesh position={[0, 0.8, -0.4]} rotation={[Math.PI / 2, Math.PI, 0]}>
        <coneGeometry args={[0.6, 1.2, 4, 1]} />
        <meshStandardMaterial
          color="#8a0303"
          roughness={0.2}
          metalness={0.9}
          emissive="#ff0000"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Blade Edge - Glowing */}
      <mesh position={[0, 0.8, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.6, 0.03, 16, 4, Math.PI / 2]} />
        <meshStandardMaterial
          color="#ff0000"
          roughness={0.1}
          metalness={1}
          emissive="#ff0000"
          emissiveIntensity={0.8}
        />
      </mesh>

      <mesh position={[0, 0.8, -0.8]} rotation={[Math.PI / 2, Math.PI, 0]}>
        <torusGeometry args={[0.6, 0.03, 16, 4, Math.PI / 2]} />
        <meshStandardMaterial
          color="#ff0000"
          roughness={0.1}
          metalness={1}
          emissive="#ff0000"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Decorative Elements */}
      <mesh position={[0, 0.8, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.3, 0.05, 16, 16]} />
        <meshStandardMaterial color="#222222" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Skull Decoration */}
      <group position={[0, 1.2, 0]} scale={[0.2, 0.2, 0.2]}>
        {/* Skull Base */}
        <mesh>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color="#e0e0e0" roughness={0.5} metalness={0.2} />
        </mesh>

        {/* Eye Sockets */}
        <mesh position={[0.3, 0.1, 0.6]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#000000" emissive="#ff0000" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-0.3, 0.1, 0.6]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#000000" emissive="#ff0000" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </group>
  )
}

// Particle effects for the weapon
function ParticleEffects() {
  const particles = useRef()
  const count = 100
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 2
    positions[i3 + 1] = (Math.random() - 0.5) * 2
    positions[i3 + 2] = (Math.random() - 0.5) * 2
  }

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.getElapsedTime() * 0.1

      const positions = particles.current.geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positions[i3 + 1] = Math.sin(state.clock.getElapsedTime() + i) * 0.2
      }
      particles.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ff0000" transparent opacity={0.6} />
    </points>
  )
}

export default function LOLWeaponModel({ className = "h-[500px] w-[500px]" }) {
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
        <ambientLight intensity={0.4} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#ff0000" />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DariusAxe scale={1.5} />
          <ParticleEffects />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
