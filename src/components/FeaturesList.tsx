
import { motion } from "framer-motion"
import { Check, Shield, Target, Zap, Users } from "lucide-react"

export function FeaturesList() {
  const mainFeatures = [
    {
      icon: <Shield className="h-12 w-12 text-amber-500 mb-4" />,
      title: "Expert Protection",
      description: "Our elite team of security professionals brings decades of experience from military, law enforcement, and specialized protection services."
    },
    {
      icon: <Target className="h-12 w-12 text-amber-500 mb-4" />,
      title: "Tailored Security",
      description: "We create custom security solutions designed specifically for your unique requirements, risks, and personal preferences."
    },
    {
      icon: <Zap className="h-12 w-12 text-amber-500 mb-4" />,
      title: "Rapid Response",
      description: "Our team is always ready to deploy, with lightning-fast response times and strategic contingency planning for any situation."
    },
    {
      icon: <Users className="h-12 w-12 text-amber-500 mb-4" />,
      title: "Discreet Service",
      description: "We prioritize low-profile security measures that provide maximum protection while maintaining your privacy and lifestyle."
    },
  ]

  return (
    <section className="w-full py-20 px-4 bg-black/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 text-center mx-auto max-w-3xl mb-16"
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mainFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            className="bg-black/60 border border-amber-500/20 rounded-lg p-6 backdrop-blur-sm shadow-gold transition-all duration-300 hover:shadow-lg hover:border-amber-500/40"
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-bold mb-3 text-amber-400">{feature.title}</h3>
              <p className="text-amber-100/80 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
