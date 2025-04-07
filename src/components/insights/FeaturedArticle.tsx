
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Cpu, FileText, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Industry Insights":
        return <Shield className="w-24 h-24 text-cyber-purple" />;
      case "Technology Trends":
        return <Cpu className="w-24 h-24 text-cyber-purple" />;
      case "Marketing Strategy":
        return <TrendingUp className="w-24 h-24 text-cyber-purple" />;
      case "Case Studies":
        return <FileText className="w-24 h-24 text-cyber-purple" />;
      case "Thought Leadership":
        return <Lock className="w-24 h-24 text-cyber-purple" />;
      default:
        return <TrendingUp className="w-24 h-24 text-cyber-purple" />;
    }
  };

  return (
    <section className="py-12 bg-cyber-blue">
      <div className="container mx-auto px-4">
        <div className="cyber-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/5">
              <span className="inline-flex items-center text-sm text-cyber-purple-light mb-4">
                <TrendingUp size={16} className="mr-2" />
                Featured Article
              </span>
              <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                  <span className="font-bold text-cyber-purple-light">
                    {article.author.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{article.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
              <Link to={`/insights/${article.id}`}>
                <Button className="bg-cyber-purple hover:bg-cyber-purple-light">
                  Read Full Article <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="md:w-2/5 flex items-center justify-center">
              <div className="w-full h-64 bg-gradient-to-br from-cyber-purple/40 to-cyber-purple/20 rounded-xl flex items-center justify-center">
                {getIconForCategory(article.category)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
