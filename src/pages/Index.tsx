
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { TestimonialSection } from "@/components/TestimonialSection"
import { RobotScene } from "@/components/RobotScene"
import { FeaturesList } from "@/components/FeaturesList"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/FeaturesSectionWithHoverEffects"
import { TrustBadges } from "@/components/TrustBadges"
import { Clients } from "@/components/Clients"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <TrustBadges />
        <FeaturesList />
        <RobotScene />
        <FeaturesSectionWithHoverEffects />
        <Clients />
        <TestimonialSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default Index
