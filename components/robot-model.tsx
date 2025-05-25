"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

// Simple Robot model using basic Three.js shapes
function Robot({ scale = 1 }) {
  const group = useRef<THREE.Group>(null)
  const bodyRef = useRef<THREE.Mesh>(null)
  const headRef = useRef<THREE.Mesh>(null)
  const leftArmRef = useRef<THREE.Mesh>(null)
  const rightArmRef = useRef<THREE.Mesh>(null)
  const leftLegRef = useRef<THREE.Mesh>(null)
  const rightLegRef = useRef<THREE.Mesh>(null)

  // Animation
  useFrame((state) => {
    if (group.current) {
      // Gentle bobbing - reduced amplitude
      group.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05

      // Head movement
      if (headRef.current) {
        headRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
      }

      // Arm movement
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 2) * 0.2
        rightArmRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 2 + Math.PI) * 0.2
      }

      // Leg movement - walking animation
      if (leftLegRef.current && rightLegRef.current) {
        leftLegRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 2) * 0.3
        rightLegRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 2 + Math.PI) * 0.3
      }
    }
  })

  return (
    <group ref={group} scale={[scale, scale, scale]} position={[0, 0, 0]}>
      {/* Robot body */}
      <mesh ref={bodyRef} position={[0, 0.5, 0]}>
        <boxGeometry args={[0.8, 1, 0.5]} />
        <meshStandardMaterial color="#3498db" />
      </mesh>

      {/* Robot head */}
      <mesh ref={headRef} position={[0, 1.3, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#2980b9" />

        {/* Robot eyes */}
        <mesh position={[0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>

        {/* Robot mouth */}
        <mesh position={[0, -0.1, 0.31]}>
          <boxGeometry args={[0.2, 0.05, 0.01]} />
          <meshStandardMaterial color="#333333" />
        </mesh>

        {/* Robot antenna */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
          <meshStandardMaterial color="#e74c3c" />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#e74c3c" emissive="#e74c3c" emissiveIntensity={0.5} />
        </mesh>
      </mesh>

      {/* Robot arms */}
      <mesh ref={leftArmRef} position={[-0.5, 0.5, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#2980b9" />
      </mesh>
      <mesh ref={rightArmRef} position={[0.5, 0.5, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#2980b9" />
      </mesh>

      {/* Robot legs */}
      <mesh ref={leftLegRef} position={[-0.25, -0.3, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#2980b9" />
      </mesh>
      <mesh ref={rightLegRef} position={[0.25, -0.3, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#2980b9" />
      </mesh>
    </group>
  )
}

export default function RobotModel({ className = "h-96 w-96" }) {
  return (
    <div className={`${className} overflow-visible`}>
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 30,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <group position={[0, -2, 0]}>
          <Robot scale={1} />
        </group>
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  )
}
