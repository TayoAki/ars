
'use client'

import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export function RobotScene() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="w-full max-w-5xl mx-auto my-12"
    >
      <Card className="w-full bg-black/[0.96] relative overflow-hidden backdrop-blur-sm border-[0.5px] border-amber-500/30 shadow-gold">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="gold"
        />
        
        <div className="flex flex-col md:flex-row h-[500px]">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-amber-500" />
              <Badge variant="outline" className="bg-amber-500/10 text-amber-300 border-amber-500/30 px-3">
                Security Robot
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-600">
              Advanced AI Protection
            </h1>
            <p className="mt-4 text-amber-100/80 max-w-lg">
              Our security systems include AI-powered robots that provide 24/7 surveillance
              and immediate response capabilities, ensuring maximum protection for your assets.
            </p>
          </div>

          {/* Right content - 3D Robot */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 md:block hidden"></div>
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
