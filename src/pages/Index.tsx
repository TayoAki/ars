
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
      </main>
      
      <footer className="border-t border-border/20 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; 2023 ARS Security & Protection. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map((item) => (
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
