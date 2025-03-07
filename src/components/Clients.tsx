
import { motion } from "framer-motion"

export function Clients() {
  // Placeholder client logos (in a real implementation, these would be actual client logos)
  const clients = [
    "Global Tech Corp", "Elite Executives", "Monarch Hotels", 
    "Diamond Enterprises", "Sovereign Financial", "Royal Media Group"
  ]
  
  return (
    <section className="w-full py-16 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4 tracking-wider">
            TRUSTED BY INDUSTRY LEADERS
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gradient-gold">
            Our Distinguished Clientele
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {clients.map((client, index) => (
            <div 
              key={index}
              className="p-4 bg-black/40 border border-amber-500/20 rounded-lg min-w-[180px] text-center"
            >
              <span className="text-amber-400/70 font-serif text-lg font-medium">{client}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
