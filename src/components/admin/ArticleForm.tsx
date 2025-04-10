
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Save, Send } from 'lucide-react';
import { Article } from '@/types';

interface ArticleFormProps {
  article: Article;
  setArticle: React.Dispatch<React.SetStateAction<Article>>;
  handleSaveArticle: () => void;
  publishArticle: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ 
  article, 
  setArticle, 
  handleSaveArticle, 
  publishArticle 
}) => {
  return (
    <div className="cyber-card p-6">
      <h2 className="text-xl font-bold mb-4">Content Editor</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Article Title
          </label>
          <Input
            id="title"
            placeholder="Enter article title"
            value={article.title}
            onChange={(e) => setArticle({...article, title: e.target.value})}
          />
        </div>
        
        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium mb-1">
            Short Excerpt
          </label>
          <Textarea
            id="excerpt"
            placeholder="Enter a brief description (will appear in article cards)"
            value={article.excerpt}
            onChange={(e) => setArticle({...article, excerpt: e.target.value})}
            className="min-h-[80px]"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1">
              Category
            </label>
            <select
              id="category"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              value={article.category}
              onChange={(e) => setArticle({...article, category: e.target.value})}
            >
              <option value="Marketing Strategy">Marketing Strategy</option>
              <option value="Industry Insights">Industry Insights</option>
              <option value="Technology Trends">Technology Trends</option>
              <option value="Case Studies">Case Studies</option>
              <option value="Thought Leadership">Thought Leadership</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Publish Date
            </label>
            <Input
              id="date"
              type="date"
              value={article.date}
              onChange={(e) => setArticle({...article, date: e.target.value})}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Article Content
          </label>
          <Textarea
            id="content"
            placeholder="Write your article content here..."
            value={article.content}
            onChange={(e) => setArticle({...article, content: e.target.value})}
            className="min-h-[400px]"
          />
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={handleSaveArticle}
          >
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Button 
            className="bg-cyber-purple hover:bg-cyber-purple-light" 
            onClick={publishArticle}
          >
            <Send className="mr-2 h-4 w-4" />
            Publish Article
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;
