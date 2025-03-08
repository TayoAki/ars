
import { Button } from "@/components/ui/button"
import { NavBarDemo } from "@/components/ui/navbar-demo"
import { Shield } from "lucide-react"

export function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 px-4 py-4 backdrop-blur-md bg-background/60 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-amber-500" />
            <span className="text-xl font-semibold tracking-tight text-amber-400">ARS Security</span>
          </div>
          
          <div>
            <Button size="sm" className="rounded-full bg-amber-500 text-black hover:bg-amber-400">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
      <NavBarDemo />
    </>
  )
}
