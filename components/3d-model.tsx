"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Float, Environment, OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

function Model({ url, scale = 1 }) {
  const ref = useRef<THREE.Group>(null)
  const { scene } = useGLTF(url)

  // Clone and prepare the scene
  const model = scene.clone()

  // Explicitly rotate to face forward
  model.rotation.set(0, Math.PI, 0)

  useFrame((state) => {
    if (ref.current) {
      // Simple bobbing animation
      ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1
    }
  })

  return <primitive ref={ref} object={model} scale={scale} />
}

interface ModelViewerProps {
  modelUrl: string
  scale?: number
  className?: string
  showControls?: boolean
}

export default function ModelViewer({
  modelUrl,
  scale = 1,
  className = "h-64 w-64",
  showControls = false,
}: ModelViewerProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 25,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.7} />
        <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={1} />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />

        {/* Center the model in the scene */}
        <group position={[0, 0, 0]}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
            <Model url={modelUrl} scale={scale} />
          </Float>
        </group>

        <Environment preset="studio" />
        {showControls && <OrbitControls enableZoom={true} />}
      </Canvas>
    </div>
  )
}
