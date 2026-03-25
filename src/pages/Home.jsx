import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import postsData from '../data/posts.json';
import SEO from '../components/SEO';

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    // In a real app, this might be a fetch call
    setLatestPosts(postsData.slice(0, 4));
  }, []);

  return (
    <div className="home-page">
      <SEO 
        title="Home" 
        description="EduEarn India - Learn legal online earning methods, trading basics, and digital skills. Your free educational guide in India."
        keywords="learn online earning, digital skills india, trading education, freelance india"
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Beginner Friendly</span>
            <h1 className="hero-title">Learn Online Earning & Digital Skills</h1>
            <p className="hero-description">Master legal ways to earn online, understand trading basics, and develop digital skills with our free educational resources. Made for Indian learners.</p>
            <div className="hero-actions">
              <Link to="/learn" className="btn btn-primary btn-large">Start Learning Free</Link>
              <a href="#featured" className="btn btn-secondary btn-large">Explore Topics</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Free Guides</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Readers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Legal Methods</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <i className="fas fa-laptop-code"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories" id="featured">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Learn By Category</h2>
            <p className="section-subtitle">Choose your learning path from our carefully curated topics</p>
          </div>
          <div className="categories-grid">
            <Link to="/blog?category=online-earning" className="category-card">
              <div className="category-icon">
                <i className="fas fa-rupee-sign"></i>
              </div>
              <h3>Online Earning</h3>
              <p>Legal ways to earn money online in India</p>
              <span className="category-count">15 Articles</span>
            </Link>
            
            <Link to="/blog?category=trading-basics" className="category-card">
              <div className="category-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Trading Basics</h3>
              <p>Educational content only - no tips or guarantees</p>
              <span className="category-count">12 Articles</span>
            </Link>
            
            <Link to="/blog?category=digital-skills" className="category-card">
              <div className="category-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Digital Skills</h3>
              <p>Learn skills that are in high demand</p>
              <span className="category-count">18 Articles</span>
            </Link>
            
            <Link to="/blog?category=tech" className="category-card">
              <div className="category-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Tech & Web</h3>
              <p>Technology explained in simple terms</p>
              <span className="category-count">10 Articles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="latest-posts">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Educational Articles</h2>
            <p className="section-subtitle">Fresh content to help you learn and grow</p>
            <Link to="/blog" className="view-all">View All Articles →</Link>
          </div>
          
          <div className="posts-grid" id="latestPosts">
            {latestPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-content">
            <h2 className="section-title text-center">Why Trust Our Educational Content?</h2>
            <div className="trust-grid">
              <div className="trust-item">
                <div className="trust-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>100% Legal Content</h3>
                <p>We only promote legal and ethical ways of online earning in India.</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Educational Focus</h3>
                <p>Our goal is education, not promotion. No guaranteed profit claims.</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Transparent</h3>
                <p>Clear disclaimers and transparent about affiliate relationships.</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Community First</h3>
                <p>Created by Indians, for Indians focusing on real skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>Access all our free guides and start developing valuable digital skills today.</p>
            <div className="cta-actions">
              <Link to="/learn" className="btn btn-primary btn-large">Get Started Free</Link>
              <Link to="/blog" className="btn btn-secondary btn-large">Browse Articles</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
