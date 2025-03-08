
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { TestimonialSection } from "@/components/TestimonialSection"
import { RobotScene } from "@/components/RobotScene"
import { FeaturesList } from "@/components/FeaturesList"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/FeaturesSectionWithHoverEffects"
import { HeroSectionElite } from "@/components/ui/hero-section-enhanced"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      <main>
        <HeroSectionElite />
        <TestimonialSection />
        <FeaturesSectionWithHoverEffects />
        <RobotScene />
        <FeaturesList />
      </main>
      
      <footer className="border-t border-amber-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-amber-400/70">&copy; 2025 ARS Security and Protections. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-xs text-amber-400/70 hover:text-amber-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
