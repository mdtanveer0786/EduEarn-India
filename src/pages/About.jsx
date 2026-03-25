import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">About EduEarn India</h1>
          <p className="page-subtitle">Empowering Indian learners with authentic knowledge of digital skills and online opportunities.</p>
        </div>
      </header>

      <section className="about-intro">
        <div className="container">
          <div className="mission-statement">
            <p>EduEarn India was founded with a simple mission: to provide clear, honest, and high-quality educational content to help Indian learners navigate the complex world of online earning and digital skills. In an era of misinformation, we strive to be a source of truth.</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="fas fa-heart"></i></div>
              <h3>Honesty First</h3>
              <p>We never promote "get rich quick" schemes. We only discuss legitimate ways to build skills and earn.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fas fa-graduation-cap"></i></div>
              <h3>Education-Driven</h3>
              <p>Our primary goal is teaching. We want you to understand the underlying concepts, not just follow steps.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Safe & Ethical</h3>
              <p>Your safety is paramount. we always emphasize risk management and avoiding online scams.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-cover trust-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Cover</h2>
            <p className="section-subtitle">A transparent look at the topics we discuss on our platform.</p>
          </div>
          <div className="coverage-grid">
            <div className="coverage-do">
              <h3><i className="fas fa-check-circle green"></i> What We Provide</h3>
              <ul>
                <li>Free educational guides on freelancing and digital marketing.</li>
                <li>Basics of financial markets and trading for learning purposes.</li>
                <li>Roadmaps for learning web development and digital skills.</li>
                <li>Tips for identifying and avoiding online earning scams in India.</li>
                <li>Practical tools to help you calculate rates and manage risk.</li>
              </ul>
            </div>
            <div className="coverage-dont">
              <h3><i className="fas fa-times-circle red"></i> What We DON'T Provide</h3>
              <ul>
                <li>Financial advice or investment recommendations.</li>
                <li>Guaranteed profit claims or income promises.</li>
                <li>Paid "tips" or "signals" for trading.</li>
                <li>Promotion of illegal or unethical earning methods.</li>
                <li>Access to your personal financial accounts or funds.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Vision</h2>
            <p className="section-subtitle">Building a digitally literate India, one learner at a time.</p>
          </div>
          <div className="team-content text-center" style={{maxWidth: '800px', margin: '0 auto'}}>
            <p>We believe that every Indian with an internet connection should have access to the knowledge required to participate in the global digital economy. Our content is designed to be accessible, simple, and most importantly, practical.</p>
            <div className="vision-image mt-5" style={{padding: '50px', background: 'var(--gray-100)', borderRadius: 'var(--radius-xl)'}}>
              <i className="fas fa-mountain fa-5x text-primary" style={{color: 'var(--primary-blue)'}}></i>
              <h3 className="mt-3">Scaling New Heights in Digital Education</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="revenue-transparency trust-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Revenue Transparency</h2>
            <p className="section-subtitle">How we keep this platform free for everyone.</p>
          </div>
          <div className="revenue-methods">
            <div className="method">
              <h4><i className="fas fa-link"></i> Affiliate Relationships</h4>
              <p>We may earn a small commission if you choose to purchase a tool or service we recommend, at no extra cost to you. This helps fund our free educational content.</p>
            </div>
            <div className="method">
              <h4><i className="fas fa-ad"></i> Display Advertising</h4>
              <p>We show minimal, non-intrusive educational ads on our platform to cover hosting and operational costs.</p>
            </div>
          </div>
          <div className="transparency-note">
            <p><strong>Note:</strong> Our editorial independence is paramount. We never recommend a service just for the commission; we only highlight tools we believe are genuinely useful for learners.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
