
"use client";

import { Button } from "@/components/ui/button";
import { Shield, Clock, Lock, ArrowRight, Mail, User, Phone } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function HeroSectionElite() {
  // Simple theme implementation since next-themes is not available
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // For demo purposes we'll detect system preference
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? "dark" : "light");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Form submitted successfully",
        description: "We'll be in touch with you shortly."
      });
      setFormData({
        name: "",
        email: "",
        phone: ""
      });
    }, 1500);
  };

  return (
    <section className={cn("bg-background text-foreground py-12 sm:py-24 md:py-32 px-4 fade-bottom overflow-hidden pb-0")}>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 pt-16 sm:gap-24">
        {/* Elite Protection Heading */}
        <motion.div 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.7,
            delay: 0.2
          }} 
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            {/* Sparkles effect */}
            <div className="absolute inset-0 h-full">
              <SparklesCore 
                background="transparent" 
                minSize={0.4} 
                maxSize={1.5} 
                particleDensity={70} 
                className="w-full h-full" 
                particleColor="#FEF7CD" 
                speed={0.8} 
              />
            </div>
            
            {/* Title with relative positioning to appear above particles */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient-gold relative z-10">
              Elite Protection for Those Who Demand Excellence
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-amber-100/80 mb-10 max-w-3xl mx-auto">
            Professional security services tailored for executives, public figures, and high-profile clients, 
            delivered with discretion and precision.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-12 mb-20">
            <motion.div 
              whileHover={{
                scale: 1.05
              }} 
              className="flex flex-col items-center"
            >
              <Shield className="h-8 w-8 text-amber-500 mb-2" />
              <span className="text-amber-300 font-medium">Premium Protection</span>
            </motion.div>
            
            <motion.div 
              whileHover={{
                scale: 1.05
              }} 
              className="flex flex-col items-center"
            >
              <Clock className="h-8 w-8 text-amber-500 mb-2" />
              <span className="text-amber-300 font-medium">24/7 Availability</span>
            </motion.div>
            
            <motion.div 
              whileHover={{
                scale: 1.05
              }} 
              className="flex flex-col items-center"
            >
              <Lock className="h-8 w-8 text-amber-500 mb-2" />
              <span className="text-amber-300 font-medium">Unmatched Discretion</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Form Section */}
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full bg-black/[0.96] relative overflow-hidden backdrop-blur-sm border-[0.5px] border-amber-500/30 shadow-gold">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gold" />
            
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
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full pl-10 pr-4 py-3 bg-amber-950/30 border border-amber-500/20 rounded-lg text-amber-100 placeholder:text-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500" />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-500/60" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full pl-10 pr-4 py-3 bg-amber-950/30 border border-amber-500/20 rounded-lg text-amber-100 placeholder:text-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500" />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-500/60" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full pl-10 pr-4 py-3 bg-amber-950/30 border border-amber-500/20 rounded-lg text-amber-100 placeholder:text-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500" />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-500 text-black hover:bg-amber-400 font-medium py-6 rounded-lg transition-all duration-200 flex items-center justify-center">
                    {isSubmitting ? <span className="loader mr-2"></span> : <ArrowRight className="mr-2 h-5 w-5" />}
                    {isSubmitting ? "Processing..." : "Request Consultation"}
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>

        {/* Image with Glow */}
        <div className="relative pt-12">
          <MockupFrame size="small">
            <Mockup type="responsive">
              <img 
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1248&h=765&auto=format&fit=crop" 
                alt="Security Systems" 
                className="w-full h-full object-cover" 
              />
            </Mockup>
          </MockupFrame>
          <Glow variant="top" />
        </div>
      </div>
    </section>
  );
}
