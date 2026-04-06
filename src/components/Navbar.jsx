import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, Moon, Menu, X, ArrowRight, BookOpen, Zap, 
  Home, FileText, GraduationCap, LayoutGrid, Info, Mail, Award 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const openMenu = () => setIsOpen(true);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  // Close menu if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, closeMenu]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Learn', path: '/learn', icon: GraduationCap },
    { name: 'Tools', path: '/tools', icon: LayoutGrid },
    { name: 'Quiz', path: '/quiz', icon: Award },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const menuVariants = {
    closed: { 
      x: '100%',
      transitionEnd: { display: 'none' },
      transition: { duration: 0.2, ease: "easeOut" } 
    },
    open: { 
      display: 'flex',
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 } 
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
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
                    className={isActive(link.path) ? 'active' : ''}
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
              onClick={isOpen ? closeMenu : openMenu} 
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <motion.div
        className="mobile-menu-backdrop"
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          pointerEvents: isOpen ? 'auto' : 'none' 
        }}
        transition={{ duration: 0.2 }}
        onClick={closeMenu}
        inert={!isOpen ? "true" : undefined}
      />
        
      {/* Mobile Menu Drawer */}
      <motion.div
        className="mobile-menu-drawer"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        inert={!isOpen ? "true" : undefined}
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
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="mobile-nav-emoji">
                  <Icon size={20} />
                </span>
                <span className="mobile-nav-text">{link.name}</span>
                {isActive(link.path) && (
                  <span className="mobile-nav-active-dot" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Drawer CTA */}
        <div className="mobile-menu-cta">
          <Link to="/learn" className="btn btn-primary btn-block btn-large" onClick={closeMenu}>
            <BookOpen size={20} /> Start Learning Free
          </Link>
          <p className="mobile-cta-note">
            100% free • No credit card required
          </p>
        </div>

        {/* Drawer Footer */}
        <div className="mobile-menu-footer">
          <div className="mobile-theme-switcher">
            <span className="text-sm font-medium">{theme === 'light' ? '☀️ Light' : '🌙 Dark'} Mode</span>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle" 
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
