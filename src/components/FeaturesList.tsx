
import { motion } from "framer-motion";
import { Check, Send, ArrowRight, Mail, User, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Hero } from "@/components/ui/hero";

export function FeaturesList() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  return <section className="w-full py-24 px-4 bg-gradient-to-b from-background via-black/10 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#ffd700_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <Hero 
        title={<>Why Choose <span className="text-gradient-gold">ARS Security</span></>}
        subtitle="Professional team of experts providing uniformed and non-uniformed security for individuals and VIPs."
        className="mb-10"
        titleClassName="text-4xl sm:text-6xl font-bold tracking-tight mb-8"
        subtitleClassName="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {["Elite Training", "24/7 Availability", "Personalized Service", "Discreet Protection"].map(feature => (
            <div key={feature} className="flex items-center gap-2 text-amber-400 bg-amber-950/50 backdrop-blur-sm px-5 py-2.5 rounded-full border border-amber-500/20 shadow-lg shadow-amber-900/10 transition-all hover:scale-105 hover:bg-amber-950/60">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </Hero>

      {/* Consultation Form Card */}
      <div className="max-w-4xl mx-auto mt-16">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden backdrop-blur-sm border-[0.5px] border-amber-500/30 shadow-gold">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gold" />
          
          <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center max-w-2xl mx-auto">
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
    </section>;
}
