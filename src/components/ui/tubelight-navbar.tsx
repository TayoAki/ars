
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({
  items,
  className
}: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={cn("fixed bottom-4 left-1/2 -translate-x-1/2 z-50", className)}>
      <div className="relative">
        <div className={cn(
          "flex p-2 gap-2 bg-black/20 backdrop-blur-lg rounded-full",
          "border border-amber-500/30 shadow-lg"
        )}>
          {items.map((item) => {
            const isActive = activeTab === item.name;
            
            return (
              <button
                key={item.name}
                className={cn(
                  "relative rounded-full p-2 text-amber-200/70 hover:text-amber-200 transition-colors",
                  "md:px-4",
                  isActive && "text-amber-400"
                )}
                onClick={() => setActiveTab(item.name)}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  {!isMobile && <span className="hidden md:inline-block">{item.name}</span>}
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="navbarGlow"
                    className="absolute inset-0 rounded-full bg-amber-400/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full blur-xl bg-amber-400/20 -z-10" />
      </div>
    </div>
  );
}
