
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Layers, Zap, Compass, Heart } from "lucide-react"

const features = [
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Elegant Design",
    description: "Clean, thoughtful interfaces with balanced proportions and visual harmony."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Powerful Performance",
    description: "Optimized for speed and efficiency, delivering seamless interactions."
  },
  {
    icon: <Compass className="h-8 w-8" />,
    title: "Intuitive Navigation",
    description: "Designed for clarity and ease of use, with natural user flows."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Crafted with Care",
    description: "Every detail meticulously refined for a premium experience."
  }
]

export function FeatureSection() {
  return (
    <section className="py-24 px-4 w-full bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Designed for excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Built with an unwavering commitment to quality and attention to detail
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-[0.5px] border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-glow overflow-hidden group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full w-12 h-12 -mt-1 -ml-1" />
                  <div className="relative z-10 rounded-full w-10 h-10 flex items-center justify-center bg-primary/10 text-primary mb-4">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
