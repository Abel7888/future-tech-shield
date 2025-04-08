
import { Article } from '@/types';

// Initial sample articles if the database is empty
const sampleArticles: Article[] = [
  {
    id: "1",
    title: "5 Ways AI is Transforming Cybersecurity in 2025",
    excerpt: "Artificial intelligence is revolutionizing how organizations detect and respond to security threats.",
    content: "Artificial intelligence has become a game-changer in the cybersecurity landscape. As threats evolve in sophistication, traditional security measures are no longer sufficient.\n\nIn this article, we explore five key ways AI is transforming cybersecurity practices in 2025:\n\n1. Advanced Threat Detection: AI algorithms can analyze patterns and identify anomalies that might indicate a security breach far faster than human analysts.\n\n2. Automated Response Systems: When threats are detected, AI can implement countermeasures in real-time, containing potential damage before it spreads.\n\n3. Predictive Security: By analyzing historical data, AI can predict potential vulnerabilities and future attack vectors, allowing organizations to strengthen defenses proactively.\n\n4. Natural Language Processing for Phishing Detection: AI can scan emails and messages to identify sophisticated phishing attempts that might bypass traditional filters.\n\n5. Continuous Learning: Security systems powered by AI continue to learn and adapt to new threats, creating an evolving defense mechanism that improves over time.",
    category: "Technology Trends",
    date: "2025-04-02",
    author: "Alex Rivera",
    published: true
  },
  {
    id: "2",
    title: "Building a Zero-Trust Security Architecture",
    excerpt: "Learn how to implement a zero-trust framework to protect your organization's critical assets.",
    content: "The traditional castle-and-moat approach to security is obsolete in today's interconnected digital landscape. Zero-trust security has emerged as the gold standard for protecting organizational assets.\n\nZero-trust operates on a simple principle: never trust, always verify. This means that no user or system, whether inside or outside the network, is trusted by default.\n\nImplementing a comprehensive zero-trust architecture involves several key components:\n\n1. Identity Verification: Strong authentication mechanisms for all users, including multi-factor authentication.\n\n2. Device Trust: Ensuring that only authorized and secure devices can access resources.\n\n3. Network Segmentation: Dividing the network into smaller segments to contain potential breaches.\n\n4. Least Privilege Access: Users only receive access to the specific resources they need to perform their job functions.\n\n5. Continuous Monitoring: Real-time monitoring of all activities across the network to detect suspicious behavior.\n\nBy adopting these principles, organizations can significantly reduce their attack surface and minimize the impact of potential breaches.",
    category: "Industry Insights",
    date: "2025-03-28",
    author: "Samantha Chen",
    published: true
  }
];

// LocalStorage key
const STORAGE_KEY = 'insights-articles';

// Function to get all articles
export const getAllArticles = (): Article[] => {
  try {
    const articlesJson = localStorage.getItem(STORAGE_KEY);
    if (!articlesJson) {
      // If no articles found, initialize with sample data
      saveArticles(sampleArticles);
      return sampleArticles;
    }
    return JSON.parse(articlesJson);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

// Function to get published articles
export const getPublishedArticles = (): Article[] => {
  const articles = getAllArticles();
  return articles.filter(article => article.published);
};

// Function to get an article by ID
export const getArticleById = (id: string): Article | null => {
  const articles = getAllArticles();
  return articles.find(article => article.id === id) || null;
};

// Function to save all articles
export const saveArticles = (articles: Article[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  } catch (error) {
    console.error('Error saving articles:', error);
  }
};

// Function to save a single article (create or update)
export const saveArticle = (article: Article): Article => {
  const articles = getAllArticles();
  const articleWithId = {
    ...article,
    id: article.id || Date.now().toString()
  };
  
  const existingIndex = articles.findIndex(a => a.id === articleWithId.id);
  if (existingIndex >= 0) {
    // Update existing article
    articles[existingIndex] = articleWithId;
  } else {
    // Add new article
    articles.push(articleWithId);
  }
  
  saveArticles(articles);
  return articleWithId;
};

// Function to delete an article
export const deleteArticle = (id: string): void => {
  const articles = getAllArticles();
  const updatedArticles = articles.filter(article => article.id !== id);
  saveArticles(updatedArticles);
};

// Function to seed initial data if needed
export const seedInitialData = (): void => {
  const articles = getAllArticles();
  if (articles.length === 0) {
    saveArticles(sampleArticles);
  }
};

