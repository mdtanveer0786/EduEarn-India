import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

  // Sync with URL category if it changes
  useEffect(() => {
    const cat = queryParams.get('category') || 'all';
    setActiveCategory(cat);
  }, [location.search]);

  return (
    <div className="blog-page">
      <SEO 
        title="Educational Blog" 
        description="Explore our latest articles on digital skills, online earning, and trading basics. Purely educational content for Indian learners."
      />
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Educational Blog</h1>
          <p className="page-subtitle">Learn about online earning, trading basics, and digital skills with our step-by-step guides.</p>
        </div>
      </header>

      <div className="blog-filters">
        <div className="container">
          <div className="filter-container">
            <div className="filter-group">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="blog-section">
        <div className="container">
          {posts.length > 0 ? (
            <div className="blog-grid">
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="no-results text-center py-5">
              <i className="fas fa-search-minus fa-3x mb-3 text-muted"></i>
              <h3>No articles found</h3>
              <p>Try searching for something else or browse another category.</p>
              <button 
                className="btn btn-primary mt-3"
                onClick={() => {setActiveCategory('all'); setSearchQuery('');}}
              >
                Show All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <h2>Stay Updated with New Guides</h2>
              <p>Subscribe to get our latest educational articles and digital skill guides delivered to your inbox.</p>
            </div>
            <div className="newsletter-actions">
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
            <div className="newsletter-note">
              We respect your privacy. No spam, just pure education.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
