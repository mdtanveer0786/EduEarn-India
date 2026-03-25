import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <Link to="/">
            <div className="logo">
              <span className="logo-icon">EE</span>
              <span className="logo-text">EduEarn<span className="logo-highlight">India</span></span>
            </div>
          </Link>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`} id="navMenu">
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
            <li><Link to="/learn" className={location.pathname === '/learn' ? 'active' : ''}>Learn</Link></li>
            <li><Link to="/tools" className={location.pathname === '/tools' ? 'active' : ''}>Tools</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
          
          <div className="nav-actions flex items-center gap-4">
            {/* Desktop Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="theme-toggle hidden lg:flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <div className="nav-cta hidden lg:block">
              <Link to="/learn" className="btn btn-primary">Start Learning</Link>
            </div>
            
            {/* Mobile Menu Theme Toggle (Inside Menu) */}
            <div className="lg:hidden flex flex-col items-center gap-4 w-full pt-4 border-t border-gray-200 dark:border-gray-700">
              <button 
                onClick={toggleTheme} 
                className="flex items-center gap-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 w-full justify-center transition-colors"
              >
                {theme === 'light' ? <><Moon size={20} /> Dark Mode</> : <><Sun size={20} /> Light Mode</>}
              </button>
              <Link to="/learn" className="btn btn-primary btn-block">Start Learning</Link>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 lg:hidden">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="menu-toggle" id="menuToggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Overlay */}
      <div className={`nav-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </nav>
  );
};

export default Navbar;
