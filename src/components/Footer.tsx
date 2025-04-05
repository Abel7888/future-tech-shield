
import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-cyber-blue-dark border-t border-cyber-blue pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1 - Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-cyber-purple" />
              <span className="text-lg font-bold">FutureTech Shield</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Leading the way in emerging technology security solutions across industries.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors">Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors">Industries</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors">Insights</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors">Contact</a></li>
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
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-cyber-blue border-cyber-purple/20"
              />
              <Button className="bg-cyber-purple hover:bg-cyber-purple-light">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 FutureTech Shield. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-cyber-purple transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
