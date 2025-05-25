"use client"

import { useState, useEffect } from "react"

export default function DuckDisplay({ className = "h-96 w-96" }) {
  const [bobPosition, setBobPosition] = useState(0)

  // Simple bobbing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBobPosition((prev) => Math.sin(Date.now() / 500) * 10)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div
        className="relative transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(${bobPosition}px)` }}
      >
        {/* Cute yellow duck with orange beak */}
        <div className="relative w-[150px] h-[150px]">
          {/* Duck body - yellow circle */}
          <div className="absolute w-[150px] h-[150px] rounded-full bg-yellow-400 shadow-lg"></div>

          {/* Duck eyes */}
          <div className="absolute top-[50px] left-[40px] w-[15px] h-[15px] rounded-full bg-black"></div>
          <div className="absolute top-[50px] left-[70px] w-[15px] h-[15px] rounded-full bg-black"></div>

          {/* Duck beak */}
          <div className="absolute top-[70px] left-[50px] w-[30px] h-[20px] rounded-[50%] bg-orange-500"></div>

          {/* Duck wings */}
          <div className="absolute top-[80px] left-[10px] w-[30px] h-[40px] rounded-full bg-yellow-500"></div>
          <div className="absolute top-[80px] right-[10px] w-[30px] h-[40px] rounded-full bg-yellow-500"></div>

          {/* Duck top feathers */}
          <div className="absolute top-[15px] left-[60px] w-[30px] h-[20px] rounded-full bg-yellow-500 transform -rotate-12"></div>
          <div className="absolute top-[10px] left-[80px] w-[30px] h-[20px] rounded-full bg-yellow-500 transform rotate-12"></div>
        </div>
      </div>
    </div>
  )
}
