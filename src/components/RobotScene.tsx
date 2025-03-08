'use client';

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
export function RobotScene() {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.7,
    delay: 0.3
  }} className="w-full max-w-5xl mx-auto my-12">
      <Card className="w-full bg-black/[0.96] relative overflow-hidden backdrop-blur-sm border-[0.5px] border-amber-500/30 shadow-gold">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gold" />
        
        <div className="flex flex-col md:flex-row h-[500px]">
          {/* Left content */}
          

          {/* Right content - 3D Robot */}
          <div className="flex-1 relative">
            
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
          </div>
        </div>
      </Card>
    </motion.div>;
}