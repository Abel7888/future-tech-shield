
import React from 'react';
import ArticleCard from './ArticleCard';

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

interface ArticlesGridProps {
  articles: Article[];
}

const ArticlesGrid: React.FC<ArticlesGridProps> = ({ articles }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-lg text-muted-foreground">No articles found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesGrid;
