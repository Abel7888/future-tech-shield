
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
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

const ArticleView = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Load articles from localStorage
    const savedArticles = localStorage.getItem('insights-articles');
    if (savedArticles) {
      const parsedArticles = JSON.parse(savedArticles);
      const publishedArticles = parsedArticles.filter((article: Article) => article.published);
      
      // Find the current article
      const currentArticle = publishedArticles.find((article: Article) => article.id === id);
      setArticle(currentArticle || null);
      
      // Find related articles in the same category (up to 3)
      if (currentArticle) {
        const related = publishedArticles
          .filter((article: Article) => article.id !== id && article.category === currentArticle.category)
          .slice(0, 3);
        setRelatedArticles(related);
      }
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 container mx-auto px-4">
          <div className="animate-pulse flex flex-col gap-4 max-w-3xl mx-auto">
            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-8"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for does not exist or has been removed.</p>
            <Link to="/insights">
              <Button variant="default" className="bg-cyber-purple hover:bg-cyber-purple-light">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Format the date in a readable way
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Function to render article content with paragraphs
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-6">{paragraph}</p>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <article className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/insights" className="inline-flex items-center text-cyber-purple-light hover:text-cyber-purple mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Insights
              </Link>
              
              <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-cyber-purple/20 flex items-center justify-center mr-2">
                    <User className="h-4 w-4 text-cyber-purple" />
                  </div>
                  <span>{article.author}</span>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-cyber-purple mr-2" />
                  <span>{formattedDate}</span>
                </div>
                
                <div className="flex items-center">
                  <Tag className="h-4 w-4 text-cyber-purple mr-2" />
                  <span>{article.category}</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-cyber-purple mr-2" />
                  <span>{Math.ceil(article.content.length / 600)} min read</span>
                </div>
              </div>
              
              <div className="border-t border-b border-border py-6 mb-8">
                <p className="text-xl font-medium text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {renderContent(article.content)}
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-12 bg-cyber-blue">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Link 
                      key={relatedArticle.id} 
                      to={`/insights/${relatedArticle.id}`}
                      className="cyber-card p-5 block hover:bg-card/50 transition-colors"
                    >
                      <h3 className="font-semibold mb-2">{relatedArticle.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{relatedArticle.excerpt}</p>
                      <span className="text-xs text-cyber-purple-light">
                        {new Date(relatedArticle.date).toLocaleDateString('en-US', { 
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleView;
