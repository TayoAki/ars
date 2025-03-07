
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, User, Phone, Shield, Lock, Clock } from "lucide-react"
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

  const features = [
    { icon: <Shield className="h-5 w-5" />, text: "Premium Protection" },
    { icon: <Clock className="h-5 w-5" />, text: "24/7 Availability" },
    { icon: <Lock className="h-5 w-5" />, text: "Unmatched Discretion" },
  ]

  return (
    <section className="w-full min-h-[92vh] flex flex-col items-center justify-center px-4 relative overflow-hidden pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/90 z-0"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 w-full h-full z-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523689602866-95405f0c1a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Elite <span className="text-gradient-gold">Protection</span> for Those Who Demand Excellence
          </h1>
          <p className="text-xl text-amber-100/80 max-w-3xl mx-auto mb-8">
            Professional security services tailored for executives, public figures, and high-profile clients, delivered with discretion and precision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full"
              >
                <span className="text-amber-500">{feature.icon}</span>
                <span className="text-sm font-medium text-amber-400">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 w-full max-w-md mx-auto"
      >
        <Card className="w-full bg-black/[0.96] relative overflow-hidden backdrop-blur-sm border-[0.5px] border-amber-500/30 shadow-gold">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="gold"
          />
          
          <div className="p-8 relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-amber-500" />
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-600">
                Request a Consultation
              </h2>
            </div>
            <p className="mt-2 text-amber-100/80 max-w-sm mb-6 text-sm">
              Get a personalized security assessment from our team of experts.
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
