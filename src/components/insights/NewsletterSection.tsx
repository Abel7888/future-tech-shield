
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      alert(`Thank you for subscribing with ${emailInput}! You'll receive our latest insights.`);
      setEmailInput('');
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-purple/10 -z-10"></div>
      <div className="absolute inset-0 bg-cyber-pattern bg-[size:20px_20px] opacity-[0.05] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated on Our Latest Insights</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter to receive our latest articles and security marketing perspectives directly to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" className="cyber-btn cyber-glow">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
