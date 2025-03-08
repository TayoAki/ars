
import { Button } from "@/components/ui/button"
import { Home, User, FileText, Shield } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [activeTab, setActiveTab] = useState("Home")
  const [isMobile, setIsMobile] = useState(false)

  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Services', url: '#', icon: FileText },
    { name: 'About', url: '#', icon: User },
    { name: 'Testimonials', url: '#', icon: Shield }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 px-4 py-4 backdrop-blur-md bg-black/90 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/cdbf749e-2c2c-437a-a78e-d8b525f0b6ee.png" 
            alt="ARS Security Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-semibold tracking-tight text-amber-400">ARS Security</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            
            return (
              <button
                key={item.name}
                className={cn(
                  "relative rounded-full px-4 py-2 text-amber-200/70 hover:text-amber-200 transition-colors",
                  isActive && "text-amber-400"
                )}
                onClick={() => setActiveTab(item.name)}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="navbarGlow"
                    className="absolute inset-0 rounded-full bg-amber-400/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
        
        <div className="hidden md:block">
          <Button size="sm" className="rounded-full bg-amber-500 text-black hover:bg-amber-400">
            Get a Quote
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation - Bottom Dock */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="relative">
          <div className="flex items-center justify-evenly bg-black border-t border-amber-500/30 px-2 py-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              
              return (
                <button
                  key={item.name}
                  className={cn(
                    "relative flex flex-col items-center gap-1 py-1 px-3 rounded-md",
                    isActive ? "text-amber-400" : "text-amber-200/70"
                  )}
                  onClick={() => setActiveTab(item.name)}
                >
                  <item.icon className={cn(
                    "h-5 w-5 transition-all",
                    isActive ? "scale-110" : ""
                  )} />
                  <span className="text-xs font-medium">{item.name}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="mobileNavIndicator"
                      className="absolute bottom-0 h-0.5 w-10 bg-amber-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
