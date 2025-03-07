
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "24/7 Protection Services",
      description:
        "Our security team is available around the clock to ensure your safety at any time.",
      icon: <IconCloud className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Trained Security Personnel",
      description:
        "Highly skilled and certified security professionals trained in the latest protection techniques.",
      icon: <IconTerminal2 className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Customized Security Plans",
      description:
        "Tailored security solutions designed specifically for your unique requirements and concerns.",
      icon: <IconEaseInOut className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Executive Protection",
      description: "Specialized security services for high-profile individuals and executives.",
      icon: <IconCurrencyDollar className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Event Security",
      description:
        "Comprehensive security coverage for public and private events of any scale.",
      icon: <IconRouteAltLeft className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Residential Security",
      description:
        "Complete protection for your home and family with discreet and effective security measures.",
      icon: <IconHelp className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Advanced Technology",
      description:
        "Utilizing cutting-edge security technology and monitoring systems for enhanced protection.",
      icon: <IconAdjustmentsBolt className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Client-Focused Service",
      description: "We prioritize your safety, comfort, and peace of mind above all else.",
      icon: <IconHeart className="h-6 w-6 text-amber-500" />,
    },
  ];
  return (
    <section className="w-full py-20 px-4 bg-black/5">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6 tracking-wider">
          OUR SERVICES
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Elite <span className="text-gradient-gold">Protection</span> Services
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive security solutions delivered by our experienced team of security professionals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto border border-amber-500/20 rounded-lg overflow-hidden">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-amber-500/20 py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l border-amber-500/20",
        index < 4 && "lg:border-b border-amber-500/20"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-amber-950/30 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-amber-950/30 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-amber-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-amber-700/30 group-hover/feature:bg-amber-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-amber-400">
          {title}
        </span>
      </div>
      <p className="text-sm text-amber-400/70 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
