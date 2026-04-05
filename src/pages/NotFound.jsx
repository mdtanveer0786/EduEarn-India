import { Link } from 'react-router-dom';
import { Home, ArrowLeft, SearchX } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="not-found-page min-h-screen flex items-center justify-center text-center px-4">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="relative mb-8">
          <h1 className="text-9xl font-extrabold text-primary-blue opacity-20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <SearchX size={48} className="text-primary-blue" />
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-outline">
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
