
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function FeaturesList() {
  return (
    <section className="w-full py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 text-center mx-auto max-w-3xl"
      >
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6 tracking-wider">
          PREMIUM PROTECTION SERVICES
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Why Choose <span className="text-gradient-gold">ARS Security</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Professional team of experts providing uniformed and non-uniformed security for individuals and VIPs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["Elite Training", "24/7 Availability", "Personalized Service", "Discreet Protection"].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-amber-400 bg-amber-950/40 px-4 py-2 rounded-full">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
