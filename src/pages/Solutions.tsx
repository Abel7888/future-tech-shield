
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsGrid from '@/components/SolutionsGrid';
import { Shield, Database, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-pattern bg-[size:20px_20px] opacity-[0.05] -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced Security Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our cutting-edge technologies addressing the most critical security challenges in emerging tech.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-8 flex flex-col items-start">
                <Shield className="w-10 h-10 text-cyber-purple mb-4" />
                <h3 className="text-xl font-bold mb-2">Enterprise-Grade Protection</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive security solutions designed to protect critical infrastructure and sensitive data across your organization.
                </p>
              </div>
              
              <div className="cyber-card p-8 flex flex-col items-start">
                <Database className="w-10 h-10 text-cyber-purple mb-4" />
                <h3 className="text-xl font-bold mb-2">Data-Centric Security</h3>
                <p className="text-muted-foreground mb-6">
                  Advanced encryption and protection mechanisms that follow your data wherever it goes, from cloud to edge.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions Grid */}
        <SolutionsGrid />
        
        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-purple/10 -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with our security experts to discuss how our solutions can address your specific challenges.
              </p>
              <Button className="cyber-btn cyber-glow text-base" asChild>
                <Link to="/contact">Get in Touch <ArrowRight size={18} className="ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;
