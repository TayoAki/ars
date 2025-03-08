
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function SatisfactionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-[450px] w-[350px] rounded-2xl border-2 border-amber-500/30 bg-black/[0.85] p-8 shadow-gold backdrop-blur-md flex flex-col"
    >
      <h3 className="text-center text-2xl font-bold text-gradient-gold mb-4">
        100% Client Satisfaction
      </h3>
      
      <p className="text-center text-amber-100/80 mb-8">
        Our commitment to excellence has earned us a perfect satisfaction rating from our clients. 
        We prioritize building long-term relationships based on trust, reliability, and exceptional service.
      </p>
      
      <div className="grid grid-cols-2 gap-6 mt-auto">
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-400 mb-1">150+</div>
          <div className="text-sm text-amber-300/70">VIP Clients</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-400 mb-1">15+</div>
          <div className="text-sm text-amber-300/70">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-400 mb-1">24/7</div>
          <div className="text-sm text-amber-300/70">Availability</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-400 mb-1">0</div>
          <div className="text-sm text-amber-300/70">Security Breaches</div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-amber-500/20">
        <div className="flex items-center gap-2 justify-center">
          <Check className="h-5 w-5 text-amber-400" />
          <span className="text-amber-300">Trusted by industry leaders</span>
        </div>
      </div>
    </motion.div>
  );
}
