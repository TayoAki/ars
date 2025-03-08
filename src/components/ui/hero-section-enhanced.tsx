"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Icons } from "@/components/ui/icons";
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
export function HeroSectionEnhanced({
  badge,
  title,
  description,
  actions,
  image
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
  return <section className={cn("bg-background text-foreground", "py-12 sm:py-24 md:py-32 px-4", "fade-bottom overflow-hidden pb-0")}>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge}

          {/* Title */}
          

          {/* Description */}
          

          {/* Actions */}
          

          {/* Image with Glow */}
          <div className="relative pt-12">
            <MockupFrame size="small">
              <Mockup type="responsive">
                <img src={imageSrc} alt={image.alt} className="w-full h-full object-cover" />
              </Mockup>
            </MockupFrame>
            <Glow variant="top" />
          </div>
        </div>
      </div>
    </section>;
}

// Demo component to showcase the usage
export function HeroSectionEnhancedDemo() {
  return <HeroSectionEnhanced badge={{
    text: "Advanced security solutions",
    action: {
      text: "Learn about our approach",
      href: "/services"
    }
  }} title="Next-gen security for modern threats" description="Enterprise-grade protection systems built with cutting-edge technology. Safeguard your business with our comprehensive security solutions." actions={[{
    text: "Get a Free Assessment",
    href: "/contact",
    variant: "default"
  }, {
    text: "Our Technologies",
    href: "/technologies",
    variant: "glow",
    icon: <Icons.gitHub className="h-5 w-5" />
  }]} image={{
    light: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1248&h=765&auto=format&fit=crop",
    dark: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1248&h=765&auto=format&fit=crop",
    alt: "Advanced Security Systems"
  }} />;
}