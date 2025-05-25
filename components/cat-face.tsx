"use client"

import { useEffect, useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const catComments = [
  "Whats this?",
  "Lemme sniff it",
  "Why are you teasing me peasent",
  "I'm hungry...",
  "LET ME SNIFF IT",
  "UNWORTHY BEING LEMME SNIFF!!!!",
  "May your pillow be wet",
  "I dont like you vro💔",
  "icl ts pmo vro",
  "UNDO YOSELF",
  "Awful",
  "Well got any creamy treats?",
  "Hmm, so mistakes can be constant as well.",
  "I'm sleepy...",
  "koi haal nhi",
]

// Super simple cat head with even bigger ears and more prominent pink inner parts
function SimpleCatHead({ mousePosition }) {
  const group = useRef<THREE.Group>(null)

  useFrame(() => {
    if (group.current) {
      // Very limited head movement to prevent cutoff
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mousePosition.x * 0.2, 0.1)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mousePosition.y * 0.1, 0.1)
    }
  })

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Cat head - simple dark gray sphere */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Even bigger ears with more prominent pink inner effect */}
      {/* Left ear outer - further increased size */}
      <mesh position={[-0.6, 0.8, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.5, 0.9, 32]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Left ear inner pink - more visible */}
      <mesh position={[-0.6, 0.8, 0.1]} rotation={[0, 0, Math.PI / 4]} scale={[0.8, 0.8, 0.8]}>
        <coneGeometry args={[0.5, 0.9, 32]} />
        <meshStandardMaterial color="#ff9999" />
      </mesh>

      {/* Right ear outer - further increased size */}
      <mesh position={[0.6, 0.8, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.5, 0.9, 32]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Right ear inner pink - more visible */}
      <mesh position={[0.6, 0.8, 0.1]} rotation={[0, 0, -Math.PI / 4]} scale={[0.8, 0.8, 0.8]}>
        <coneGeometry args={[0.5, 0.9, 32]} />
        <meshStandardMaterial color="#ff9999" />
      </mesh>

      {/* Additional pink ear highlights for better visibility */}
      <mesh position={[-0.6, 0.8, 0.2]} rotation={[0, 0, Math.PI / 4]} scale={[0.5, 0.5, 0.1]}>
        <coneGeometry args={[0.5, 0.9, 32]} />
        <meshStandardMaterial color="#ff9999" />
      </mesh>

      <mesh position={[0.6, 0.8, 0.2]} rotation={[0, 0, -Math.PI / 4]} scale={[0.5, 0.5, 0.1]}>
        <coneGeometry args={[0.5, 0.9, 32]} />
        <meshStandardMaterial color="#ff9999" />
      </mesh>

      {/* White dot eyes */}
      <mesh position={[-0.3, 0.1, 0.9]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
      </mesh>

      <mesh position={[0.3, 0.1, 0.9]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
      </mesh>

      {/* White nose */}
      <mesh position={[0, -0.1, 0.95]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Simple whisker marks - left side */}
      <mesh position={[-0.5, -0.05, 0.9]}>
        <boxGeometry args={[0.1, 0.02, 0.01]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-0.5, -0.1, 0.9]}>
        <boxGeometry args={[0.1, 0.02, 0.01]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-0.5, -0.15, 0.9]}>
        <boxGeometry args={[0.1, 0.02, 0.01]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Simple whisker marks - right side */}
      <mesh position={[0.5, -0.05, 0.9]}>
        <boxGeometry args={[0.1, 0.02, 0.01]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.5, -0.1, 0.9]}>
        <boxGeometry args={[0.1, 0.02, 0.01]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.5, -0.15, 0.9]}>
        <boxGeometry args={[0.1, 0.02, 0.01]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}

export default function CatFace() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [comment, setComment] = useState("Meow! 😺")
  const [showComment, setShowComment] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Track mouse position relative to container
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()

        // Calculate mouse position relative to container center
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1

        setMousePosition({ x, y })
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Change comment randomly
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowComment(false)

      setTimeout(() => {
        setComment(catComments[Math.floor(Math.random() * catComments.length)])
        setShowComment(true)
      }, 500)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative mx-auto my-8 flex h-96 w-full max-w-xl flex-col items-center justify-center overflow-visible"
    >
      <div className="relative h-80 w-80">
        <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[0, 0, 5]} intensity={0.5} />
          <SimpleCatHead mousePosition={mousePosition} />
        </Canvas>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-center">
          <h3 className="text-2xl font-medium text-teal-400">Rocky</h3>
        </div>
      </div>

      <div
        className={`absolute -right-4 top-16 w-48 rounded-xl bg-teal-600/20 p-4 text-center text-base font-medium text-white backdrop-blur-md transition-all duration-300 ${
          showComment ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute -left-2 top-4 h-0 w-0 border-b-8 border-r-8 border-t-8 border-b-transparent border-r-teal-600/20 border-t-transparent"></div>
        {comment}
      </div>
    </div>
  )
}
