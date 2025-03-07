
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 backdrop-blur-md bg-background/60 border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-xl font-semibold tracking-tight">ARS Security</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {["Services", "Technology", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div>
          <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary/5">
            Client Login
          </Button>
          <Button size="sm" className="ml-2 rounded-full">
            Request a Quote
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
