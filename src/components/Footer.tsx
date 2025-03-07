
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: "Services",
      links: ["Executive Protection", "Event Security", "Residential Security", "Corporate Security", "Risk Assessment"]
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Testimonials", "Partners"]
    },
    {
      title: "Resources",
      links: ["Security Blog", "Case Studies", "Security Tips", "FAQ", "Contact"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer", "Sitemap"]
    }
  ]
  
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" }
  ]

  return (
    <footer className="w-full bg-black/80 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-amber-500" />
              <span className="text-2xl font-bold text-amber-400">ARS Security</span>
            </div>
            <p className="text-amber-100/70 mb-6 max-w-md">
              Providing elite security and protection services to high-profile individuals, executives, and organizations worldwide since 2010.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-amber-100/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-amber-100/80">contact@arssecurity.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-amber-100/80">1234 Security Blvd, Los Angeles, CA 90001</span>
              </div>
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="text-amber-400 font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-amber-100/70 hover:text-amber-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-amber-500/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-amber-400/70 mb-4 md:mb-0">
            &copy; {currentYear} ARS Security and Protections. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 rounded-full bg-amber-950/50 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
