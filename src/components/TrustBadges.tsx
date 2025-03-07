
import { motion } from "framer-motion"
import { Shield, CheckCircle, Award, BadgeCheck } from "lucide-react"

export function TrustBadges() {
  const badges = [
    { icon: <Shield className="h-8 w-8 text-amber-500" />, label: "ISO 27001 Certified" },
    { icon: <CheckCircle className="h-8 w-8 text-amber-500" />, label: "Security Verified" },
    { icon: <Award className="h-8 w-8 text-amber-500" />, label: "Top Rated 2024" },
    { icon: <BadgeCheck className="h-8 w-8 text-amber-500" />, label: "Licensed & Insured" }
  ]

  return (
    <section className="w-full py-10 bg-gradient-to-b from-amber-950/20 to-transparent">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-2 p-4 rounded-full bg-black/40 border border-amber-500/30 shadow-gold">
                {badge.icon}
              </div>
              <span className="text-sm font-medium text-amber-400">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
