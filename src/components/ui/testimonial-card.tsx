
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

export function TestimonialCard({ handleShuffle, testimonial, position, id, author }: {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back" | "hidden";
  id: number;
  author: string;
}) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";
  const isHidden = position === "hidden";

  // Return null for hidden cards to avoid rendering them
  if (isHidden) {
    return null;
  }

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
        opacity: isHidden ? 0 : 1
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
      <img
        src={`https://i.pravatar.cc/128?img=${id + 10}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-amber-500/40 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-amber-100/80">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-amber-400">{author}</span>
    </motion.div>
  );
};
