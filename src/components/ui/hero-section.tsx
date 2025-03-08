
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

// Create Mockup and MockupFrame components
const MockupFrame = ({ 
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

const Mockup = ({ 
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

// Create Glow component
const Glow = ({ 
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

// Create a simple Icons object for the demo
const Icons = {
  gitHub: Github
};

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  // Simple theme implementation since next-themes is not available
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const resolvedTheme = theme;
  const imageSrc = resolvedTheme === "light" ? image.light : image.dark;

  // For demo purposes we'll detect system preference
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? "dark" : "light");
  }, []);

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "overflow-hidden pb-0"
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex justify-center gap-4">
            {actions.map((action, index) => (
              <Button 
                key={index} 
                variant={action.variant === "glow" ? "secondary" : "default"} 
                size="lg" 
                asChild
                className={action.variant === "glow" ? "bg-accent hover:bg-accent/80" : ""}
              >
                <a href={action.href} className="flex items-center gap-2">
                  {action.icon}
                  {action.text}
                </a>
              </Button>
            ))}
          </div>

          {/* Image with Glow */}
          <div className="relative pt-12">
            <MockupFrame size="small">
              <Mockup type="responsive">
                <img
                  src={imageSrc}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </Mockup>
            </MockupFrame>
            <Glow variant="top" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Export for demo usage
export function HeroSectionDemo() {
  return (
    <HeroSection
      badge={{
        text: "Introducing our new components",
        action: {
          text: "Learn more",
          href: "/docs",
        },
      }}
      title="Build faster with beautiful components"
      description="Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components."
      actions={[
        {
          text: "Get Started",
          href: "/docs/getting-started",
          variant: "default",
        },
        {
          text: "GitHub",
          href: "https://github.com/your-repo",
          variant: "glow",
          icon: <Icons.gitHub className="h-5 w-5" />,
        },
      ]}
      image={{
        light: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1248&h=765&auto=format&fit=crop",
        dark: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1248&h=765&auto=format&fit=crop",
        alt: "UI Components Preview",
      }}
    />
  );
}
