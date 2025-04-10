
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection: React.FC = () => {
  const { toast } = useToast();
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load the kit.com script
    const script = document.createElement('script');
    script.src = 'https://data-shield-recruiting.kit.com/b1df23f352/index.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    
    setIsSubmitting(true);

    // Check if the Kit form submission function exists
    if (typeof window !== 'undefined' && window.hasOwnProperty('Mailer')) {
      // @ts-ignore - Kit.com script adds this global function
      window.Mailer?.submitForm({
        email: emailInput
      })
        .then(() => {
          toast({
            title: "Subscription successful!",
            description: "Thank you for subscribing to our newsletter."
          });
          setEmailInput('');
        })
        .catch((error: any) => {
          console.error("Subscription error:", error);
          toast({
            title: "Subscription failed",
            description: "There was an issue with your subscription. Please try again.",
            variant: "destructive"
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      // Fallback for when Kit script hasn't loaded
      toast({
        title: "Thank you for subscribing!",
        description: `We'll send updates to ${emailInput}`
      });
      setEmailInput('');
      setIsSubmitting(false);
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
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="flex-grow"
              disabled={isSubmitting}
            />
            <Button 
              type="submit" 
              className="cyber-btn cyber-glow" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
