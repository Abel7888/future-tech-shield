
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminHeader from '@/components/admin/AdminHeader';
import ArticleForm from '@/components/admin/ArticleForm';
import ArticlesList from '@/components/admin/ArticlesList';
import StorageWarning from '@/components/admin/StorageWarning';
import { useToast } from '@/hooks/use-toast';
import { Article } from '@/types';
import { getAllArticles, saveArticle, deleteArticle, isLocalStorageAvailable } from '@/services/articleService';

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [storageAvailable, setStorageAvailable] = useState(true);
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
    const available = isLocalStorageAvailable();
    setStorageAvailable(available);
    
    if (!available) {
      toast({
        title: "Storage Warning",
        description: "Local storage is not available. Articles will not persist between sessions.",
        variant: "destructive"
      });
    }
    
    try {
      const loadedArticles = getAllArticles();
      console.log('Admin page loaded articles:', loadedArticles.length);
      setArticles(loadedArticles);
    } catch (error) {
      console.error('Error loading articles:', error);
      toast({
        title: "Error",
        description: "Failed to load articles. Please try refreshing the page.",
        variant: "destructive"
      });
    }
  }, [toast]);

  const handleSaveArticle = () => {
    if (!currentArticle.title || !currentArticle.content) {
      toast({
        title: "Missing information",
        description: "Please provide a title and content for your article.",
        variant: "destructive"
      });
      return;
    }

    try {
      saveArticle({
        ...currentArticle,
        date: currentArticle.date || new Date().toISOString().split('T')[0]
      });
      
      setArticles(getAllArticles());
      
      toast({
        title: "Success",
        description: "Your article has been saved successfully."
      });
      
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
    } catch (error) {
      console.error('Error saving article:', error);
      toast({
        title: "Error",
        description: "Failed to save article. Please try again.",
        variant: "destructive"
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

    try {
      saveArticle({
        ...currentArticle,
        date: currentArticle.date || new Date().toISOString().split('T')[0],
        published: true
      });
      
      setArticles(getAllArticles());
      
      toast({
        title: "Published",
        description: "Your article has been published successfully."
      });
      
      navigate('/insights');
    } catch (error) {
      console.error('Error publishing article:', error);
      toast({
        title: "Error",
        description: "Failed to publish article. Please try again.",
        variant: "destructive"
      });
    }
  };

  const editArticle = (article: Article) => {
    setCurrentArticle(article);
  };

  const handleDeleteArticle = (id: string) => {
    try {
      deleteArticle(id);
      
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
    } catch (error) {
      console.error('Error deleting article:', error);
      toast({
        title: "Error",
        description: "Failed to delete article. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <AdminHeader 
          title="Admin Content Manager" 
          description="Create, edit and publish your insights and articles."
        />
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            {!storageAvailable && <StorageWarning />}
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-8/12">
                <ArticleForm
                  article={currentArticle}
                  setArticle={setCurrentArticle}
                  handleSaveArticle={handleSaveArticle}
                  publishArticle={publishArticle}
                />
              </div>
              
              <div className="lg:w-4/12">
                <ArticlesList
                  articles={articles}
                  editArticle={editArticle}
                  handleDeleteArticle={handleDeleteArticle}
                />
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
