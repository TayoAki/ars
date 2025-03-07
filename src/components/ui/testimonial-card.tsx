
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function TestimonialCard({ handleShuffle, testimonial, position, id, author, image }: {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back";
  id: number;
  author: string;
  image?: string;
}) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
        opacity: position === "back" ? 0.5 : 1
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        // Handle different event types
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        dragRef.current = clientX;
      }}
      onDragEnd={(e) => {
        // Handle different event types
        const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
        if (dragRef.current - clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-amber-500/30 bg-black/[0.85] p-6 shadow-gold backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="absolute top-4 left-4">
        <Quote className="h-10 w-10 text-amber-500/30" />
      </div>

      <img
        src={image || `https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-24 w-24 rounded-full border-2 border-amber-500/40 bg-slate-200 object-cover"
      />
      
      <div className="flex items-center justify-center gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      
      <span className="text-center text-lg italic text-amber-100/80 line-clamp-5">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-amber-400">{author}</span>
    </motion.div>
  );
};
