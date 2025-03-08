
import { cn } from "@/lib/utils";
import React from "react";

export const Glow = ({ 
  variant = "center",
  className 
}: { 
  variant?: "center" | "top" | "bottom" | "left" | "right";
  className?: string;
}) => {
  return (
    <div 
      className={cn(
        "absolute -z-10 h-40 w-80 bg-primary/20 blur-3xl",
        variant === "center" && "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        variant === "top" && "left-1/2 top-0 -translate-x-1/2",
        variant === "bottom" && "bottom-0 left-1/2 -translate-x-1/2",
        variant === "left" && "left-0 top-1/2 -translate-y-1/2",
        variant === "right" && "right-0 top-1/2 -translate-y-1/2",
        className
      )}
    />
  );
};
