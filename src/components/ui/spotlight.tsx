
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: MouseEvent) => {
    if (!divRef.current) return
    
    const div = divRef.current
    const rect = div.getBoundingClientRect()
    
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    
    setOpacity(0.7)
  }
  
  const handleMouseLeave = () => {
    setOpacity(0)
  }

  useEffect(() => {
    const div = divRef.current
    if (!div) return
    
    div.addEventListener("mousemove", handleMouseMove)
    div.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {
      div.removeEventListener("mousemove", handleMouseMove)
      div.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])
  
  return (
    <div
      ref={divRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}10, transparent 40%)`,
        }}
      />
    </div>
  )
}
