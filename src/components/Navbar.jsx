import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowRight, BookOpen, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Blog', path: '/blog', icon: '📝' },
    { name: 'Learn', path: '/learn', icon: '📚' },
    { name: 'Tools', path: '/tools', icon: '🛠️' },
    { name: 'About', path: '/about', icon: '💡' },
    { name: 'Contact', path: '/contact', icon: '✉️' },
  ];

  const menuVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 400, damping: 40 } },
    open: { x: 0, transition: { type: 'spring', stiffness: 400, damping: 40 } }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.05, duration: 0.3 }
    })
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
        <div className="container flex justify-between items-center">
          <div className="nav-brand">
            <Link to="/" onClick={closeMenu} className="no-underline">
              <div className="logo">
                <span className="logo-icon">EE</span>
                <span className="logo-text">EduEarn<span className="logo-highlight">India</span></span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-menu desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="nav-actions flex items-center gap-4">
              <button 
                onClick={toggleTheme} 
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <Link to="/learn" className="btn btn-primary nav-cta-btn">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          {/* Mobile Controls */}
          <div className="flex items-center gap-3 mobile-controls">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              className="menu-toggle" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay + Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mobile-menu-backdrop"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              className="mobile-menu-drawer"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Drawer Header */}
              <div className="mobile-menu-header">
                <Link to="/" onClick={closeMenu} className="no-underline">
                  <div className="logo">
                    <span className="logo-icon">EE</span>
                    <span className="logo-text">EduEarn<span className="logo-highlight">India</span></span>
                  </div>
                </Link>
                <button onClick={closeMenu} className="mobile-close-btn" aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Badge */}
              <div className="mobile-menu-badge">
                <Zap size={14} />
                <span>Free Educational Platform</span>
              </div>

              {/* Navigation Links */}
              <nav className="mobile-nav-links">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      to={link.path}
                      className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                      onClick={closeMenu}
                    >
                      <span className="mobile-nav-emoji">{link.icon}</span>
                      <span className="mobile-nav-text">{link.name}</span>
                      {location.pathname === link.path && (
                        <span className="mobile-nav-active-dot" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <motion.div
                className="mobile-menu-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/learn" className="btn btn-primary btn-block btn-large" onClick={closeMenu}>
                  <BookOpen size={20} /> Start Learning Free
                </Link>
                <p className="mobile-cta-note">
                  100% free • No credit card required
                </p>
              </motion.div>

              {/* Drawer Footer */}
              <div className="mobile-menu-footer">
                <div className="mobile-theme-switcher">
                  <span className="text-sm font-medium">{theme === 'light' ? '☀️ Light' : '🌙 Dark'} Mode</span>
                  <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
