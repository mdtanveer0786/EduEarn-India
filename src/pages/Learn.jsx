import React from 'react';
import { Link } from 'react-router-dom';

const Learn = () => {
  const learningPaths = [
    {
      id: 'online-earning-mastery',
      title: 'Online Earning Mastery',
      level: 'Beginner to Intermediate',
      icon: 'fas fa-rupee-sign',
      description: 'A complete roadmap to starting your journey in the world of online earning, focusing on legal and sustainable methods in India.',
      modules: ['Freelancing Basics', 'Content Writing', 'Affiliate Marketing', 'Digital Services'],
      lessons: 15,
      hours: 12
    },
    {
      id: 'trading-fundamentals',
      title: 'Trading Fundamentals',
      level: 'Beginner',
      icon: 'fas fa-chart-line',
      description: 'Learn the basic concepts of financial markets, technical analysis, and risk management for educational purposes.',
      modules: ['Market Basics', 'Reading Charts', 'Risk Management', 'Investing vs Trading'],
      lessons: 12,
      hours: 10
    },
    {
      id: 'digital-marketing-skills',
      title: 'Digital Marketing Skills',
      level: 'Beginner to Pro',
      icon: 'fas fa-bullhorn',
      description: 'Master the essential skills needed to build an online presence and grow businesses in the digital era.',
      modules: ['SEO Basics', 'Social Media Strategy', 'Email Marketing', 'Analytics'],
      lessons: 18,
      hours: 15
    },
    {
      id: 'web-development-start',
      title: 'Web Development Start',
      level: 'Beginner',
      icon: 'fas fa-code',
      description: 'Learn the foundational technologies of the web and start building your own websites from scratch.',
      modules: ['HTML5 & CSS3', 'Responsive Design', 'JavaScript Basics', 'Hosting'],
      lessons: 20,
      hours: 25
    }
  ];

  return (
    <div className="learn-page">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Free Learning Paths</h1>
          <p className="page-subtitle">Structured roadmap to help you master new digital skills step-by-step.</p>
        </div>
      </header>

      <section className="learning-paths">
        <div className="container">
          <div className="paths-grid">
            {learningPaths.map(path => (
              <div key={path.id} className="path-card">
                <div className="path-header">
                  <div className="path-icon"><i className={path.icon}></i></div>
                  <span className="path-level">{path.level}</span>
                </div>
                <h2 className="path-title">{path.title}</h2>
                <p className="path-description">{path.description}</p>
                <div className="path-modules">
                  <h4>What you'll learn:</h4>
                  <ul>
                    {path.modules.map((module, index) => (
                      <li key={index}><i className="fas fa-check-circle"></i> {module}</li>
                    ))}
                  </ul>
                </div>
                <div className="path-stats">
                  <div className="stat">
                    <span className="stat-number">{path.lessons}</span>
                    <span className="stat-label">Lessons</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">{path.hours}h</span>
                    <span className="stat-label">Duration</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">Free</span>
                    <span className="stat-label">Access</span>
                  </div>
                </div>
                <Link to={`/blog?category=${path.id.split('-').slice(0, 2).join('-')}`} className="btn btn-primary btn-block">
                  View Resources
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="how-it-works trust-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Our Learning Paths Work</h2>
            <p className="section-subtitle">A simple 3-step process to help you acquire new skills effectively.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choose a Path</h3>
              <p>Pick a topic that interests you and matches your career goals or interests.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Follow the Modules</h3>
              <p>Go through our curated articles and guides in the recommended sequence.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Apply Your Skills</h3>
              <p>Use the knowledge gained to work on real-world projects or start your online journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">Everything you need to know about our educational platform.</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">Are these courses really free?</h3>
              <div className="faq-answer active">
                <p>Yes, all our educational guides and learning paths are 100% free to access. We believe in providing quality education to every Indian learner without any barriers.</p>
              </div>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do I get a certificate?</h3>
              <div className="faq-answer active">
                <p>Currently, we focus on providing knowledge and skills rather than certifications. Our goal is to help you learn and apply skills in the real world.</p>
              </div>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is the trading content financial advice?</h3>
              <div className="faq-answer active">
                <p>Absolutely not. All trading and investment related content is strictly for educational purposes only. We do not provide tips, recommendations, or guarantees of profit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
