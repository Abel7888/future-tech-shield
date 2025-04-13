import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cpu, Code, TrendingUp, Users, Shield, MessageSquare, Rocket, Target, ArrowRight, Mail, Building, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-pattern bg-[size:20px_20px] opacity-[0.05] -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Marketing Emerging Tech Security Solutions
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    We're the leading B2B agency bridging complex security innovations and the businesses that need them.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-cyber-purple/30 to-cyber-purple rounded-full flex items-center justify-center">
                    <Shield className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter & Reach Section */}
        <section className="py-16 bg-gradient-to-r from-cyber-blue-dark to-cyber-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="cyber-card p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Industry-Leading Reach
                </h2>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <div className="flex items-center mb-4">
                      <Mail className="w-8 h-8 text-cyber-purple mr-3" />
                      <h3 className="text-2xl font-semibold">Our Newsletter</h3>
                    </div>
                    <p className="text-lg mb-6">
                      Our cybersecurity insights newsletter reaches over <span className="font-bold text-cyber-purple">40,000 C-level executives</span> including CEOs, CTOs, and CIOs across high-value industries.
                    </p>
                    <Button className="cyber-btn cyber-glow">
                      Subscribe Now <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4">Key Industries We Serve:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-cyber-purple mr-2" />
                        <span>Healthcare</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-5 h-5 text-cyber-purple mr-2" />
                        <span>Finance</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-cyber-purple mr-2" />
                        <span>Commercial Real Estate</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-cyber-purple mr-2" />
                        <span>Supply Chain</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-cyber-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-xl">
                To accelerate the adoption of innovative security technologies through expert marketing and advertising strategies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 flex flex-col items-center text-center">
                <Cpu className="w-12 h-12 text-cyber-purple mb-4" />
                <h3 className="text-xl font-bold mb-3">Emerging Tech Focus</h3>
                <p className="text-muted-foreground">
                  We specialize exclusively in marketing advanced security technologies that will define the future.
                </p>
              </div>
              
              <div className="cyber-card p-8 flex flex-col items-center text-center">
                <TrendingUp className="w-12 h-12 text-cyber-purple mb-4" />
                <h3 className="text-xl font-bold mb-3">Market Acceleration</h3>
                <p className="text-muted-foreground">
                  We help security innovators find their market fit and accelerate adoption across industries.
                </p>
              </div>
              
              <div className="cyber-card p-8 flex flex-col items-center text-center">
                <Target className="w-12 h-12 text-cyber-purple mb-4" />
                <h3 className="text-xl font-bold mb-3">Precision Targeting</h3>
                <p className="text-muted-foreground">
                  We connect security solutions with the exact decision-makers who need them most.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Expert Team
              </h2>
              <p className="text-lg text-muted-foreground">
                A blend of cybersecurity knowledge and marketing expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Abel Assefa",
                  role: "Marketing & Software Engineer",
                  background: "Experienced in tech marketing and software development"
                },
                {
                  name: "Sarah Novak",
                  role: "Marketing Director",
                  background: "Specialized in B2B tech marketing for a decade"
                },
                {
                  name: "Michael Peters",
                  role: "Technology Strategist",
                  background: "Expert in translating complex tech for business leaders"
                },
                {
                  name: "Leila Johnson",
                  role: "Content Director",
                  background: "Award-winning tech journalist and communications expert"
                }
              ].map((member, index) => (
                <div key={index} className="cyber-card p-6 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyber-purple/20 to-cyber-purple/40 mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-cyber-purple-light" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-cyber-purple-light mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.background}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Industry Engagement Section */}
        <section className="py-16 bg-cyber-blue/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How We Engage With Industry Leaders</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="cyber-card p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-cyber-purple" />
                    Thought Leadership
                  </h3>
                  <p className="text-muted-foreground">
                    We highlight emerging cybersecurity threats and trends through our industry-leading newsletter, reaching decision-makers who need to stay ahead of evolving risks.
                  </p>
                </div>
                
                <div className="cyber-card p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-cyber-purple" />
                    Solution Spotlight
                  </h3>
                  <p className="text-muted-foreground">
                    We partner with innovative security providers to showcase solutions making real impact against today's most sophisticated threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Approach Section */}
        <section className="py-16 md:py-24 bg-cyber-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Approach
              </h2>
              <p className="text-lg text-muted-foreground">
                How we help security innovators break through the noise.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="cyber-card p-8">
                  <Code className="w-10 h-10 text-cyber-purple mb-4" />
                  <h3 className="text-xl font-bold mb-3">Technical Translation</h3>
                  <p className="text-muted-foreground mb-4">
                    We transform complex security technology into compelling narratives that resonate with non-technical decision makers.
                  </p>
                </div>
                
                <div className="cyber-card p-8">
                  <MessageSquare className="w-10 h-10 text-cyber-purple mb-4" />
                  <h3 className="text-xl font-bold mb-3">Industry-Specific Messaging</h3>
                  <p className="text-muted-foreground mb-4">
                    We craft targeted content that speaks directly to the unique security challenges of each industry.
                  </p>
                </div>
                
                <div className="cyber-card p-8">
                  <TrendingUp className="w-10 h-10 text-cyber-purple mb-4" />
                  <h3 className="text-xl font-bold mb-3">Market Positioning</h3>
                  <p className="text-muted-foreground mb-4">
                    We position your security solution within the competitive landscape to highlight your unique advantages.
                  </p>
                </div>
                
                <div className="cyber-card p-8">
                  <Rocket className="w-10 h-10 text-cyber-purple mb-4" />
                  <h3 className="text-xl font-bold mb-3">Go-to-Market Strategy</h3>
                  <p className="text-muted-foreground mb-4">
                    We design comprehensive launch strategies that generate momentum and capture market attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-purple/10 -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Amplify Your Security Innovation?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can help market your emerging tech security solution.
              </p>
              <Button className="cyber-btn cyber-glow text-base">
                Contact Our Team <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
