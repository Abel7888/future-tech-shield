import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Save, Clock, Tag, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Article } from '@/types';
import { getAllArticles, saveArticle, deleteArticle } from '@/services/articleService';

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentArticle, setCurrentArticle] = useState<Article>({
    id: '',
    title: '',
    excerpt: '',
    content: '',
    category: 'Marketing Strategy',
    date: new Date().toISOString().split('T')[0],
    author: 'Admin',
    published: false
  });

  useEffect(() => {
    // Load articles using the service
    const loadedArticles = getAllArticles();
    setArticles(loadedArticles);
  }, []);

  const handleSaveArticle = () => {
    if (!currentArticle.title || !currentArticle.content) {
      toast({
        title: "Missing information",
        description: "Please provide a title and content for your article.",
        variant: "destructive"
      });
      return;
    }

    const savedArticle = saveArticle({
      ...currentArticle,
      date: currentArticle.date || new Date().toISOString().split('T')[0]
    });
    
    // Refresh the articles list
    setArticles(getAllArticles());
    
    toast({
      title: "Success",
      description: "Your article has been saved successfully."
    });
    
    // Reset form if it was a new article
    if (!currentArticle.id) {
      setCurrentArticle({
        id: '',
        title: '',
        excerpt: '',
        content: '',
        category: 'Marketing Strategy',
        date: new Date().toISOString().split('T')[0],
        author: 'Admin',
        published: false
      });
    }
  };

  const publishArticle = () => {
    if (!currentArticle.title || !currentArticle.content || !currentArticle.excerpt) {
      toast({
        title: "Missing information",
        description: "Please provide a title, excerpt, and content for your article.",
        variant: "destructive"
      });
      return;
    }

    const publishedArticle = saveArticle({
      ...currentArticle,
      date: currentArticle.date || new Date().toISOString().split('T')[0],
      published: true
    });
    
    // Refresh the articles list
    setArticles(getAllArticles());
    
    toast({
      title: "Published",
      description: "Your article has been published successfully."
    });
    
    // Navigate to insights page to see the published content
    navigate('/insights');
  };

  const editArticle = (article: Article) => {
    setCurrentArticle(article);
  };

  const handleDeleteArticle = (id: string) => {
    deleteArticle(id);
    
    // Refresh the articles list
    setArticles(getAllArticles());
    
    toast({
      title: "Deleted",
      description: "The article has been deleted."
    });
    
    if (currentArticle.id === id) {
      setCurrentArticle({
        id: '',
        title: '',
        excerpt: '',
        content: '',
        category: 'Marketing Strategy',
        date: new Date().toISOString().split('T')[0],
        author: 'Admin',
        published: false
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-pattern bg-[size:20px_20px] opacity-[0.05] -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Admin Content Manager
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Create, edit and publish your insights and articles.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Editor */}
              <div className="lg:w-8/12">
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
                        value={currentArticle.title}
                        onChange={(e) => setCurrentArticle({...currentArticle, title: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="excerpt" className="block text-sm font-medium mb-1">
                        Short Excerpt
                      </label>
                      <Textarea
                        id="excerpt"
                        placeholder="Enter a brief description (will appear in article cards)"
                        value={currentArticle.excerpt}
                        onChange={(e) => setCurrentArticle({...currentArticle, excerpt: e.target.value})}
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
                          value={currentArticle.category}
                          onChange={(e) => setCurrentArticle({...currentArticle, category: e.target.value})}
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
                          value={currentArticle.date}
                          onChange={(e) => setCurrentArticle({...currentArticle, date: e.target.value})}
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
                        value={currentArticle.content}
                        onChange={(e) => setCurrentArticle({...currentArticle, content: e.target.value})}
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
              </div>
              
              {/* Saved Articles */}
              <div className="lg:w-4/12">
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
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
