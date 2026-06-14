"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, onMouseMove, onMouseLeave, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    // Magnetic physics
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
    const xSpring = useSpring(x, springConfig)
    const ySpring = useSpring(y, springConfig)
    
    // Set internal ref as well as forwarded ref
    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement)

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return
      
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      
      // Calculate magnetic pull (max 15px)
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      
      x.set(distanceX * 0.2)
      y.set(distanceY * 0.2)

      // Lighting coordinates
      mouseX.set(e.clientX - left)
      mouseY.set(e.clientY - top)

      if (onMouseMove) onMouseMove(e)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      x.set(0)
      y.set(0)
      if (onMouseLeave) onMouseLeave(e)
    }
    
    // Premium styling variants with deep tactile states
    const variants = {
      primary: "bg-white text-black hover:bg-[#fafafa] shadow-[0_4px_14px_0_rgba(255,255,255,0.2)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)] active:scale-[0.96]",
      secondary: "bg-titanium-900 border border-titanium-800 text-white hover:bg-titanium-800 shadow-[0_4px_14px_0_rgba(0,0,0,0.5)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.7)] active:scale-[0.96]",
      outline: "border border-titanium-700 bg-transparent text-white hover:bg-titanium-800/50 hover:border-titanium-500 active:scale-[0.96]",
      ghost: "hover:bg-titanium-800 text-titanium-200 hover:text-white active:scale-[0.96]",
      link: "text-accent underline-offset-4 hover:underline hover:text-white transition-colors",
    }
    
    const sizes = {
      default: "h-12 px-6 py-2 text-[15px] font-medium tracking-tight",
      sm: "h-9 rounded-full px-5 text-[13px] font-medium tracking-tight",
      lg: "h-14 rounded-full px-10 text-[17px] font-medium tracking-tight",
      icon: "h-10 w-10",
    }

    // Border radius matching the button shape
    const isLink = variant === "link"
    
    return (
      <motion.div
        style={!isLink ? { x: xSpring, y: ySpring } : undefined}
        className={cn("relative inline-block", isLink ? "" : "z-10")}
      >
        <Comp
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-titanium-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 group relative overflow-hidden",
            variants[variant as keyof typeof variants],
            sizes[size as keyof typeof sizes],
            className
          )}
          {...props}
        >
          {variant === "primary" && (
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
              style={{
                background: useMotionTemplate`radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.4), transparent 80%)`,
              }}
            />
          )}

          {variant === "secondary" && (
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-plus-lighter"
              style={{
                background: useMotionTemplate`radial-gradient(120px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 80%)`,
              }}
            />
          )}

          <span className="relative z-10 flex items-center justify-center gap-2">
            {(props as any).children}
          </span>
        </Comp>
      </motion.div>
    )
  }
)
Button.displayName = "Button"

export { Button }
