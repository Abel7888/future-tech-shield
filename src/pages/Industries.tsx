
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IndustriesGrid from '@/components/IndustriesGrid';
import { Shield, Zap, Cpu, Building, ArrowRight, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Industries = () => {
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
                Industry-Focused Security Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We specialize in marketing cutting-edge data security technologies tailored to the unique challenges of each industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-8 flex flex-col items-start">
                <Shield className="w-10 h-10 text-cyber-purple mb-4" />
                <h3 className="text-xl font-bold mb-2">Industry-Specific Campaigns</h3>
                <p className="text-muted-foreground mb-6">
                  We craft data security marketing strategies that speak directly to the unique needs and regulatory requirements of each industry.
                </p>
                <Button variant="link" className="text-cyber-purple-light p-0">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
              
              <div className="cyber-card p-8 flex flex-col items-start">
                <Zap className="w-10 h-10 text-cyber-purple mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovative Go-To-Market</h3>
                <p className="text-muted-foreground mb-6">
                  Our campaigns bridge the gap between complex security technologies and the business leaders who need to understand their value.
                </p>
                <Button variant="link" className="text-cyber-purple-light p-0">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Industry Grid */}
        <IndustriesGrid />
        
        {/* Success Stories Section */}
        <section className="py-16 md:py-24 bg-cyber-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industry Success Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                How our marketing strategies have helped security companies break through in these key industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  industry: "Healthcare",
                  title: "Patient Data Protection Campaign",
                  result: "Helped a blockchain security startup increase leads from healthcare providers by 230% in 6 months."
                },
                {
                  industry: "Finance",
                  title: "Anti-Fraud Technology Launch",
                  result: "Positioned an AI security solution as the new standard in fraud detection, securing coverage in 15 finance publications."
                },
                {
                  industry: "Supply Chain",
                  title: "End-to-End Security Platform",
                  result: "Created an award-winning campaign that led to adoption by two Fortune 500 logistics companies."
                }
              ].map((story, index) => (
                <div key={index} className="cyber-card p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-flex items-center text-sm text-cyber-purple-light">
                      <Bookmark size={16} className="mr-2" />
                      {story.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{story.result}</p>
                  <Button variant="link" className="p-0 text-cyber-purple-light hover:text-cyber-purple justify-start">
                    Read case study <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-purple/10 -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Your Security Solution Stand Out?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We'll help you craft a marketing strategy that speaks to the specific needs of your target industry.
              </p>
              <Button className="cyber-btn cyber-glow text-base">
                Schedule a Consultation <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Industries;
