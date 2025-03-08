
import { Home, User, Shield, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Services', url: '#', icon: FileText },
    { name: 'About', url: '#', icon: User },
    { name: 'Testimonials', url: '#', icon: Shield }
  ]

  return <NavBar items={navItems} />
}
