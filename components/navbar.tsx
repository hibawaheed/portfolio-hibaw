"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Journal", path: "/journal" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Function to check if a path is active (exact match or sub-path)
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300",
        scrolled ? "border-gray-800 bg-gray-950/90" : "border-transparent bg-transparent",
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-teal-400">
          <motion.span
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            baw
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex rounded-full border border-gray-800 bg-gray-900/80 px-4 py-1">
          {navItems.map((item, index) => {
            const active = isActive(item.path)

            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.path}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium transition-colors",
                    active ? "text-[#4afa80]" : "text-gray-300 hover:text-white",
                  )}
                >
                  {item.name}
                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-[#4afa80] shadow-glow"
                      transition={{ duration: 0.3 }}
                      style={{ boxShadow: "0 0 8px #4afa80, 0 0 12px #4afa80" }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="flex md:hidden items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-800 bg-gray-950/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto py-3 px-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => {
                  const active = isActive(item.path)

                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                      <Link
                        href={item.path}
                        className={cn(
                          "px-3 py-3 rounded-md text-base font-medium transition-colors block",
                          active
                            ? "bg-gray-800/50 text-[#4afa80]"
                            : "text-gray-300 hover:bg-gray-800/30 hover:text-white",
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
