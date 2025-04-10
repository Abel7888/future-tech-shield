
import React from 'react';
import { Button } from '@/components/ui/button';
import { Article } from '@/types';
import { Tag, Clock } from 'lucide-react';

interface ArticlesListProps {
  articles: Article[];
  editArticle: (article: Article) => void;
  handleDeleteArticle: (id: string) => void;
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles, editArticle, handleDeleteArticle }) => {
  return (
    <div className="cyber-card p-6">
      <h2 className="text-xl font-bold mb-4">Your Articles</h2>
      
      {articles.length === 0 ? (
        <p className="text-muted-foreground">No articles yet. Start writing!</p>
      ) : (
        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.id} className="p-3 border border-border rounded-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{article.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${article.published ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                  {article.published ? 'Published' : 'Draft'}
                </span>
              </div>
              <div className="flex items-center text-xs text-muted-foreground mb-3">
                <Tag className="h-3 w-3 mr-1" />
                {article.category}
                <Clock className="h-3 w-3 mx-1 ml-2" />
                {new Date(article.date).toLocaleDateString()}
              </div>
              <div className="flex gap-2 mt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => editArticle(article)}
                >
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => handleDeleteArticle(article.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticlesList;
