import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { SatisfactionCard } from "@/components/ui/satisfaction-card";
export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    id: 1,
    text: "ARS Security provided exceptional protection for our high-profile event. Their professionalism and attention to detail were outstanding.",
    author: "Sarah Johnson, Event Coordinator"
  }, {
    id: 2,
    text: "I've worked with many security firms, but ARS stands out for their reliability and discreet service. They make me feel safe without being intrusive.",
    author: "Michael Chen, CEO"
  }, {
    id: 3,
    text: "The team at ARS Security went above and beyond to ensure my family's safety. Their 24/7 monitoring gave us peace of mind during a difficult time.",
    author: "Robert Williams, Business Executive"
  }, {
    id: 4,
    text: "Impeccable service and highly trained personnel. ARS Security has been protecting our corporate headquarters for years, and we couldn't be more satisfied.",
    author: "Jennifer Lopez, Head of Operations"
  }, {
    id: 5,
    text: "When it comes to VIP protection, ARS is simply the best. Their team anticipated potential security issues before they became problems.",
    author: "David Thompson, Celebrity Manager"
  }, {
    id: 6,
    text: "ARS Security customized a protection plan that perfectly addressed our unique needs. Their expertise and professionalism are unmatched.",
    author: "Amanda Peterson, Estate Manager"
  }];
  const handleShuffle = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const getPosition = (index: number): "front" | "middle" | "back" | "hidden" => {
    const position = (index - currentIndex) % testimonials.length;
    if (position < 0) return "hidden";
    if (position === 0) return "front";
    if (position === 1) return "middle";
    if (position === 2) return "back";
    return "hidden";
  };
  return <section className="w-full py-20 px-4 bg-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6 tracking-wider">TESTIMONIALS</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            What Our <span className="text-gradient-gold">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the individuals and organizations who trust ARS Security with their protection needs.
          </p>
        </div>
        
        
      </div>
    </section>;
}