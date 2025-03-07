
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 backdrop-blur-md bg-background/60 border-b border-amber-500/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-amber-500" />
          <span className="text-xl font-semibold tracking-tight text-amber-400">Elite Security</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {["Services", "Technology", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm text-amber-400/80 hover:text-amber-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div>
          <Button variant="ghost" size="sm" className="rounded-full text-amber-400 hover:bg-amber-900/30">
            Client Login
          </Button>
          <Button size="sm" className="ml-2 rounded-full bg-amber-500 text-black hover:bg-amber-400">
            Request a Quote
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
