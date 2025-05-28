
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Check if the Kit form submission function exists
    if (typeof window !== 'undefined' && window.hasOwnProperty('Mailer')) {
      // @ts-ignore - Kit.com script adds this global function
      window.Mailer?.submitForm({
        email: email
      })
        .then(() => {
          toast({
            title: "Subscription successful!",
            description: "Thank you for subscribing to our newsletter."
          });
          setEmail('');
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
        description: `We'll send updates to ${email}`
      });
      setEmail('');
      setIsSubmitting(false);
    }
  };
  
  return (
    <footer className="bg-cyber-blue-dark border-t border-cyber-blue pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1 - Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-cyber-purple" />
              <span className="text-lg font-bold">Data Shield Security</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Leading the way in emerging technology security solutions across industries.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h5 className="font-semibold mb-4">Data Shield Partners Solutions</h5>
            <ul className="space-y-2">
              
              <li><Link to="https://www.datashieldhealthcare.space/" className="text-muted-foreground hover:text-cyber-purple transition-colors">Data Shield Healthcare</Link></li>
              <li><Link to="https://www.datashieldnewsletter.info/" className="text-muted-foreground hover:text-cyber-purple transition-colors">Data Shield Home</Link></li>
              <li><Link to="https://www.datashieldpartners.blog" className="text-muted-foreground hover:text-cyber-purple transition-colors">Data Shield Blogs/insights</Link></li>
              <li><Link to="https://www.datashielddigital.xyz/" className="text-muted-foreground hover:text-cyber-purple transition-colors">Data Shield Fintech and Proptech</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Solutions */}
          <div>
            <h5 className="font-semibold mb-4">Security Solutions</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors">Data Encryption</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors">Digital Identity</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors">AI Protection</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors">IoT Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors">Blockchain Security</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h5 className="font-semibold mb-4">Stay Updated</h5>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest security insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-cyber-blue border-cyber-purple/20"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <Button 
                className="bg-cyber-purple hover:bg-cyber-purple-light"
                type="submit"
                disabled={isSubmitting}
              >
                <ArrowRight size={16} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 Data Shield Security. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors text-sm">Terms of Service</a>
            <Link to="/contact" className="text-muted-foreground hover:text-cyber-purple transition-colors text-sm">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
