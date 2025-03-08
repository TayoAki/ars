import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { LampContainer } from "@/components/ui/lamp";
export function FeaturesList() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
      variant: "default"
    });
    setEmail("");
    setMessage("");
    setName("");
  };
  return <section className="w-full py-24 px-4 bg-gradient-to-b from-background via-black/10 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#ffd700_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <LampContainer className="mb-24">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="relative z-10 text-center mx-auto max-w-3xl">
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
            {["Elite Training", "24/7 Availability", "Personalized Service", "Discreet Protection"].map(feature => <div key={feature} className="flex items-center gap-2 text-amber-400 bg-amber-950/50 backdrop-blur-sm px-5 py-2.5 rounded-full border border-amber-500/20 shadow-lg shadow-amber-900/10 transition-all hover:scale-105 hover:bg-amber-950/60">
                <Check className="h-4 w-4" />
                <span className="text-sm font-medium">{feature}</span>
              </div>)}
          </div>
        </motion.div>
      </LampContainer>

      {/* Contact Form Section */}
      
    </section>;
}