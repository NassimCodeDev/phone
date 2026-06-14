"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Aperture, Film } from "lucide-react"

export function CameraSystem() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-15%" })

  return (
    <section ref={ref} className="relative py-32 sm:py-48 w-full bg-black overflow-hidden flex flex-col items-center">
      
      {/* Structural typography reveal */}
      <div className="max-w-[800px] mx-auto px-4 w-full relative z-20 flex flex-col items-center text-center">
        <motion.h4
             initial={{ opacity: 0, y: 10 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
             transition={{ duration: 0.8 }}
             className="text-titanium-400 font-semibold tracking-sf-display uppercase text-xs mb-6"
        >
          Pro Camera System
        </motion.h4>

        <motion.h3 
            initial={{ opacity: 0, y: 40, filter: "blur(15px)", scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : { opacity: 0, y: 40, filter: "blur(15px)", scale: 0.95 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[64px] md:text-[80px] lg:text-[120px] font-semibold tracking-sf-display text-white mb-8 leading-[0.9]"
        >
          {"Capture ".split("").map((char, i) => (
             <motion.span
                key={`c-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.3 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
             >
                {char}
             </motion.span>
          ))}
          <br className="hidden sm:block" />
          <motion.span 
             initial={{ opacity: 0, filter: "blur(10px)" }}
             animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
             transition={{ duration: 1.5, delay: 0.8 }}
             className="text-transparent bg-clip-text bg-gradient-to-br from-white via-titanium-200 to-titanium-500 inline-block"
          >
            reality.
          </motion.span>
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[20px] md:text-[24px] font-medium leading-[1.3] tracking-sf-text text-titanium-300 max-w-2xl mb-12"
        >
          A camera system so advanced, it feels like an unfair advantage. Massive engineering breakthroughs co-designed to give you unprecedented creative control.
        </motion.p>

        {/* Floating Detail Separator */}
        <motion.div
           initial={{ scaleX: 0, opacity: 0 }}
           animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
           transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
           className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-titanium-400 to-transparent mb-24"
        />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative z-10">
        
        {/* Lens Interface Architecture - Main */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.98 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-titanium-900/40 backdrop-blur-3xl rounded-[40px] p-10 md:p-14 border-[0.5px] border-titanium-700/50 flex-1 relative overflow-hidden group shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-titanium-800/50 border border-titanium-600/50 flex items-center justify-center text-titanium-200 mb-2">
               <Aperture className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-3xl font-semibold text-white mb-2 tracking-sf-display">Main Sensor.</h4>
              <p className="text-titanium-300 text-lg font-medium tracking-sf-text leading-tight">Breathtaking detail in every shot.</p>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24 w-48 h-48 sm:w-60 sm:h-60 mx-auto relative flex items-center justify-center transform-gpu group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1] pointer-events-none">
            {/* The Raised Glass Housing */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1e] to-[#0a0a0c] rounded-[48px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_30px_30px_60px_rgba(0,0,0,0.8),_-10px_-10px_20px_rgba(255,255,255,0.02)] border border-[#2c2c2e]/50" />
            
            {/* Camera Setup Container */}
            <div className="relative w-full h-full">
               {/* Top Left Lens */}
               <div className="absolute top-[12%] left-[12%] w-[38%] h-[38%] rounded-full border-[1.5px] border-titanium-600 bg-gradient-to-br from-[#050505] to-[#1a1a1c] shadow-[inset_0_5px_10px_rgba(0,0,0,1),_0_5px_15px_rgba(0,0,0,0.6)] flex items-center justify-center">
                  <div className="w-[65%] h-[65%] rounded-full bg-black border border-[#111] flex items-center justify-center relative overflow-hidden">
                     {/* Animated Volumetric Bloom (Chromatic) */}
                     <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/10 mix-blend-screen blur-[5px]"
                     />
                     <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-[#2a4563]/40 via-transparent to-transparent rotate-[-15deg] mix-blend-screen pointer-events-none" />
                     <div className="w-[30%] h-[30%] rounded-full bg-[#050505] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
                  </div>
                  <div className="absolute -inset-[1px] rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-[30deg] pointer-events-none blur-[1px]" />
               </div>

               {/* Bottom Left Lens */}
               <div className="absolute bottom-[12%] left-[12%] w-[38%] h-[38%] rounded-full border-[1.5px] border-titanium-600 bg-gradient-to-br from-[#050505] to-[#1a1a1c] shadow-[inset_0_5px_10px_rgba(0,0,0,1),_0_5px_15px_rgba(0,0,0,0.6)] flex items-center justify-center">
                  <div className="w-[65%] h-[65%] rounded-full bg-black border border-[#111] flex items-center justify-center relative overflow-hidden">
                     <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-[#2a4563]/40 via-transparent to-transparent rotate-[-15deg] mix-blend-screen pointer-events-none" />
                     <div className="w-[30%] h-[30%] rounded-full bg-[#050505] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
                  </div>
                  <div className="absolute -inset-[1px] rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-[30deg] pointer-events-none blur-[1px]" />
               </div>

               {/* Middle Right Lens */}
               <div className="absolute top-[50%] right-[12%] -translate-y-1/2 w-[38%] h-[38%] rounded-full border-[1.5px] border-titanium-600 bg-gradient-to-br from-[#050505] to-[#1a1a1c] shadow-[inset_0_5px_10px_rgba(0,0,0,1),_0_5px_15px_rgba(0,0,0,0.6)] flex items-center justify-center z-10">
                  <div className="w-[65%] h-[65%] rounded-full bg-black border border-[#111] flex items-center justify-center relative overflow-hidden">
                     <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent mix-blend-screen blur-[4px]"
                     />
                     <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-[#3e2c54]/40 via-transparent to-transparent rotate-[-15deg] mix-blend-screen pointer-events-none" />
                     <div className="w-[30%] h-[30%] rounded-full bg-[#050505] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
                  </div>
                  <div className="absolute -inset-[1px] rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-[30deg] pointer-events-none blur-[1px]" />
               </div>

               {/* LiDAR Scanner / Flash Arrays */}
               <div className="absolute top-[20%] right-[25%] w-[15%] h-[15%] rounded-full bg-gradient-to-b from-[#111] to-[#000] border border-[#333] shadow-[inset_0_2px_4px_rgba(0,0,0,1)] flex items-center justify-center">
                  <div className="w-[40%] h-[40%] rounded-full bg-[#1a1a1c]" />
               </div>
               <div className="absolute bottom-[20%] right-[25%] w-[15%] h-[15%] rounded-full bg-[#fdf5e6] opacity-90 shadow-[0_0_15px_rgba(253,245,230,0.8)] flex items-center justify-center" />
               <div className="absolute bottom-[20%] right-[25%] w-[15%] h-[15%] rounded-full border-[2px] border-titanium-500/30 blur-[0.5px]" />
            </div>
          </div>
        </motion.div>

        {/* Video Interface Architecture */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.98 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-titanium-900/40 backdrop-blur-3xl rounded-[40px] p-10 md:p-14 border-[0.5px] border-titanium-700/50 flex-1 relative overflow-hidden group shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
        >
          <div className="relative z-10 flex flex-col items-start gap-4">
             <div className="w-12 h-12 rounded-full bg-titanium-800/50 border border-titanium-600/50 flex items-center justify-center text-titanium-200 mb-2">
                <Film className="w-6 h-6" strokeWidth={1.5} />
             </div>
             <div>
               <h4 className="text-3xl font-semibold text-white mb-2 tracking-tight">Pro Video.</h4>
               <p className="text-titanium-300 text-lg font-medium leading-tight">Hollywood in your pocket.</p>
             </div>
          </div>
          
          <div className="mt-20 sm:mt-28 w-40 h-40 sm:w-56 sm:h-56 rounded-full border border-titanium-800 mx-auto bg-gradient-to-br from-[#121215] to-[#040404] relative flex items-center justify-center overflow-hidden transform-gpu group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1] shadow-[inset_0_10px_30px_rgba(0,0,0,0.5)]">
             
             {/* Waveform abstraction for video capturing logic */}
             <div className="flex items-center gap-1 sm:gap-2">
               {[...Array(7)].map((_, i) => (
                 <motion.div 
                   key={i}
                   animate={{ height: ["20%", "80%", "20%"] }}
                   transition={{ 
                     duration: 1.5, 
                     repeat: Infinity, 
                     ease: "easeInOut",
                     delay: i * 0.1
                   }}
                   className="w-1 sm:w-1.5 bg-gradient-to-t from-titanium-500 to-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                 />
               ))}
             </div>
             
             {/* HUD crosshairs */}
             <div className="absolute inset-6 border-[0.5px] border-white/5 pointer-events-none">
                <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-white/20 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-white/20 -translate-x-1/2 translate-y-1/2" />
                <div className="absolute left-0 top-1/2 h-0.5 w-2 bg-white/20 -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute right-0 top-1/2 h-0.5 w-2 bg-white/20 -translate-y-1/2 translate-x-1/2" />
             </div>
             
          </div>
        </motion.div>
      </div>
    </section>
  )
}
