
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 text-center mb-12 max-w-3xl"
      >
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6 tracking-wider">
          PREMIUM PROTECTION SERVICES
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          ARS <span className="text-gradient-gold">Security</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Professional team of experts providing uniformed and non-uniformed security for individuals and VIPs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden backdrop-blur-sm border-[0.5px] border-amber-500/30 shadow-gold">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="gold"
          />
          
          <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-amber-500" />
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-600">
                  Expert Protection
                </h2>
              </div>
              <p className="mt-4 text-amber-100/80 max-w-lg">
                We provide premium security and protection services with highly trained personnel.
                Our team specializes in personal security for individuals and VIP protection.
              </p>
              <div className="flex items-center mt-6 space-x-4">
                <Button variant="ghost" className="group text-amber-400 hover:text-amber-300 hover:bg-amber-900/30">
                  Our services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="text-amber-400 border-amber-500/30 hover:bg-amber-900/30">
                  <UserCheck className="mr-2 h-4 w-4" />
                  Meet our team
                </Button>
              </div>
            </div>

            <div className="flex-1 relative">
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
