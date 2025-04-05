
import React from 'react';
import { Stethoscope, Landmark, Building2, HardHat, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  {
    title: "Healthcare",
    description: "Protecting patient data and securing healthcare infrastructure against evolving cyber threats.",
    icon: Stethoscope,
    bgClass: "from-blue-600/20 to-blue-800/20",
    borderClass: "border-blue-500/30"
  },
  {
    title: "Finance",
    description: "Safeguarding financial transactions, personal data, and critical banking infrastructure.",
    icon: Landmark,
    bgClass: "from-green-600/20 to-green-800/20",
    borderClass: "border-green-500/30"
  },
  {
    title: "Commercial Real Estate",
    description: "Securing smart buildings, IoT systems, and property management technologies.",
    icon: Building2,
    bgClass: "from-purple-600/20 to-purple-800/20",
    borderClass: "border-purple-500/30"
  },
  {
    title: "Construction",
    description: "Protecting digital blueprints, site security systems, and construction management platforms.",
    icon: HardHat,
    bgClass: "from-yellow-600/20 to-yellow-800/20",
    borderClass: "border-yellow-500/30"
  },
  {
    title: "Supply Chain & Logistics",
    description: "Ensuring end-to-end security across global supply chains and logistics networks.",
    icon: Truck,
    bgClass: "from-red-600/20 to-red-800/20",
    borderClass: "border-red-500/30"
  }
];

const IndustriesGrid = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cyber-pattern bg-[size:20px_20px] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Tailored security approaches for the unique challenges faced by different sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl p-6 border ${industry.borderClass} bg-gradient-to-br ${industry.bgClass} backdrop-blur-sm overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 p-4">
                <industry.icon className="h-8 w-8 text-white/50" />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                
                <Button variant="ghost" className="text-white/80 hover:text-white p-0 group-hover:underline">
                  Explore solutions
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
