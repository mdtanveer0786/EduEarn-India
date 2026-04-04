import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Code, 
  Cpu, 
  ShieldCheck, 
  GraduationCap, 
  Handshake, 
  Users,
  CheckCircle2,
  Zap,
  Globe
} from 'lucide-react';
import PostCard from '../components/PostCard';
import postsData from '../data/posts.json';
import SEO from '../components/SEO';

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(postsData.slice(0, 3));
  }, []);

  const categories = [
    { 
      id: 'online-earning', 
      title: 'Online Earning', 
      desc: 'Legal ways to earn money online in India', 
      icon: <Globe className="text-blue-500" />, 
      count: '15 Articles' 
    },
    { 
      id: 'trading-basics', 
      title: 'Trading Basics', 
      desc: 'Educational content only - no tips or guarantees', 
      icon: <TrendingUp className="text-green-500" />, 
      count: '12 Articles' 
    },
    { 
      id: 'digital-skills', 
      title: 'Digital Skills', 
      desc: 'Learn skills that are in high demand', 
      icon: <Code className="text-purple-500" />, 
      count: '18 Articles' 
    },
    { 
      id: 'tech', 
      title: 'Tech & Web', 
      desc: 'Technology explained in simple terms', 
      icon: <Cpu className="text-orange-500" />, 
      count: '10 Articles' 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="home-page overflow-hidden">
      <SEO 
        title="Home" 
        description="EduEarn India - Learn legal online earning methods, trading basics, and digital skills. Your free educational guide in India."
        keywords="learn online earning, digital skills india, trading education, freelance india"
      />
      
      {/* Hero Section */}
      <section className="hero relative">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <Zap size={16} />
              <span>Free Educational Platform for Indians</span>
            </div>
            <h1 className="hero-title">
              Empower Your Future with <span className="logo-highlight">Digital Knowledge</span>
            </h1>
            <p className="hero-description">
              Master legal online earning methods, understand market fundamentals, and build high-demand digital skills with our comprehensive, beginner-friendly guides.
            </p>
            <div className="hero-actions">
              <Link to="/learn" className="btn btn-primary btn-large">
                Start Learning Free <ArrowRight size={20} />
              </Link>
              <Link to="/tools" className="btn btn-secondary btn-large">
                Try Free Tools
              </Link>
            </div>
            <div className="hero-stats flex flex-wrap gap-8 mt-12">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Detailed Guides</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Learners</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Verified Content</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image lg:block hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="image-placeholder bg-surface border-main relative z-10 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <BookOpen size={48} />
                </div>
                <h3 className="text-2xl mb-2">Curated Learning Paths</h3>
                <p className="text-muted">Structured education to take you from beginner to expert in no time.</p>
                <div className="mt-8 space-y-3 w-full">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-alt border-main">
                      <CheckCircle2 size={18} className="text-green-500" />
                      <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-surface-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore Your Interest</h2>
            <p className="section-subtitle">Diverse topics designed to help you succeed in the digital economy.</p>
          </div>
          
          <motion.div 
            className="categories-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <motion.div key={cat.id} variants={itemVariants}>
                <Link to={`/blog?category=${cat.id}`} className="card category-card group">
                  <div className="category-icon mb-6 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl group-hover:text-primary-blue transition-colors">{cat.title}</h3>
                  <p className="text-muted mb-6">{cat.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                      {cat.count}
                    </span>
                    <ArrowRight size={18} className="text-primary-blue opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Posts */}
      <section>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Latest Educational Articles</h2>
              <p className="text-muted">Stay updated with the latest trends and guides in the digital world.</p>
            </div>
            <Link to="/blog" className="btn btn-secondary">
              Browse All <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="posts-grid">
            {latestPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-surface-alt">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose EduEarn India?</h2>
            <p className="text-muted max-w-2xl mx-auto">We are committed to providing high-quality, honest, and ethical education to help you navigate the online world.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '100% Ethical', desc: 'No scams, no "get rich quick" schemes. Only real, legal methods.', icon: <ShieldCheck className="text-blue-500" /> },
              { title: 'Pure Education', desc: 'Our goal is your growth. No financial advice, just knowledge.', icon: <GraduationCap className="text-green-500" /> },
              { title: 'Full Transparency', desc: 'Clear disclaimers and honest information about everything.', icon: <Handshake className="text-purple-500" /> },
              { title: 'Local Focus', desc: 'Tailored specifically for the unique needs of Indian learners.', icon: <Users className="text-orange-500" /> }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-surface rounded-2xl border-main hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-surface-alt rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border-main shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="relative overflow-hidden bg-primary-blue rounded-3xl p-12 lg:p-20 text-center text-white">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Unlock Your Potential Today</h2>
              <p className="text-xl opacity-90 mb-10">
                Join thousands of students who are learning the skills that matter. All our resources are, and will always be, 100% free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/learn" className="px-8 py-4 bg-white text-primary-blue font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl">
                  Get Started Now
                </Link>
                <Link to="/about" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors border border-blue-400/30">
                  About Our Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
