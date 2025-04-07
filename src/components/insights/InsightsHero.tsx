
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface InsightsHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const InsightsHero: React.FC<InsightsHeroProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
}) => {
  return (
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
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
            <Input 
              placeholder="Search for insights..." 
              className="flex-grow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="default" className="bg-cyber-purple hover:bg-cyber-purple-light">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;
