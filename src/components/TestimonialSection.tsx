
import { useState } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Shield, Star } from "lucide-react";

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
    <section className="w-full py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="h-6 w-6 text-amber-500" />
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-300 to-amber-600">
            What Our Clients Say
          </h2>
        </div>
        <p className="mt-2 text-amber-100/80 max-w-lg mx-auto">
          Trusted by executives, public figures, and VIPs worldwide for discreet and professional security services.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center items-center"
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
        
        <div className="hidden lg:flex items-center justify-center ml-8">
          <div className="p-5 rounded-lg bg-black/60 border border-amber-500/20 backdrop-blur-md max-w-sm">
            <div className="flex items-center mb-3">
              <Shield className="h-5 w-5 text-amber-500 mr-2" />
              <h3 className="text-lg font-semibold text-amber-400">Swipe to See More</h3>
            </div>
            <p className="text-sm text-amber-100/70">
              Drag the front card to the left to see more testimonials from our satisfied clients.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
