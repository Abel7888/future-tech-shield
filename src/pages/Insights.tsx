
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InsightsHero from '@/components/insights/InsightsHero';
import FeaturedArticle from '@/components/insights/FeaturedArticle';
import CategoriesSection from '@/components/insights/CategoriesSection';
import ArticlesGrid from '@/components/insights/ArticlesGrid';
import NewsletterSection from '@/components/insights/NewsletterSection';
import { Article } from '@/types';
import { getPublishedArticles } from '@/services/articleService';

const Insights = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Articles');

  useEffect(() => {
    // Load published articles using the service
    const publishedArticles = getPublishedArticles();
    console.log('Insights page loaded articles:', publishedArticles.length);
    setArticles(publishedArticles);
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
        <InsightsHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        
        {/* Featured Article */}
        {featuredArticle && <FeaturedArticle article={featuredArticle} />}
        
        {/* Categories Section */}
        <CategoriesSection 
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        {/* Articles Grid */}
        <ArticlesGrid articles={filteredArticles} />
        
        {/* Newsletter Section */}
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Insights;
