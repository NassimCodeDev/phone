"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ShieldCheck, Calendar, ArrowRight } from "lucide-react"

export function Preorder() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  return (
    <section ref={ref} className="relative py-48 w-full bg-[#050505] flex flex-col items-center justify-center border-t border-titanium-800 overflow-hidden">
      
      {/* Background ambient lighting for closure */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-titanium-500/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.98 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[800px] mx-auto px-4 text-center flex flex-col items-center relative z-10"
      >
        <motion.h4
             initial={{ opacity: 0, y: 10 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
             transition={{ duration: 0.8 }}
             className="text-titanium-400 font-semibold tracking-sf-display uppercase text-xs mb-6"
        >
          The Next Generation
        </motion.h4>

        <motion.h2 
           className="text-[64px] md:text-[80px] lg:text-[100px] font-semibold tracking-sf-display text-white mb-8 leading-[0.9]"
        >
          {"Pro. Beyond.".split("").map((char, i) => (
             <motion.span
                key={`p-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.3 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
             >
                {char === " " ? "\u00A0" : char}
             </motion.span>
          ))}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[22px] md:text-[26px] font-medium leading-[1.3] tracking-sf-text text-titanium-200 mb-14 max-w-lg"
        >
          Pre-order now to be among the first. Available soon.
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
           transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
           className="flex gap-8 mb-16 justify-center w-full"
        >
           <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-titanium-400" />
              <span className="text-titanium-200 text-sm font-medium tracking-tight">AppleCare+ Support</span>
           </div>
           <div className="w-px h-10 bg-titanium-800" />
           <div className="flex flex-col items-center gap-2">
              <Calendar className="w-5 h-5 text-titanium-400" />
              <span className="text-titanium-200 text-sm font-medium tracking-tight">Free 14-day Returns</span>
           </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
           transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          <Button variant="primary" size="lg" className="h-14 px-10 text-[17px] font-semibold tracking-wide">
            Pre-order <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button variant="secondary" size="lg" className="h-14 px-10 text-[17px] font-semibold tracking-wide bg-titanium-800/50 hover:bg-titanium-800 border-titanium-700">
            View pricing
          </Button>
        </motion.div>
        
        <motion.p 
           initial={{ opacity: 0 }}
           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
           transition={{ duration: 1, delay: 1.5 }}
           className="text-titanium-500 text-[13px] max-w-md mx-auto"
        >
          * Trade-in values vary based on the condition, year, and configuration of your eligible trade-in device. Additional terms from Apple apply.
        </motion.p>
      </motion.div>

      {/* Footer minimal - Ultra crisp */}
      <div className="w-full max-w-[1200px] mx-auto px-4 mt-32 pt-10 border-t border-titanium-800 flex flex-col md:flex-row justify-between items-center gap-6 text-titanium-500 text-xs font-medium">
        <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <div className="w-px h-3 bg-titanium-700 mt-0.5" />
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <div className="w-px h-3 bg-titanium-700 mt-0.5" />
          <a href="#" className="hover:text-white transition-colors">Sales Policy</a>
        </div>
      </div>
      
    </section>
  )
}
