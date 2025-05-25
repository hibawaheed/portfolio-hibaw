"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  // Generate heart particles
  const hearts = Array.from({ length: 5 }).map((_, i) => {
    const size = Math.random() * 10 + 5
    const delay = i * 0.1
    const duration = 0.8 + Math.random() * 0.4

    return (
      <motion.div
        key={i}
        className="pointer-events-none absolute text-teal-400"
        style={{
          fontSize: size,
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          y: [mousePosition.y, mousePosition.y - 20 - Math.random() * 30],
          x: [mousePosition.x, mousePosition.x + Math.sin(i) * 20 - 10],
        }}
        transition={{
          duration: duration,
          ease: "easeOut",
          delay: delay,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 0.2,
        }}
      >
        ♥
      </motion.div>
    )
  })

  return <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">{hearts}</div>
}
