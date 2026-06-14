"use client"

import * as React from "react"
import { motion, useScroll, useTransform, cubicBezier, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ChevronRight } from "lucide-react"

export function Hero() {
  const { scrollY } = useScroll()
  
  // Advanced cinematic choreography
  const customEasing = cubicBezier(0.16, 1, 0.3, 1)
  
  // Title pushes back and fades out as you scroll down
  const yText = useTransform(scrollY, [0, 800], [0, -150])
  const opacityText = useTransform(scrollY, [0, 400], [1, 0])
  const filterBlurText = useTransform(scrollY, [0, 600], ["blur(0px)", "blur(20px)"])
  const scaleText = useTransform(scrollY, [0, 600], [1, 0.9])
  
  // The product proxy scales up and dominates the screen
  const scaleImage = useTransform(scrollY, [0, 800], [1, 1.15])
  const opacityImage = useTransform(scrollY, [0, 1000], [1, 0])
  
  // Cinematic light bloom
  const lightBloomOpacity = useTransform(scrollY, [0, 400, 800], [0, 0.8, 0])

  // Mouse physical interaction
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    
    // Normalize coordinates roughly -1 to 1 based on screen size
    mouseX.set((clientX / innerWidth) * 2 - 1)
    mouseY.set((clientY / innerHeight) * 2 - 1)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Springs for smooth interpolated rotation
  const springConfig = { damping: 30, stiffness: 100, mass: 1 }
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), springConfig)
  
  // Dynamic glare based on rotation
  const glareX = useTransform(mouseX, [-1, 1], [100, -100])
  const glareY = useTransform(mouseY, [-1, 1], [100, -100])

  return (
    <section 
      className="relative h-[150svh] w-full mt-0 overflow-hidden bg-black flex flex-col items-center justify-start perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Background radial gradient to support the hardware */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          style={{ opacity: lightBloomOpacity }}
          className="w-[80vw] h-[80vw] rounded-full bg-titanium-100/5 blur-[150px] mix-blend-screen"
        />
      </div>

      <div className="sticky top-0 h-[100svh] w-full flex flex-col items-center overflow-hidden">
        {/* Title Lockup */}
        <motion.div 
          style={{ y: yText, opacity: opacityText, filter: filterBlurText, scale: scaleText }}
          className="relative z-30 mt-[20vh] flex flex-col items-center text-center px-4"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-titanium-300 font-semibold uppercase text-xs mb-6 tracking-sf-display"
          >
            Nova 17 Pro
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[64px] sm:text-[80px] md:text-[104px] font-semibold tracking-sf-display text-white leading-[0.95] whitespace-nowrap mb-8"
          >
            {"A monumental ".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1, delay: 0.3 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br className="sm:hidden" />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-br from-white via-titanium-100 to-titanium-400 inline-block"
              initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              leap.
            </motion.span>
          </motion.h1>

          <motion.div
             initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
             transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
             className="flex flex-col sm:flex-row items-center gap-6 mt-8"
          >
            <Button variant="primary" className="h-12 rounded-full px-8 text-[15px] font-semibold tracking-sf-text shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-500">
              Pre-order
            </Button>
            <Button variant="link" className="group text-[17px] gap-1 text-white hover:text-titanium-100 font-medium flex items-center tracking-sf-text">
              Watch the film
              <ChevronRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Sculptural Hardware Proxy (Hyper-Realistic CSS Architecture) */}
        <motion.div 
          style={{ scale: scaleImage, opacity: opacityImage }}
          className="absolute text-center bottom-[-5vh] left-0 right-0 z-20 flex items-center justify-center transform-gpu perspective-[2000px]"
        >
          <motion.div 
            initial={{ opacity: 0, y: 200, scale: 0.95, rotateX: 25 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            style={{ rotateX, rotateY }}
            transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[360px] h-[750px] sm:w-[420px] sm:h-[850px] rounded-[60px] sm:rounded-[70px] flex flex-col items-center justify-start group shadow-[0_-20px_100px_rgba(0,0,0,0.8),_0_0_80px_rgba(255,255,255,0.05)] transform-style-preserve-3d"
          >
             {/* Titanium Outer Casing Rail */}
             <div className="absolute inset-[-4px] sm:inset-[-5px] rounded-[64px] sm:rounded-[75px] bg-gradient-to-br from-titanium-300 via-titanium-600 to-black shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_inset_0_-4px_10px_rgba(0,0,0,0.8)] border border-titanium-400/30" />
             
             {/* Action & Volume Buttons */}
             <div className="absolute left-[-8px] top-[150px] w-[6px] h-[30px] bg-gradient-to-r from-titanium-500 to-titanium-800 rounded-l-sm shadow-[-2px_0_5px_rgba(0,0,0,0.5)] border-y border-l border-titanium-400/20" />
             <div className="absolute left-[-8px] top-[210px] w-[6px] h-[60px] bg-gradient-to-r from-titanium-500 to-titanium-800 rounded-l-sm shadow-[-2px_0_5px_rgba(0,0,0,0.5)] border-y border-l border-titanium-400/20" />
             <div className="absolute left-[-8px] top-[290px] w-[6px] h-[60px] bg-gradient-to-r from-titanium-500 to-titanium-800 rounded-l-sm shadow-[-2px_0_5px_rgba(0,0,0,0.5)] border-y border-l border-titanium-400/20" />
             
             {/* Power Button */}
             <div className="absolute right-[-8px] top-[230px] w-[6px] h-[80px] bg-gradient-to-l from-titanium-500 to-titanium-800 rounded-r-sm shadow-[2px_0_5px_rgba(0,0,0,0.5)] border-y border-r border-titanium-400/20" />

             {/* Inner Bezel Black Ring */}
             <div className="absolute inset-0 rounded-[60px] sm:rounded-[70px] bg-black border border-[#111] shadow-[inset_0_0_0_6px_#000]" />
             
             {/* The OLED Glass Screen */}
             <div className="absolute inset-[6px] sm:inset-[8px] rounded-[54px] sm:rounded-[62px] bg-[#020202] overflow-hidden flex flex-col items-center pt-4 sm:pt-5 border border-white/5 relative shadow-[inset_0_0_15px_rgba(0,0,0,1)]">
                
                {/* Immersive Screen Glow - simulates screen emitting a deep void light */}
                <div className="absolute inset-0 bg-gradient-to-b from-titanium-900/40 via-transparent to-transparent opacity-50" />
                
                {/* Dynamic Island with Realism Optics */}
                <div className="relative z-20 w-[110px] sm:w-[130px] h-[32px] sm:h-[36px] rounded-full bg-[#000000] shadow-[0_4px_15px_rgba(0,0,0,0.8),_inset_0_0_0_1px_rgba(255,255,255,0.03)] flex items-center justify-between px-2 sm:px-3 overflow-hidden">
                   
                   {/* Front Camera Lens */}
                   <div className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] rounded-full bg-[#0a0a0c] border border-white/5 shadow-[inset_0_0_5px_rgba(255,255,255,0.1)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#141528] to-[#293c68] opacity-80" />
                   </div>
                   
                   {/* TrueDepth Sensor Arrays */}
                   <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,0,0,0.2)]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]" />
                   </div>
                   
                   {/* Island Glass Glare dynamically linked to mouse */}
                   <motion.div 
                      style={{ x: glareX, y: glareY }}
                      className="absolute top-1/2 left-1/2 -mt-[75%] -ml-[75%] w-[150%] h-[150%] bg-gradient-to-br from-white/20 to-transparent rotate-[30deg] pointer-events-none" 
                   />
                </div>
                
                {/* Sweeping Glass Reflection on the screen driven by mouse position */}
                <motion.div 
                   style={{ 
                     x: useTransform(mouseX, [-1, 1], [-50, 50]),
                     y: useTransform(mouseY, [-1, 1], [-100, 100])
                   }}
                   className="absolute top-0 left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-white/[0.04] via-white/[0.12] to-transparent rotate-[45deg] transition-transform duration-1000 ease-out pointer-events-none"
                />
             </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
