import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo">EduEarn<span className="logo-highlight">India</span></span>
            </div>
            <p className="footer-description">Educational platform teaching legal online earning, trading basics, and digital skills to Indian learners.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/learn">Learning Paths</Link></li>
              <li><Link to="/tools">Free Tools</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Categories</h3>
            <ul>
              <li><Link to="/blog?category=online-earning">Online Earning</Link></li>
              <li><Link to="/blog?category=trading-basics">Trading Basics</Link></li>
              <li><Link to="/blog?category=digital-skills">Digital Skills</Link></li>
              <li><Link to="/blog?category=tech">Tech & Web</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 EduEarn India. All rights reserved. | Educational content only.</p>
          <p className="footer-note"><strong>Disclaimer:</strong> We provide educational content only. No financial advice or profit guarantees. Always do your own research.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
