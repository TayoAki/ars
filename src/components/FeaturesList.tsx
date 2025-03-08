
import { motion } from "framer-motion";
import { Check, Send, ArrowRight, Mail, User, Phone, Shield, Clock, Lock } from "lucide-react";
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

  // Feature items to display on mobile
  const featureItems = [
    { icon: Shield, title: "Premium Protection" },
    { icon: Clock, title: "24/7 Availability" },
    { icon: Lock, title: "Unmatched Discretion" }
  ];

  return <section className="w-full py-24 px-4 bg-gradient-to-b from-background via-black/10 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#ffd700_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <Hero 
        title={<>Elite Protection for <span className="text-gradient-gold">Those Who Demand Excellence</span></>}
        subtitle="Professional security services tailored for executives, public figures, and high-profile clients, delivered with discretion and precision."
        className="mb-10"
        titleClassName="text-4xl sm:text-6xl font-bold tracking-tight mb-8"
        subtitleClassName="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8 md:block">
          {featureItems.map((feature, index) => (
            <div key={feature.title} className="flex flex-col items-center text-center gap-2 mb-12 w-full">
              <div className="bg-amber-500/20 p-4 rounded-full mb-2 border border-amber-500/30">
                <feature.icon className="h-8 w-8 text-amber-500" />
              </div>
              <span className="text-xl font-semibold text-amber-400">{feature.title}</span>
            </div>
          ))}
        </div>
      </Hero>

      {/* Consultation Form Card - Only visible on medium screens and up */}
      <div className="max-w-4xl mx-auto mt-16 hidden md:block">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden backdrop-blur-sm border-[0.5px] border-amber-500/30 shadow-gold">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gold" />
          
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full p-8 md:p-10 lg:p-12 relative z-10 flex flex-col justify-center items-center text-center backdrop-blur-sm bg-black/50 rounded-lg border-l border-amber-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500/20 p-2.5 rounded-full">
                  <Shield className="h-6 w-6 text-amber-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-600">
                  Get Protected Today
                </h2>
              </div>
              
              <p className="mt-2 text-amber-100/80 max-w-xl mb-8 text-base md:text-lg">
                Request a free consultation with our security experts. Fill out the form and we'll contact you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5 max-w-xl w-full">
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-500/60 transition-all group-hover:text-amber-500/90" />
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Full Name" 
                    required 
                    className="w-full pl-10 pr-4 py-3.5 bg-amber-950/30 border border-amber-500/20 rounded-lg text-amber-100 placeholder:text-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all" 
                  />
                </div>
                
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-500/60 transition-all group-hover:text-amber-500/90" />
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email Address" 
                    required 
                    className="w-full pl-10 pr-4 py-3.5 bg-amber-950/30 border border-amber-500/20 rounded-lg text-amber-100 placeholder:text-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all" 
                  />
                </div>
                
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-500/60 transition-all group-hover:text-amber-500/90" />
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Phone Number" 
                    className="w-full pl-10 pr-4 py-3.5 bg-amber-950/30 border border-amber-500/20 rounded-lg text-amber-100 placeholder:text-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 font-medium py-6 rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/20 items-center justify-center mt-8"
                >
                  {isSubmitting ? (
                    <>
                      <span className="loader mr-2"></span>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight className="mr-2 h-5 w-5" />
                      <span>Request Consultation</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>;
}
