
import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, UserCheck } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/90 z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 w-full h-screen max-w-full mx-auto"
      >
        <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden backdrop-blur-sm border-[0.5px] border-amber-500/30 shadow-gold">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="gold"
          />
          
          <div className="flex h-full">
            <div className="w-full h-full relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"
      />
    </section>
  )
}
