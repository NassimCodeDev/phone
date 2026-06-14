"use client"

import * as React from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Sparkles } from "lucide-react"

export function AppleIntelligence() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-15%" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section ref={ref} className="relative py-40 sm:py-56 w-full bg-[#020202] overflow-hidden flex flex-col items-center">
      
      {/* Siri / Apple Intelligence Organic Mesh Mesh */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] mix-blend-screen"
        >
          {/* Organic blobs */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#FF7A00] rounded-full mix-blend-screen blur-[80px] opacity-70" />
          <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-[#FF004D] rounded-full mix-blend-screen blur-[80px] opacity-50" />
          <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-[#5A00FF] rounded-full mix-blend-screen blur-[100px] opacity-60" />
          <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-[#00D1FF] rounded-full mix-blend-screen blur-[90px] opacity-50" />
        </motion.div>
      </div>

      {/* Structural typography reveal */}
      <div className="max-w-[800px] mx-auto px-4 w-full relative z-20 flex flex-col items-center text-center">
        <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
             transition={{ duration: 0.8, type: "spring" }}
             className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-md"
        >
          <Sparkles className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        </motion.div>

        <motion.h4
             initial={{ opacity: 0, y: 10 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-white font-semibold tracking-sf-display uppercase text-xs mb-8 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md"
        >
          Apple Intelligence
        </motion.h4>

        <motion.h3 
            initial={{ opacity: 0, y: 40, filter: "blur(15px)", scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : { opacity: 0, y: 40, filter: "blur(15px)", scale: 0.95 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[56px] md:text-[80px] lg:text-[104px] font-semibold tracking-sf-display text-white mb-8 leading-[0.9] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        >
          {"A new era of ".split("").map((char, i) => (
             <motion.span
                key={`ai-1-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.4 + (i * 0.02), ease: [0.16, 1, 0.3, 1] }}
             >
                {char === " " ? "\u00A0" : char}
             </motion.span>
          ))}
          <br className="hidden sm:block" />
          {"intelligence.".split("").map((char, i) => (
             <motion.span
                key={`ai-2-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.7 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
             >
                {char}
             </motion.span>
          ))}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[22px] md:text-[26px] font-medium leading-[1.3] tracking-sf-text text-white/80 max-w-2xl mb-12 drop-shadow-md"
        >
          Built right into your iPhone. It helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, nobody else can access your data—not even Apple.
        </motion.p>
      </div>

      {/* Floating UI Elements Parallax */}
      <div className="w-full max-w-[1000px] mx-auto px-4 mt-20 relative h-[400px] z-10 flex items-center justify-center pointer-events-none">
         
         {/* Left Card - Writing Tools */}
         <motion.div 
           style={{ y: y1 }}
           className="absolute left-[5%] md:left-[10%] top-0 w-64 md:w-80 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
         >
            <div className="w-full flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="text-sm font-semibold tracking-sf-text text-white">Writing Tools</div>
            </div>
            <div className="w-full h-20 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center p-3 gap-2">
               <div className="w-3/4 h-2 bg-white/20 rounded-full" />
               <div className="w-full h-2 bg-white/20 rounded-full" />
               <div className="w-1/2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            </div>
         </motion.div>

         {/* Right Card - Genmoji / Image Playground */}
         <motion.div 
           style={{ y: y2 }}
           className="absolute right-[5%] md:right-[10%] bottom-0 w-64 md:w-80 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
         >
            <div className="w-full flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-green-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="text-sm font-semibold tracking-sf-text text-white">Image Playground</div>
            </div>
            <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-[#1a2b4c] to-[#2a1a4c] border border-white/10 flex items-center justify-center overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50 mix-blend-overlay" />
               <div className="w-12 h-12 rounded-full bg-white/20 blur-xl" />
            </div>
         </motion.div>

      </div>
    </section>
  )
}
