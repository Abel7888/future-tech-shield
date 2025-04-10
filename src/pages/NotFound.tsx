
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center max-w-md px-4 py-16">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-cyber-purple mb-2">404</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Oops! Page not found
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
              The page at <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">{location.pathname}</code> could not be found.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              variant="default" 
              className="bg-cyber-purple hover:bg-cyber-purple-light"
              asChild
            >
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go to Home
              </Link>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
