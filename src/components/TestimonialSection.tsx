
import { useState } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Shield, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    testimonial: "The professionalism of ARS Security is unmatched. They provided our executives with discreet, top-tier protection during our international conference.",
    author: "James W. - CEO @ Global Tech Innovations"
  },
  {
    id: 2,
    testimonial: "I feel completely safe with ARS Security's team. Their attention to detail and situational awareness gave me peace of mind during a high-risk period.", 
    author: "Sarah L. - Public Figure"
  },
  {
    id: 3,
    testimonial: "The level of service from ARS Security exceeded all expectations. Their team's training and expertise is evident in every interaction.",
    author: "Michael D. - Diplomatic Services"
  }
];

export function TestimonialSection() {
  const [positions, setPositions] = useState(["front", "middle", "back"] as Array<"front" | "middle" | "back">);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop() as "front" | "middle" | "back");
    setPositions(newPositions);
  };

  return (
    <section className="w-full py-24 md:py-32 px-4 relative overflow-hidden bg-gradient-to-b from-black/90 to-black/40">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-72 h-72 rounded-full bg-amber-600/20 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center mb-20 relative z-10"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <motion.div 
            initial={{ rotate: -15, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="h-9 w-9 text-amber-500" strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-600">
            Client Testimonials
          </h2>
        </div>
        <p className="mt-4 text-lg text-amber-100/80 max-w-2xl mx-auto">
          Trusted by executives, public figures, and VIPs worldwide for discreet and professional security services.
        </p>
      </motion.div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row justify-center items-center gap-12"
        >
          <div className="relative h-[450px] w-[350px] order-2 lg:order-1">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </div>
          
          <div className="lg:order-2 max-w-lg">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-6 md:p-8 rounded-lg bg-gradient-to-br from-black/80 to-black/60 border border-amber-500/30 backdrop-blur-md shadow-gold"
            >
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-amber-500 mr-3" />
                <h3 className="text-xl font-semibold text-amber-400">Why Our Clients Trust Us</h3>
              </div>
              <p className="text-amber-100/70 mb-6">
                Our testimonials reflect our commitment to excellence in every security detail. 
                We pride ourselves on creating seamless, discreet protection that allows our clients 
                to focus on what matters most to them.
              </p>
              <div className="space-y-3">
                {["Confidentiality Guaranteed", "Elite Security Personnel", "Global Operations"].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-sm text-amber-200">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-amber-100/60">
                Swipe or drag the cards to see more testimonials from our satisfied clients.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
