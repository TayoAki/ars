
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to experience the difference?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Join the growing community of designers and creators who choose quality and simplicity.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="group font-medium">
            Get Started
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Button>
          <Button size="lg" variant="outline" className="font-medium">
            Learn more
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
