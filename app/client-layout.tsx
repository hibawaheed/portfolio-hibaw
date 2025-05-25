"use client"

import type React from "react"
import Navbar from "@/components/navbar"
import CursorEffect from "@/components/cursor-effect"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import Footer from "@/components/footer"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  // Update document title based on current path
  useEffect(() => {
    let pageTitle = "Home"

    switch (pathname) {
      case "/":
        pageTitle = "Home"
        break
      case "/about":
        pageTitle = "About"
        break
      case "/projects":
        pageTitle = "Projects"
        break
      case "/journal":
        pageTitle = "Journal"
        break
      case "/cv":
        pageTitle = "CV"
        break
      default:
        // For any other path, extract the last segment
        const pathSegment = pathname.split("/").filter(Boolean).pop()
        if (pathSegment) {
          // Capitalize first letter of path segment
          const formattedSegment = pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1)
          pageTitle = formattedSegment
        }
    }

    document.title = "Hibaw | " + pageTitle
  }, [pathname])

  return (
    <>
      <CursorEffect />
      <Navbar />
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  )
}
