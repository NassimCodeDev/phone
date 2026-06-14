"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { BatteryCharging, Flame } from "lucide-react"

export function Endurance() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-15%" })

  return (
    <section ref={ref} className="relative py-32 sm:py-48 w-full bg-[#050505] overflow-hidden flex flex-col items-center border-t border-titanium-800/50">
      
      {/* Structural typography reveal */}
      <div className="max-w-[800px] mx-auto px-4 w-full relative z-20 flex flex-col items-center text-center">
        <motion.h4
             initial={{ opacity: 0, y: 10 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
             transition={{ duration: 0.8 }}
             className="text-titanium-400 font-semibold tracking-sf-display uppercase text-xs mb-6"
        >
          Power & Endurance
        </motion.h4>

        <motion.h3 
            initial={{ opacity: 0, y: 40, filter: "blur(15px)", scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : { opacity: 0, y: 40, filter: "blur(15px)", scale: 0.95 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[54px] md:text-[80px] lg:text-[100px] font-semibold tracking-sf-display text-white mb-8 leading-[0.9]"
        >
          {"All day. ".split("").map((char, i) => (
             <motion.span
                key={`e-1-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.3 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
             >
                {char === " " ? "\u00A0" : char}
             </motion.span>
          ))}
          <br className="hidden sm:block" />
          {"And then some.".split("").map((char, i) => (
             <motion.span
                key={`e-2-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.6 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
             >
                {char === " " ? "\u00A0" : char}
             </motion.span>
          ))}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[20px] md:text-[24px] font-medium leading-[1.3] tracking-sf-text text-titanium-300 max-w-2xl mb-16"
        >
          A completely redesigned internal thermal architecture delivers up to 20% better sustained performance. Combined with an optimally stacked battery logic board, efficiency has never looked this good.
        </motion.p>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row gap-8 relative z-10">
        
        {/* Thermal Architecture Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 bg-gradient-to-b from-titanium-900/50 to-black border border-titanium-800 rounded-[40px] p-10 overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3a0a0a]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 flex flex-col items-start gap-4 mb-16">
            <div className="w-12 h-12 rounded-full bg-titanium-800/80 flex items-center justify-center text-[#ff4d4d]">
               <Flame className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-3xl font-semibold text-white mb-2 tracking-sf-display">Thermal Substructure</h4>
              <p className="text-titanium-300 text-lg font-medium tracking-sf-text">Graphite-clad intelligence.</p>
            </div>
          </div>

          <div className="relative h-48 w-full flex items-center justify-center pointer-events-none perspective-[1000px]">
             {/* Abstract Thermal Layers */}
             <div className="relative w-48 h-48 transform-gpu rotateX-45 -rotateY-10 group-hover:rotateX-30 transition-transform duration-1000 ease-out">
                {/* Board layer */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute inset-0 bg-titanium-800 rounded-2xl border border-titanium-600 shadow-xl"
                />
                {/* Graphite layer */}
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={isInView ? { y: -20, opacity: 1 } : { y: 10, opacity: 0 }}
                  transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-x-2 inset-y-4 bg-gradient-to-br from-[#2a2a2a] to-[#111] rounded-xl border border-titanium-500 shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-md"
                >
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay" />
                </motion.div>
                {/* Heat dissipation glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-orange-500/20 to-red-500/0 translate-y-[-20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             </div>
          </div>
        </motion.div>

        {/* Battery Capacity Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 bg-gradient-to-b from-titanium-900/50 to-black border border-titanium-800 rounded-[40px] p-10 overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-[#0a3a14]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 flex flex-col items-start gap-4 mb-16">
            <div className="w-12 h-12 rounded-full bg-titanium-800/80 flex items-center justify-center text-[#34c759]">
               <BatteryCharging className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-3xl font-semibold text-white mb-2 tracking-sf-display">L-Shaped Cell</h4>
              <p className="text-titanium-300 text-lg font-medium tracking-sf-text">Up to 33 hours video playback.</p>
            </div>
          </div>

          <div className="relative h-48 w-full flex items-center justify-center pointer-events-none">
             {/* Abstract Battery Fill Graphic */}
             <div className="relative w-40 h-20 rounded-xl border-2 border-titanium-600 p-1 flex items-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] bg-black">
                {/* The Battery Node */}
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-6 bg-titanium-600 rounded-r-md" />
                
                {/* The Fill Animation */}
                <motion.div 
                  initial={{ width: "20%" }}
                  animate={isInView ? { width: ["20%", "100%", "100%"] } : { width: "20%" }}
                  transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                  className="h-full bg-gradient-to-r from-[#34c759] to-[#3df06e] rounded-lg shadow-[0_0_20px_rgba(52,199,89,0.5)] relative overflow-hidden"
                >
                   <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </motion.div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
