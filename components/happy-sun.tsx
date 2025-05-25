"use client"

import { useState, useEffect } from "react"

export default function HappySun({ className = "h-96 w-96" }) {
  const [rotation, setRotation] = useState(0)
  const [bobPosition, setBobPosition] = useState(0)

  // Rotation and bobbing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360)
      setBobPosition(Math.sin(Date.now() / 800) * 8)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div
        className="relative transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(${bobPosition}px)` }}
      >
        {/* Sun body */}
        <div className="relative">
          {/* Main sun circle */}
          <div
            className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg flex items-center justify-center"
            style={{ boxShadow: "0 0 40px rgba(250, 204, 21, 0.6)" }}
          >
            {/* Sun face */}
            <div className="relative w-[100px] h-[100px]">
              {/* Eyes */}
              <div className="absolute top-[25px] left-[15px] w-[20px] h-[20px] rounded-full bg-black"></div>
              <div className="absolute top-[25px] right-[15px] w-[20px] h-[20px] rounded-full bg-black"></div>

              {/* Smile */}
              <div className="absolute bottom-[25px] left-[25px] w-[50px] h-[25px] border-b-4 border-black rounded-b-full"></div>

              {/* Rosy cheeks */}
              <div className="absolute top-[40px] left-[5px] w-[12px] h-[8px] rounded-full bg-red-400 opacity-60"></div>
              <div className="absolute top-[40px] right-[5px] w-[12px] h-[8px] rounded-full bg-red-400 opacity-60"></div>
            </div>
          </div>

          {/* Sun rays */}
          <div className="absolute inset-[-30px] z-[-1]" style={{ transform: `rotate(${rotation}deg)` }}>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-[20px] h-[60px] bg-yellow-400 rounded-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-120px)`,
                  boxShadow: "0 0 20px rgba(250, 204, 21, 0.4)",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
