"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

// Fade in animation from bottom - smoother
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Slide in from left - smoother
export function SlideInLeft({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Slide in from right - smoother
export function SlideInRight({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Staggered children animation - smoother
export function StaggerChildren({
  children,
  delayStep = 0.1,
  className = "",
}: {
  children: ReactNode
  delayStep?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: delayStep,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// Child item for staggered animations - smoother
export function StaggerItem({
  children,
  direction = "y",
  className = "",
}: {
  children: ReactNode
  direction?: "x" | "y"
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          [direction]: direction === "y" ? 10 : -15,
        },
        visible: {
          opacity: 1,
          [direction]: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// Scroll animation component - smoother
export function ScrollAnimation({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Text reveal animation - smoother
export function TextReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smoother motion
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Typing animation for code-like text - smoother
export function TypewriterText({
  text,
  delay = 0,
  className = "",
}: {
  text: string
  delay?: number
  className?: string
}) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.02,
            delay: delay + index * 0.03,
            ease: "easeIn",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}
