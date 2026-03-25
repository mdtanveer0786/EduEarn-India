import React, { useState } from 'react';
import SEO from '../components/SEO';
import FreelanceCalculator from '../components/tools/FreelanceCalculator';
import { X } from 'lucide-react';

const Tools = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    {
      id: 1,
      title: 'Freelance Rate Calculator',
      description: 'Calculate your hourly or project rate based on your expenses and desired income in India.',
      category: 'earning',
      icon: 'fas fa-calculator',
      tags: ['Freelancing', 'Finance'],
      component: <FreelanceCalculator />
    },
    {
      id: 2,
      title: 'Compound Interest Visualizer',
      description: 'See the power of compounding for your long-term educational investments and savings.',
      category: 'finance',
      icon: 'fas fa-chart-area',
      tags: ['Investing', 'Education']
    },
    {
      id: 3,
      title: 'SEO Checklist Tool',
      description: 'A comprehensive checklist to ensure your content is optimized for search engines.',
      category: 'marketing',
      icon: 'fas fa-check-double',
      tags: ['SEO', 'Marketing']
    },
    {
      id: 4,
      title: 'Risk-Reward Ratio Tool',
      description: 'Learn how to calculate risk-reward ratios for educational market analysis.',
      category: 'finance',
      icon: 'fas fa-percentage',
      tags: ['Trading', 'Math']
    },
    {
      id: 5,
      title: 'Domain Name Ideas Generator',
      description: 'Find creative domain names for your upcoming digital project or blog.',
      category: 'tech',
      icon: 'fas fa-globe',
      tags: ['Web', 'Creative']
    },
    {
      id: 6,
      title: 'Content Idea Matrix',
      description: 'Generate endless content ideas for your blog or social media channels.',
      category: 'marketing',
      icon: 'fas fa-lightbulb',
      tags: ['Writing', 'Strategy']
    }
  ];

  const filteredTools = activeFilter === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeFilter);

  return (
    <div className="tools-page">
      <SEO 
        title="Free Educational Tools" 
        description="Handy calculators and resources for freelancers and students in India. Calculate rates, interest, and more."
      />
      
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Free Educational Tools</h1>
          <p className="page-subtitle">Handy calculators and resources to help you in your learning and earning journey.</p>
        </div>
      </header>

      <div className="tools-filter">
        <div className="container">
          <div className="filter-buttons">
            {['all', 'earning', 'finance', 'marketing', 'tech'].map(filter => (
              <button 
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)} {filter === 'all' ? 'Tools' : ''}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="tools-section">
        <div className="container">
          <div className="tools-grid">
            {filteredTools.map(tool => (
              <div key={tool.id} className="tool-card">
                <div className="tool-icon"><i className={tool.icon}></i></div>
                <h3>{tool.title}</h3>
                <p className="tool-description">{tool.description}</p>
                <div className="tool-tags">
                  {tool.tags.map((tag, idx) => (
                    <span key={idx} className="tool-tag">{tag}</span>
                  ))}
                </div>
                <button 
                  className="btn btn-secondary btn-block" 
                  onClick={() => tool.component ? setSelectedTool(tool) : alert('This tool is coming soon!')}
                >
                  {tool.component ? 'Open Tool' : 'Coming Soon'}
                </button>
              </div>
            ))}
          </div>
          
          {/* Tool Modal/Overlay */}
          {selectedTool && (
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl">
                <button 
                  onClick={() => setSelectedTool(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
                <div className="p-2">
                  {selectedTool.component}
                </div>
              </div>
            </div>
          )}

          <div className="tools-disclaimer">
            <div className="disclaimer-box">
              <h3><i className="fas fa-info-circle"></i> About Our Tools</h3>
              <p>These tools are designed for educational purposes only. The results provided by these calculators are based on your inputs and general formulas. They should not be considered as professional financial or legal advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Resources */}
      <section className="resources-section trust-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recommended Free Resources</h2>
            <p className="section-subtitle">A curated list of external platforms to help you learn even more.</p>
          </div>
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon"><i className="fab fa-youtube"></i></div>
              <h3>YouTube Channels</h3>
              <p>Top Indian educators teaching digital skills and finance.</p>
            </div>
            <div className="resource-card">
              <div className="resource-icon"><i className="fas fa-book"></i></div>
              <h3>Free eBooks</h3>
              <p>Downloadable guides on freelancing and digital marketing.</p>
            </div>
            <div className="resource-card">
              <div className="resource-icon"><i className="fas fa-users"></i></div>
              <h3>Learning Communities</h3>
              <p>Forums and groups to discuss and grow with other learners.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
