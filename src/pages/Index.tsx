
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { FeatureSection } from "@/components/FeatureSection"
import { ContactSection } from "@/components/ContactSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeatureSection />
        <ContactSection />
      </main>
      
      <footer className="border-t border-border/20 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; 2023 Design. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
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
