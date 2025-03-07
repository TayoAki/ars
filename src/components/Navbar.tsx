
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Shield, Menu, X, Phone } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Contact", href: "#" }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 backdrop-blur-md bg-background/60 border-b border-amber-500/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-amber-500" />
          <span className="text-xl font-bold tracking-tight text-amber-400">ARS Security</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm text-amber-400/80 hover:text-amber-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-amber-400">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">+1 (555) 123-4567</span>
          </div>
          
          <Button size="sm" className="rounded-full bg-amber-500 text-black hover:bg-amber-400">
            Get a Quote
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-amber-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md border-b border-amber-500/20"
        >
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm text-amber-400/80 hover:text-amber-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" className="mt-2 rounded-full bg-amber-500 text-black hover:bg-amber-400">
              Get a Quote
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
