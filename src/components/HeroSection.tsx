
import React from 'react';
import { ArrowRight, Shield, Lock, UserCheck, AlertTriangle, Database, Wifi, Cpu, BarChart3, FileCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cyber-blue-dark bg-gradient-radial from-cyber-blue-dark via-cyber-blue-dark to-background opacity-60"></div>
        <div className="absolute inset-0 bg-cyber-pattern bg-[size:20px_20px] opacity-[0.03]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center mb-3 px-4 py-1.5 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple-light text-sm font-medium">
            <Shield size={16} className="mr-2" />
            B2B Cybersecurity Marketing Experts
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Marketing Emerging Tech Security Solutions Across Industries
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We connect innovative cybersecurity providers with decision-makers in healthcare, finance, commercial real estate, and supply chain management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cyber-btn cyber-glow text-base">
              Our Marketing Services <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" className="cyber-btn-outline text-base">
              Industry Expertise
            </Button>
          </div>
        </div>
        
        {/* Floating icons animation */}
        <div className="relative h-24 md:h-32 mt-16 max-w-4xl mx-auto">
          <div className="absolute grid grid-cols-4 md:grid-cols-8 gap-6 w-full">
            {[
              { Icon: Lock, delay: '0s' },
              { Icon: UserCheck, delay: '0.1s' },
              { Icon: AlertTriangle, delay: '0.2s' },
              { Icon: FileCode, delay: '0.3s' },
              { Icon: Wifi, delay: '0.4s' },
              { Icon: Cpu, delay: '0.5s' },
              { Icon: BarChart3, delay: '0.6s' },
              { Icon: Database, delay: '0.7s' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-14 w-14 rounded-xl bg-cyber-blue border border-cyber-purple/20 shadow-lg shadow-cyber-purple/5 animate-pulse-slow"
                style={{ animationDelay: item.delay }}
              >
                <item.Icon size={24} className="text-cyber-cyan" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
