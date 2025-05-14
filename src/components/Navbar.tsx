
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Admin link is only visible when already on the admin page
  // This creates a "secret" admin access - users need to know the direct URL
  const showAdminLink = location.pathname === '/admin';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-cyber-purple" />
          <span className="text-xl font-bold text-foreground">Data Shield Security</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-cyber-purple transition-colors">Home</Link>
          <Link to="/industries" className="text-foreground hover:text-cyber-purple transition-colors"></Link>
          <Link to="/solutions" className="text-foreground hover:text-cyber-purple transition-colors"></Link>
          <Link to="/about" className="text-foreground hover:text-cyber-purple transition-colors"></Link>
          {showAdminLink && (
            <Link to="/admin" className="text-foreground hover:text-cyber-purple transition-colors"></Link>
          )}
          <Link to="/contact">
          
            <Button variant="default" className="bg-cyber-purple hover:bg-cyber-purple-light ml-2">
              
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-foreground" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 bg-background border-t border-border">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link to="/" className="text-foreground hover:text-cyber-purple transition-colors py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/industries" className="text-foreground hover:text-cyber-purple transition-colors py-2" onClick={toggleMenu}></Link>
            <Link to="/solutions" className="text-foreground hover:text-cyber-purple transition-colors py-2" onClick={toggleMenu}></Link>
            <Link to="/about" className="text-foreground hover:text-cyber-purple transition-colors py-2" onClick={toggleMenu}></Link>
            {showAdminLink && (
              <Link to="/admin" className="text-foreground hover:text-cyber-purple transition-colors py-2" onClick={toggleMenu}></Link>
            )}
            <Link to="/contact" onClick={toggleMenu}>
              <Button variant="default" className="bg-cyber-purple hover:bg-cyber-purple-light w-full">
                
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
