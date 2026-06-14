"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Hexagon } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function PremiumNavbar() {
  const { scrollY } = useScroll()
  
  // Fade in background and border on scroll
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.65])
  const borderColor = useTransform(
    scrollY, 
    [0, 50], 
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.05)"]
  )
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(20px)"])

  return (
    <motion.header
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(0, 0, 0, ${v})`),
        borderBottomColor: borderColor,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        backdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50 h-14 transition-colors duration-300"
    >
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <a href="#" className="text-titanium-100 hover:text-white transition-colors">
            <Hexagon className="h-4 w-4" />
            <span className="sr-only">Nova</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-[12px] font-medium tracking-tight text-titanium-200">
            <a href="#" className="hover:text-white transition-colors">Store</a>
            <a href="#" className="hover:text-white transition-colors">Mac</a>
            <a href="#" className="hover:text-white transition-colors">Tablet</a>
            <a href="#" className="hover:text-white transition-colors">Phone</a>
            <a href="#" className="hover:text-white transition-colors">Watch</a>
            <a href="#" className="hover:text-white transition-colors">Vision</a>
            <a href="#" className="hover:text-white transition-colors">AirPods</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-[12px] text-titanium-200 font-medium hidden sm:block mt-0.5">
            Nova 17 Pro
          </div>
          <motion.div
            style={{
               opacity: useTransform(scrollY, [150, 300], [0, 1]),
               y: useTransform(scrollY, [150, 300], [-10, 0]),
               pointerEvents: useTransform(scrollY, (v) => v > 200 ? "auto" : "none") as any
            }}
          >
            <Button variant="primary" size="sm" className="h-7 text-[11px] px-3 font-semibold tracking-wide">
              Pre-order
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
