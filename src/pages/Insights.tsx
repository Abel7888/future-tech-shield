
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Shield, Cpu, Lock, FileText, Search, Tag, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  published: boolean;
}

const Insights = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [emailInput, setEmailInput] = useState('');

  useEffect(() => {
    // Load published articles from localStorage
    const savedArticles = localStorage.getItem('insights-articles');
    if (savedArticles) {
      const parsedArticles = JSON.parse(savedArticles);
      // Only show published articles
      const publishedArticles = parsedArticles.filter((article: Article) => article.published);
      setArticles(publishedArticles);
    }
  }, []);

  // Filter articles based on search query and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Articles' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // No need to do anything, the articles are already filtered by the searchQuery state
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      alert(`Thank you for subscribing with ${emailInput}! You'll receive our latest insights.`);
      setEmailInput('');
    }
  };

  // Get all categories from articles, plus "All Articles"
  const categories = ['All Articles', ...new Set(articles.map(article => article.category))];

  // Get featured article (most recent)
  const featuredArticle = articles.length > 0 
    ? [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
    : null;

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
        
        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-12 bg-cyber-blue">
            <div className="container mx-auto px-4">
              <div className="cyber-card p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-3/5">
                    <span className="inline-flex items-center text-sm text-cyber-purple-light mb-4">
                      <TrendingUp size={16} className="mr-2" />
                      Featured Article
                    </span>
                    <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                        <span className="font-bold text-cyber-purple-light">
                          {featuredArticle.author.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{featuredArticle.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(featuredArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      </div>
                    </div>
                    <Link to={`/insights/${featuredArticle.id}`}>
                      <Button className="bg-cyber-purple hover:bg-cyber-purple-light">
                        Read Full Article <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                  <div className="md:w-2/5 flex items-center justify-center">
                    <div className="w-full h-64 bg-gradient-to-br from-cyber-purple/40 to-cyber-purple/20 rounded-xl flex items-center justify-center">
                      {/* Choose icon based on category */}
                      {featuredArticle.category === "Industry Insights" && <Shield className="w-24 h-24 text-cyber-purple" />}
                      {featuredArticle.category === "Technology Trends" && <Cpu className="w-24 h-24 text-cyber-purple" />}
                      {featuredArticle.category === "Marketing Strategy" && <TrendingUp className="w-24 h-24 text-cyber-purple" />}
                      {featuredArticle.category === "Case Studies" && <FileText className="w-24 h-24 text-cyber-purple" />}
                      {featuredArticle.category === "Thought Leadership" && <Lock className="w-24 h-24 text-cyber-purple" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Categories Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category ? "bg-cyber-purple hover:bg-cyber-purple-light" : ""}
                    onClick={() => setSelectedCategory(category)}
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
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredArticles.map((article) => {
                  const IconComponent = 
                    article.category === "Industry Insights" ? Shield :
                    article.category === "Technology Trends" ? Cpu :
                    article.category === "Case Studies" ? FileText :
                    article.category === "Thought Leadership" ? Lock :
                    TrendingUp; // Default for "Marketing Strategy"

                  return (
                    <div key={article.id} className="cyber-card p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <span className="inline-flex items-center text-sm text-cyber-purple-light">
                          <IconComponent size={16} className="mr-2" />
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                      <p className="text-muted-foreground mb-6 flex-grow">{article.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <Link to={`/insights/${article.id}`}>
                          <Button variant="link" className="p-0 text-cyber-purple-light hover:text-cyber-purple">
                            Read more <ArrowRight size={16} className="ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-lg text-muted-foreground">No articles found.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Insights;
