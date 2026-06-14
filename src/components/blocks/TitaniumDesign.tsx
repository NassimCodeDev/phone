"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, Layers, Feather } from "lucide-react"

export function TitaniumDesign() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <section ref={ref} className="relative py-40 sm:py-56 w-full bg-[#050505] overflow-hidden flex flex-col items-center">
      {/* Precision ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-full flex flex-col items-center justify-center opacity-30 pointer-events-none">
        <div className="w-px h-[200px] bg-gradient-to-b from-transparent via-titanium-100 to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 w-full relative z-10 flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="flex-1 text-left">
          <motion.h4
             initial={{ opacity: 0, y: 10 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
             transition={{ duration: 0.8 }}
             className="text-titanium-400 font-semibold tracking-sf-display uppercase text-xs mb-4"
          >
            Design & Material
          </motion.h4>

          <motion.h3 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : { opacity: 0, y: 30, filter: "blur(10px)", scale: 0.95 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[48px] md:text-[64px] lg:text-[80px] leading-[0.95] font-semibold tracking-sf-display text-white mb-8"
          >
            {"Forged in ".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(5px)", y: 10 }}
                animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: "blur(5px)", y: 10 }}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.02), ease: [0.16, 1, 0.3, 1] }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br/> <span className="text-titanium-300">titanium.</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[20px] md:text-[22px] font-medium leading-[1.4] tracking-sf-text text-titanium-200 max-w-lg mb-12"
          >
            iPhone 17 Pro features a beautifully refined aerospace-grade titanium design. It’s incredibly strong, unexpectedly light, and delivers a stunning edge-to-edge viewing experience.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
             transition={{ duration: 1, delay: 0.7 }}
             className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-6 border-y border-titanium-800/50"
          >
             <div className="flex flex-col gap-2">
                <ShieldCheck className="w-6 h-6 text-titanium-400 mb-1" strokeWidth={1.5} />
                <span className="text-white font-semibold tracking-sf-text text-[15px]">Aerospace grade</span>
                <span className="text-titanium-400 text-[13px] font-medium tracking-sf-text">Class 5 Titanium</span>
             </div>
             <div className="flex flex-col gap-2">
                <Layers className="w-6 h-6 text-titanium-400 mb-1" strokeWidth={1.5} />
                <span className="text-white font-semibold tracking-sf-text text-[15px]">PVD Coating</span>
                <span className="text-titanium-400 text-[13px] font-medium tracking-sf-text">Precision finish</span>
             </div>
             <div className="flex flex-col gap-2">
                <Feather className="w-6 h-6 text-titanium-400 mb-1" strokeWidth={1.5} />
                <span className="text-white font-semibold tracking-sf-text text-[15px]">Ultra-light</span>
                <span className="text-titanium-400 text-[13px] font-medium tracking-sf-text">Pro-level thermal</span>
             </div>
          </motion.div>
        </div>

        {/* Macro Hardware Detail (Pure CSS Realism) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 25, rotateX: 10 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateY: 0, rotateX: 0 } : { opacity: 0, scale: 0.9, rotateY: 25, rotateX: 10 }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full aspect-square max-h-[500px] relative flex items-center justify-center group perspective-[1000px] pointer-events-none"
        >
          {/* Deep ambient macro glow */}
          <div className="absolute inset-0 rounded-full bg-titanium-600/10 mix-blend-screen blur-[40px]" />
          
          <div className="relative w-full max-w-[300px] h-[400px] overflow-hidden rounded-r-[60px] shadow-[-30px_0_100px_rgba(0,0,0,1)] border-t border-r border-b border-titanium-500/20 bg-[#111]">
             {/* The titanium block surface with noise texture */}
             <div className="absolute inset-0 bg-gradient-to-l from-titanium-700 via-titanium-600 to-[#080808] rounded-r-[60px] opacity-90" />
             
             {/* Fine procedural grain for titanium feel */}
             <div 
               className="absolute inset-0 opacity-[0.25] mix-blend-overlay"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
             />

             {/* Micro-brushed metallic texture stripes */}
             <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 1px, #FFF 1px, #FFF 2px)" }} />
             
             {/* Curved sweeping highlight on the edge */}
             <div className="absolute top-[-50%] right-0 w-[40px] h-[200%] bg-gradient-to-r from-transparent via-titanium-100 to-transparent rotate-[15deg] opacity-60 blur-[3px] shadow-[0_0_30px_rgba(255,255,255,0.7)]" />
             
             {/* The Screen void dropoff */}
             <div className="absolute left-0 top-0 w-[40%] h-full bg-gradient-to-l from-[#111] to-[#000] border-r border-black shadow-[10px_0_20px_rgba(0,0,0,0.9)]" />
             
             {/* Volume Button Extension */}
             <div className="absolute left-[-5px] top-[100px] w-[50%] h-[60px] bg-gradient-to-l from-titanium-500 via-titanium-400 to-titanium-700 rounded-lg shadow-[-10px_0_20px_rgba(0,0,0,0.8),_inset_2px_0_5px_rgba(255,255,255,0.4)] border border-titanium-400/50 flex flex-col justify-center gap-1 overflow-hidden z-20">
                {/* Button tactile gap */}
                <div className="w-full h-[1px] bg-black/80 shadow-[0_1px_1px_rgba(255,255,255,0.2)]" />
                {/* Highlight pass */}
                <div className="absolute top-0 right-[20%] w-[10px] h-[200%] bg-white/40 blur-[2px] rotate-12" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
