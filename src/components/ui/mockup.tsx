
import { cn } from "@/lib/utils";
import React from "react";

export const MockupFrame = ({ 
  children, 
  className,
  size = "regular"
}: { 
  children: React.ReactNode; 
  className?: string;
  size?: "small" | "regular" | "large";
}) => {
  return (
    <div className={cn(
      "relative rounded-xl border border-border bg-card p-2 shadow-md",
      size === "small" && "max-w-3xl mx-auto",
      size === "regular" && "max-w-4xl mx-auto",
      size === "large" && "max-w-5xl mx-auto",
      className
    )}>
      {children}
    </div>
  );
};

export const Mockup = ({ 
  children, 
  type = "basic" 
}: { 
  children: React.ReactNode; 
  type?: "basic" | "responsive" | "window";
}) => {
  return (
    <div className={cn(
      "overflow-hidden rounded-lg",
      type === "window" && "ring-1 ring-border",
      type === "responsive" && "bg-card shadow-lg"
    )}>
      {type === "window" && (
        <div className="flex items-center gap-1.5 border-b border-border bg-muted p-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
        </div>
      )}
      <div className="aspect-[16/9] overflow-hidden">
        {children}
      </div>
    </div>
  );
};
