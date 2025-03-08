
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
      
      {/* Mobile Navigation - Two Rows */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="relative">
          <div className={cn(
            "grid grid-cols-2 p-3 gap-3 bg-black/90 backdrop-blur-lg rounded-xl",
            "border border-amber-500/30 shadow-lg w-[180px]"
          )}>
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              
              return (
                <button
                  key={item.name}
                  className={cn(
                    "relative rounded-lg p-2 text-amber-200/70 hover:text-amber-200 transition-colors",
                    isActive && "text-amber-400"
                  )}
                  onClick={() => setActiveTab(item.name)}
                >
                  <span className="flex flex-col items-center gap-1.5">
                    <item.icon className="h-5 w-5" />
                    <span className="text-xs font-medium">{item.name}</span>
                  </span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="mobileNavbarGlow"
                      className="absolute inset-0 rounded-lg bg-amber-400/10"
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
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-xl blur-xl bg-amber-400/20 -z-10" />
        </div>
      </div>
    </div>
  )
}
