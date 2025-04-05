
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SolutionsGrid from '@/components/SolutionsGrid';
import IndustriesGrid from '@/components/IndustriesGrid';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper, Lightbulb, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Solutions Grid */}
        <SolutionsGrid />
        
        {/* Industries Grid */}
        <IndustriesGrid />
        
        {/* Latest Insights Section */}
        <section className="py-16 md:py-24 bg-cyber-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Latest Security Insights
              </h2>
              <p className="text-muted-foreground text-lg">
                Expert analysis and thought leadership on the evolving cybersecurity landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Rise of AI-Driven Security Threats",
                  excerpt: "How artificial intelligence is being weaponized and what organizations can do to protect themselves.",
                  category: "Trend Analysis",
                  icon: TrendingUp
                },
                {
                  title: "Securing Healthcare Data in the Cloud Era",
                  excerpt: "Best practices for healthcare organizations transitioning to cloud-based data storage and management.",
                  category: "Industry Focus",
                  icon: Newspaper
                },
                {
                  title: "Post-Quantum Cryptography: What You Need to Know",
                  excerpt: "Preparing your organization's security infrastructure for the quantum computing revolution.",
                  category: "Innovation",
                  icon: Lightbulb
                }
              ].map((article, index) => (
                <div key={index} className="cyber-card p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-flex items-center text-sm text-cyber-purple-light">
                      <article.icon size={16} className="mr-2" />
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{article.excerpt}</p>
                  <Button variant="link" className="p-0 text-cyber-purple-light hover:text-cyber-purple justify-start">
                    Read more <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10">
                View All Insights
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-purple/10 -z-10"></div>
          <div className="absolute inset-0 bg-cyber-pattern bg-[size:20px_20px] opacity-[0.05] -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with our security experts to discuss how our solutions can address your specific challenges.
              </p>
              <Button className="cyber-btn cyber-glow text-base">
                Get in Touch <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
