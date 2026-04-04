import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Newspaper, BookOpen, AlertCircle, ArrowRight, Mail, Sparkles } from 'lucide-react';
import PostCard from '../components/PostCard';
import postsData from '../data/posts.json';
import SEO from '../components/SEO';

const Blog = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'all';

  const [posts, setPosts] = useState(postsData);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'online-earning', name: 'Online Earning' },
    { id: 'trading-basics', name: 'Trading Basics' },
    { id: 'digital-skills', name: 'Digital Skills' },
    { id: 'tech', name: 'Tech & Web' }
  ];

  useEffect(() => {
    let filtered = postsData;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query)
      );
    }

    setPosts(filtered);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    const cat = queryParams.get('category') || 'all';
    setActiveCategory(cat);
  }, [location.search]);

  return (
    <div className="blog-page pb-20">
      <SEO 
        title="Educational Blog" 
        description="Explore our latest articles on digital skills, online earning, and trading basics. Purely educational content for Indian learners."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
              <Newspaper size={16} />
              <span>Knowledge Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Educational <span className="text-primary-blue">Resources</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              In-depth guides, expert insights, and practical tutorials designed to help you navigate the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <div className="sticky top-[72px] z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-y border-gray-100 dark:border-gray-800 py-6 mb-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto no-scrollbar">
              <SlidersHorizontal size={20} className="text-muted flex-shrink-0 mr-2" />
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`px-5 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat.id 
                      ? 'bg-primary-blue text-white shadow-lg shadow-blue-500/25' 
                      : 'bg-surface-alt text-muted hover:bg-gray-200 dark:hover:bg-gray-800 border-main'
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-surface-alt border-main rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary-blue text-sm transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="min-h-[400px]">
        <div className="container">
          <AnimatePresence mode="popLayout">
            {posts.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {posts.map(post => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-surface-alt rounded-3xl border-main border-dashed"
              >
                <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 text-muted">
                  <AlertCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                <p className="text-muted mb-8">Try adjusting your search or category filters to find what you're looking for.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {setActiveCategory('all'); setSearchQuery('');}}
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-32">
        <div className="container">
          <div className="relative overflow-hidden bg-surface-alt rounded-[2.5rem] p-10 lg:p-20 border-main shadow-sm">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6">
                  <Sparkles size={14} />
                  <span>Stay Informed</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Master Your Digital Future</h2>
                <p className="text-muted text-lg mb-0 leading-relaxed">
                  Join 10,000+ Indian learners. Get our latest educational guides and smart earning tools delivered straight to your inbox.
                </p>
              </div>

              <div>
                <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-surface border-main rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary-blue text-sm transition-colors shadow-sm"
                      required 
                    />
                  </div>
                  <button type="submit" className="btn btn-primary py-4 px-8 font-bold shadow-xl shadow-blue-500/20">
                    Subscribe <ArrowRight size={20} className="ml-2" />
                  </button>
                </form>
                <p className="text-[10px] text-muted font-bold uppercase tracking-widest mt-4 text-center sm:text-left">
                  We value your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
