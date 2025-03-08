
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function SatisfactionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-full w-full rounded-2xl border-2 border-amber-500/30 bg-black/[0.85] p-8 shadow-gold backdrop-blur-md flex flex-col"
    >
      <h3 className="text-3xl font-bold mb-4 text-gradient-gold">
        100% Client Satisfaction
      </h3>
      
      <p className="text-amber-100/80 mb-6">
        Our commitment to excellence has earned us a perfect satisfaction rating from our clients. 
        We prioritize building long-term relationships based on trust, reliability, and exceptional service.
      </p>
      
      <div className="grid grid-cols-2 gap-6 mt-auto">
        <div className="text-center">
          <span className="text-4xl font-bold text-amber-400 block">150+</span>
          <span className="text-sm text-amber-100/70">VIP Clients</span>
        </div>
        
        <div className="text-center">
          <span className="text-4xl font-bold text-amber-400 block">15+</span>
          <span className="text-sm text-amber-100/70">Years Experience</span>
        </div>
        
        <div className="text-center">
          <span className="text-4xl font-bold text-amber-400 block">24/7</span>
          <span className="text-sm text-amber-100/70">Availability</span>
        </div>
        
        <div className="text-center">
          <span className="text-4xl font-bold text-amber-400 block">0</span>
          <span className="text-sm text-amber-100/70">Security Breaches</span>
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-center">
        <div className="rounded-full bg-amber-500/20 p-2">
          <Check className="h-5 w-5 text-amber-400" />
        </div>
        <span className="ml-2 text-amber-100/90 text-sm">Trusted by industry leaders</span>
      </div>
    </motion.div>
  );
}
