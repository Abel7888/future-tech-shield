
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

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Industry Insights":
        return <Shield size={16} />;
      case "Technology Trends":
        return <Cpu size={16} />;
      case "Marketing Strategy":
        return <TrendingUp size={16} />;
      case "Case Studies":
        return <FileText size={16} />;
      case "Thought Leadership":
        return <Lock size={16} />;
      default:
        return <TrendingUp size={16} />;
    }
  };

  return (
    <div className="cyber-card p-6 flex flex-col h-full">
      <div className="mb-4">
        <span className="inline-flex items-center text-sm text-cyber-purple-light">
          {getIconForCategory(article.category)}
          <span className="ml-2">{article.category}</span>
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
};

export default ArticleCard;
