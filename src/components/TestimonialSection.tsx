
import { useState } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Shield, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    testimonial: "The professionalism of ARS Security is unmatched. They provided our executives with discreet, top-tier protection during our international conference.",
    author: "James W. - CEO @ Global Tech Innovations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    testimonial: "I feel completely safe with ARS Security's team. Their attention to detail and situational awareness gave me peace of mind during a high-risk period.", 
    author: "Sarah L. - Public Figure",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    testimonial: "The level of service from ARS Security exceeded all expectations. Their team's training and expertise is evident in every interaction.",
    author: "Michael D. - Diplomatic Services",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
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
    <section className="w-full py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black/70 to-transparent">
      <div className="absolute inset-0 w-full h-full z-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center justify-center gap-2 mb-4 bg-amber-500/10 px-4 py-2 rounded-full">
          <Star className="h-5 w-5 text-amber-500" />
          <span className="text-amber-400 text-sm font-medium">Client Testimonials</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-600 mb-4">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-amber-100/80 max-w-lg mx-auto">
          Trusted by executives, public figures, and VIPs worldwide for discreet and professional security services.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col lg:flex-row justify-center items-center max-w-7xl mx-auto gap-12"
      >
        <div className="relative h-[450px] w-[350px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              handleShuffle={handleShuffle}
              position={positions[index]}
            />
          ))}
        </div>
        
        <div className="max-w-lg">
          <div className="p-8 rounded-lg bg-black/60 border border-amber-500/20 backdrop-blur-md">
            <Quote className="h-12 w-12 text-amber-500/30 mb-4" />
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">100% Client Satisfaction</h3>
            <p className="text-amber-100/70 mb-6">
              Our commitment to excellence has earned us a perfect satisfaction rating from our clients. We prioritize building long-term relationships based on trust, reliability, and exceptional service.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-950/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">150+</div>
                <div className="text-sm text-amber-100/70">VIP Clients</div>
              </div>
              <div className="bg-amber-950/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">15+</div>
                <div className="text-sm text-amber-100/70">Years Experience</div>
              </div>
              <div className="bg-amber-950/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">24/7</div>
                <div className="text-sm text-amber-100/70">Availability</div>
              </div>
              <div className="bg-amber-950/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">0</div>
                <div className="text-sm text-amber-100/70">Security Breaches</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
