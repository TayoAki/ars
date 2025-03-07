
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, User, Phone, Shield, Check } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Form submitted successfully",
        description: "We'll be in touch with you shortly.",
      })
      setFormData({ name: "", email: "", phone: "" })
    }, 1500)
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/90 z-0"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 text-center mb-12 max-w-3xl"
      >
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6 tracking-wider">
          PREMIUM PROTECTION SERVICES
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          ARS <span className="text-gradient-gold">Security</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Professional team of experts providing uniformed and non-uniformed security for individuals and VIPs.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Elite Training", "24/7 Availability", "Personalized Service", "Discreet Protection"].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-amber-400 bg-amber-950/40 px-4 py-2 rounded-full">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        <Card className="w-full bg-black/[0.96] relative overflow-hidden backdrop-blur-sm border-[0.5px] border-amber-500/30 shadow-gold">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="gold"
          />
          
          <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-amber-500" />
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-600">
                  Get Protected Today
                </h2>
              </div>
              <p className="mt-2 text-amber-100/80 max-w-lg mb-6">
                Request a free consultation with our security experts. Fill out the form and we'll contact you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-500/60" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-amber-950/30 border border-amber-500/20 rounded-lg text-amber-100 placeholder:text-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-500/60" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-amber-950/30 border border-amber-500/20 rounded-lg text-amber-100 placeholder:text-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-500/60" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 bg-amber-950/30 border border-amber-500/20 rounded-lg text-amber-100 placeholder:text-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 text-black hover:bg-amber-400 font-medium py-6 rounded-lg transition-all duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="loader mr-2"></span>
                  ) : (
                    <ArrowRight className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? "Processing..." : "Request Consultation"}
                </Button>
              </form>
            </div>

            <div className="hidden md:block flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
            </div>
          </div>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"
      />
    </section>
  )
}
