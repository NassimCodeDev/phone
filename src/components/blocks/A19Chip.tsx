"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Cpu, Zap, Activity } from "lucide-react"

export function A19Chip() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-15%" })

  return (
    <section ref={ref} className="relative py-32 sm:py-48 w-full bg-[#030303] overflow-hidden flex flex-col items-center">
      
      {/* Structural typography reveal */}
      <div className="max-w-[800px] mx-auto px-4 w-full relative z-20 flex flex-col items-center text-center">
        <motion.h4
             initial={{ opacity: 0, y: 10 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
             transition={{ duration: 0.8 }}
             className="text-titanium-400 font-semibold tracking-sf-display uppercase text-xs mb-6 flex items-center justify-center gap-2"
        >
          <Cpu className="w-4 h-4" /> Silicon Architecture
        </motion.h4>

        <motion.h3 
            initial={{ opacity: 0, y: 40, filter: "blur(15px)", scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : { opacity: 0, y: 40, filter: "blur(15px)", scale: 0.95 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[100px] font-semibold tracking-sf-display text-white mb-8 leading-[0.9]"
        >
          {"A19 Pro chip.".split("").map((char, i) => (
             <motion.span
                key={`chip-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.3 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
             >
                {char === " " ? "\u00A0" : char}
             </motion.span>
          ))}
          <br className="hidden sm:block" />
          <motion.span 
             initial={{ opacity: 0, filter: "blur(10px)" }}
             animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
             transition={{ duration: 1.5, delay: 0.8 }}
             className="text-transparent bg-clip-text bg-gradient-to-br from-white via-titanium-200 to-titanium-500 inline-block mt-2"
          >
            Mind-bending.
          </motion.span>
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[20px] md:text-[24px] font-medium leading-[1.3] tracking-sf-text text-titanium-300 max-w-2xl mb-12"
        >
          A monumental leap in graphics performance. The biggest redesign in the history of Apple GPUs creates an entirely new class of hardware-accelerated ray tracing.
        </motion.p>
      </div>

      <div className="w-full max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row gap-8 relative z-10 mt-16">
        
        {/* Chip Embodiment proxy */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.98 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 aspect-square md:aspect-auto md:h-[400px] relative flex items-center justify-center transform-gpu group perspective-[1000px]"
        >
           <div className="absolute inset-0 bg-titanium-500/5 blur-[50px] rounded-full mix-blend-screen pointer-events-none" />
           
           <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-gradient-to-tr from-[#020202] via-[#111] to-[#0a0a0c] border border-titanium-700/50 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1),_0_20px_50px_rgba(0,0,0,1)] flex items-center justify-center transform-gpu group-hover:rotateX-10 group-hover:rotateY-10 transition-transform duration-[1500ms] ease-out">
              <div className="absolute inset-2 border border-titanium-600/20 rounded-2xl opacity-50" />
              <div className="absolute inset-4 border border-titanium-600/10 rounded-xl opacity-30" />
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-black rounded-lg border border-titanium-600 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(90deg, #333 1px, transparent 1px), linear-gradient(#333 1px, transparent 1px)", backgroundSize: "4px 4px" }} />
                 <h4 className="text-white font-bold tracking-tighter text-3xl sm:text-4xl z-10 drop-shadow-md">A19</h4>
              </div>
           </div>
        </motion.div>

        {/* Chip Specs */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col justify-center gap-10"
        >
           <div className="flex gap-4 items-start">
              <div className="w-12 h-12 shrink-0 rounded-full bg-titanium-900 border border-titanium-800 flex items-center justify-center mt-1">
                 <Zap className="w-5 h-5 text-titanium-200" />
              </div>
              <div>
                 <h5 className="text-2xl font-semibold text-white mb-2">Up to 20x faster.</h5>
                 <p className="text-titanium-300 font-medium">Hardware-accelerated ray tracing delivers incredibly realistic gaming light arrays.</p>
              </div>
           </div>
           
           <div className="flex gap-4 items-start">
              <div className="w-12 h-12 shrink-0 rounded-full bg-titanium-900 border border-titanium-800 flex items-center justify-center mt-1">
                 <Activity className="w-5 h-5 text-titanium-200" />
              </div>
              <div>
                 <h5 className="text-2xl font-semibold text-white mb-2">16-core Neural Engine.</h5>
                 <p className="text-titanium-300 font-medium">Powering advanced machine learning for computational photography and intelligence.</p>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  )
}
