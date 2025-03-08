
import { motion } from "framer-motion"
import { Check, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { LampContainer } from "@/components/ui/lamp"

export function FeaturesList() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    })
    setEmail("")
    setMessage("")
    setName("")
  }

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-background via-black/10 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#ffd700_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <LampContainer className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-center mx-auto max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-6 tracking-wider border border-primary/20">
            PREMIUM PROTECTION SERVICES
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8">
            Why Choose <span className="text-gradient-gold">ARS Security</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Professional team of experts providing uniformed and non-uniformed security for individuals and VIPs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Elite Training", "24/7 Availability", "Personalized Service", "Discreet Protection"].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-amber-400 bg-amber-950/50 backdrop-blur-sm px-5 py-2.5 rounded-full border border-amber-500/20 shadow-lg shadow-amber-900/10 transition-all hover:scale-105 hover:bg-amber-950/60">
                <Check className="h-4 w-4" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </LampContainer>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-left"
        >
          <h3 className="text-3xl font-bold mb-8">
            Get In <span className="text-gradient-gold">Touch</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Contact our team of security professionals for a free consultation about your protection needs. We offer tailored security solutions for any situation.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-950/50 flex items-center justify-center shrink-0 border border-amber-600/30 shadow-lg shadow-amber-900/10">
                <Check className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h4 className="font-semibold text-xl text-amber-400 mb-1">Expert Consultation</h4>
                <p className="text-muted-foreground">Speak with our security specialists to assess your needs</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-950/50 flex items-center justify-center shrink-0 border border-amber-600/30 shadow-lg shadow-amber-900/10">
                <Check className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h4 className="font-semibold text-xl text-amber-400 mb-1">Customized Solutions</h4>
                <p className="text-muted-foreground">Receive a security plan tailored to your specific requirements</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-950/50 flex items-center justify-center shrink-0 border border-amber-600/30 shadow-lg shadow-amber-900/10">
                <Check className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h4 className="font-semibold text-xl text-amber-400 mb-1">Fast Response</h4>
                <p className="text-muted-foreground">Our team will respond to your inquiry within 24 hours</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="bg-black/[0.65] backdrop-blur-md border border-amber-500/20 rounded-xl p-8 shadow-xl shadow-amber-900/10">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-400 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-amber-500/30 rounded-lg text-amber-100 placeholder:text-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 shadow-inner shadow-black/50"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-amber-500/30 rounded-lg text-amber-100 placeholder:text-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 shadow-inner shadow-black/50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-amber-500/30 rounded-lg text-amber-100 placeholder:text-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 shadow-inner shadow-black/50"
                  placeholder="Tell us about your security needs"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full flex items-center justify-center bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-md shadow-amber-900/30 text-base font-medium"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
