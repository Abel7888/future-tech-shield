import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Shield, Cpu, Lock, FileText, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Insights = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-pattern bg-[size:20px_20px] opacity-[0.05] -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Security Technology Insights
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert perspectives on marketing emerging security solutions from our team of specialists.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
                <Input 
                  placeholder="Search for insights..." 
                  className="flex-grow"
                />
                <Button variant="default" className="bg-cyber-purple hover:bg-cyber-purple-light">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Article */}
        <section className="py-12 bg-cyber-blue">
          <div className="container mx-auto px-4">
            <div className="cyber-card p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-3/5">
                  <span className="inline-flex items-center text-sm text-cyber-purple-light mb-4">
                    <TrendingUp size={16} className="mr-2" />
                    Featured Article
                  </span>
                  <h2 className="text-3xl font-bold mb-4">The Art of Marketing Complex Security Technologies</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    How to bridge the gap between technical innovations and business value in your marketing campaigns.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                      <span className="font-bold text-cyber-purple-light">AC</span>
                    </div>
                    <div>
                      <p className="font-medium">Alex Chen</p>
                      <p className="text-sm text-muted-foreground">May 15, 2025 • 8 min read</p>
                    </div>
                  </div>
                  <Button className="bg-cyber-purple hover:bg-cyber-purple-light">
                    Read Full Article <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
                <div className="md:w-2/5 flex items-center justify-center">
                  <div className="w-full h-64 bg-gradient-to-br from-cyber-purple/40 to-cyber-purple/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-24 h-24 text-cyber-purple" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
              <div className="flex flex-wrap gap-2">
                {["All Articles", "Marketing Strategy", "Industry Insights", "Technology Trends", "Case Studies", "Thought Leadership"].map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className={index === 0 ? "bg-cyber-purple hover:bg-cyber-purple-light" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Articles Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Positioning AI Security Solutions in a Crowded Market",
                  excerpt: "Strategies for differentiating your AI security technology in marketing campaigns.",
                  category: "Marketing Strategy",
                  icon: Cpu,
                  date: "April 28, 2025"
                },
                {
                  title: "Healthcare Security Marketing: Navigating Compliance in Your Messaging",
                  excerpt: "How to balance technical innovation with regulatory requirements in healthcare security marketing.",
                  category: "Industry Insights",
                  icon: Shield,
                  date: "April 22, 2025"
                },
                {
                  title: "The Evolution of Encryption: Marketing Next-Gen Solutions",
                  excerpt: "Best practices for communicating the business value of advanced encryption technologies.",
                  category: "Technology Trends",
                  icon: Lock,
                  date: "April 15, 2025"
                },
                {
                  title: "Case Study: Launching a Quantum-Safe Security Solution",
                  excerpt: "How we positioned a startup's quantum-resistant encryption for rapid enterprise adoption.",
                  category: "Case Studies",
                  icon: FileText,
                  date: "April 10, 2025"
                },
                {
                  title: "Security Decision Makers: Understanding the New Buying Committee",
                  excerpt: "Mapping the evolving landscape of security technology purchase decisions.",
                  category: "Marketing Strategy",
                  icon: TrendingUp,
                  date: "April 3, 2025"
                },
                {
                  title: "From Technical Features to Business Outcomes: The Security Messaging Shift",
                  excerpt: "Why effective security marketing focuses on business impact rather than technical specifications.",
                  category: "Thought Leadership",
                  icon: TrendingUp,
                  date: "March 29, 2025"
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
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <Button variant="link" className="p-0 text-cyber-purple-light hover:text-cyber-purple">
                      Read more <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section - Modified to emphasize subscription without submission */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-purple/10 -z-10"></div>
          <div className="absolute inset-0 bg-cyber-pattern bg-[size:20px_20px] opacity-[0.05] -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated on Our Latest Insights</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter to receive our latest articles and security marketing perspectives directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  type="email"
                  className="flex-grow"
                />
                <Button className="cyber-btn cyber-glow">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Insights;
