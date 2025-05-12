"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Sparkles } from "lucide-react"

export function WelcomeBanner() {
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; color: string; speed: number }>
  >([])

  // Generate particles
  useEffect(() => {
    const colors = ["#f9fafb", "#e0f2fe", "#f0abfc", "#fef3c7", "#a7f3d0"]
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.2 + 0.1,
    }))
    setParticles(newParticles)

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y - particle.speed > 0 ? particle.y - particle.speed : 100,
          x: particle.y - particle.speed <= 0 ? Math.random() * 100 : particle.x,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Track mouse position for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 text-white overflow-hidden relative"
      style={{
        boxShadow: "0 20px 40px rgba(79, 70, 229, 0.2)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Decorative circles */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-xl"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-xl"></div>

      <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
        <motion.div
          className="z-10 mb-8 md:mb-0"
          style={{
            transform: isHovering
              ? `perspective(1000px) rotateX(${mousePosition.y * -3}deg) rotateY(${mousePosition.x * 3}deg)`
              : "none",
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="flex items-center mb-2">
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="mr-2"
            >
              <Sparkles className="h-6 w-6 text-yellow-300" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Welcome Syed
            </motion.h1>
          </div>

          <motion.p
            className="text-base md:text-lg text-purple-100 mb-8 max-w-md font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Education is the passport to the future, So Learn more & more
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              href="/courses"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/30 hover:from-cyan-400 hover:to-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Browse Courses
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="ml-2"
              >
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full md:w-2/5 h-48 md:h-64"
          style={{
            transform: isHovering
              ? `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)`
              : "none",
            transition: "transform 0.2s ease-out",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Modern education items illustration */}
          <div className="absolute top-0 right-0 w-full h-full">
            {/* Notebook */}
            <motion.div
              className="absolute top-4 right-8 w-20 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-md shadow-lg"
              animate={{ rotate: [2, 5, 2], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="absolute left-3 top-3 w-12 h-1 bg-white/30 rounded-full"></div>
              <div className="absolute left-3 top-6 w-10 h-1 bg-white/30 rounded-full"></div>
              <div className="absolute left-3 top-9 w-14 h-1 bg-white/30 rounded-full"></div>
              <div className="absolute left-0 h-full w-2 bg-orange-600 rounded-l-md"></div>
            </motion.div>

            {/* Ruler */}
            <motion.div
              className="absolute top-2 right-2 w-28 h-4 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-md shadow-lg"
              animate={{ rotate: [-8, -12, -8], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="flex h-full items-center justify-around px-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="w-0.5 h-2 bg-white/50"></div>
                ))}
              </div>
            </motion.div>

            {/* Pencil */}
            <motion.div
              className="absolute top-16 right-24 w-20 h-3 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full shadow-lg overflow-hidden"
              animate={{ rotate: [35, 40, 35], x: [0, -3, 0], y: [0, 3, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="absolute right-0 w-4 h-3 bg-pink-500 rounded-sm"></div>
              <div className="absolute right-4 w-1 h-3 bg-gray-700"></div>
              <div className="absolute left-0 w-3 h-3 bg-yellow-600 rounded-full"></div>
            </motion.div>

            {/* Apple */}
            <motion.div
              className="absolute top-2 right-32 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg"
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute -top-2 right-3 w-2 h-4 bg-green-500 rounded-sm"
                animate={{ rotate: [30, 45, 30] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              ></motion.div>
              <div className="absolute top-2 right-2 w-2 h-1 bg-white/30 rounded-full"></div>
            </motion.div>

            {/* Paint palette */}
            <motion.div
              className="absolute bottom-8 right-12 w-20 h-10 bg-gradient-to-br from-yellow-100 to-amber-200 rounded-full overflow-hidden shadow-lg"
              animate={{ rotate: [-5, 5, -5], y: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="absolute top-1 left-2 w-3 h-3 bg-red-500 rounded-full shadow-inner"></div>
              <div className="absolute top-1 left-7 w-3 h-3 bg-blue-500 rounded-full shadow-inner"></div>
              <div className="absolute top-1 left-12 w-3 h-3 bg-green-500 rounded-full shadow-inner"></div>
              <div className="absolute top-5 left-4 w-3 h-3 bg-yellow-500 rounded-full shadow-inner"></div>
              <div className="absolute top-5 left-9 w-3 h-3 bg-purple-500 rounded-full shadow-inner"></div>
              <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-amber-300 rounded-full"></div>
            </motion.div>

            {/* Protractor */}
            <motion.div
              className="absolute bottom-4 right-28 w-16 h-8 border-3 border-teal-300 rounded-t-full shadow-lg overflow-hidden backdrop-blur-sm bg-teal-300/30"
              animate={{ rotate: [0, -5, 0], x: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="flex justify-around absolute bottom-0 w-full">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-0.5 h-2 bg-teal-600"></div>
                ))}
              </div>
            </motion.div>

            {/* Calculator */}
            <motion.div
              className="absolute bottom-16 right-4 w-12 h-16 bg-gradient-to-br from-gray-800 to-gray-700 rounded-md shadow-lg"
              animate={{ rotate: [0, 3, 0], y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="absolute top-2 left-2 right-2 h-4 bg-gray-200 rounded-sm"></div>
              <div className="grid grid-cols-2 gap-1 absolute top-8 left-2 right-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="w-3 h-2 bg-gray-500 rounded-sm"></div>
                ))}
              </div>
            </motion.div>

            {/* Book */}
            <motion.div
              className="absolute top-28 right-16 w-16 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-sm shadow-lg overflow-hidden"
              animate={{ rotate: [-5, -8, -5], y: [0, 5, 0] }}
              transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-700"></div>
              <div className="absolute left-4 top-3 w-8 h-1 bg-white/30 rounded-full"></div>
              <div className="absolute left-4 top-6 w-6 h-1 bg-white/30 rounded-full"></div>
            </motion.div>

            {/* Decorative elements */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Glowing effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
    </motion.div>
  )
} 