
import { motion } from "framer-motion"
import { Shield, Clock, Lock } from "lucide-react"

export function EliteProtectionText() {
  return (
    <section className="w-full py-20 md:py-24 px-4 bg-gradient-to-b from-black/50 to-transparent mt-16 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient-gold">
          Elite Protection for Those Who Demand Excellence
        </h2>
        
        <p className="text-lg md:text-xl text-amber-100/80 mb-10 max-w-3xl mx-auto">
          Professional security services tailored for executives, public figures, and high-profile clients, 
          delivered with discretion and precision.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <Shield className="h-8 w-8 text-amber-500 mb-2" />
            <span className="text-amber-300 font-medium">Premium Protection</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <Clock className="h-8 w-8 text-amber-500 mb-2" />
            <span className="text-amber-300 font-medium">24/7 Availability</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <Lock className="h-8 w-8 text-amber-500 mb-2" />
            <span className="text-amber-300 font-medium">Unmatched Discretion</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
