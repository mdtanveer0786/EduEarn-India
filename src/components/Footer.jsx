import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  MapPin, 
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-20 pb-10">
      <div className="container">
        <div className="footer-grid mb-16">
          <div className="footer-col">
            <div className="footer-logo mb-6">
              <Link to="/" className="logo text-3xl font-extrabold tracking-tight no-underline">
                <span className="text-heading">EduEarn</span><span className="logo-highlight">India</span>
              </Link>
            </div>
            <p className="text-muted mb-8 leading-relaxed">
              Empowering Indian learners with high-quality, free education on legal online earning, market fundamentals, and essential digital skills for the future.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={18} />, label: 'Facebook' },
                { icon: <Twitter size={18} />, label: 'Twitter' },
                { icon: <Instagram size={18} />, label: 'Instagram' },
                { icon: <Youtube size={18} />, label: 'YouTube' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-surface border-main flex items-center justify-center text-muted hover:bg-primary-blue hover:text-white transition-all shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-col">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              Quick Links
              <span className="h-1 w-8 bg-primary-blue rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-muted hover:text-primary-blue transition-colors flex items-center gap-2 group no-underline"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Home</Link></li>
              <li><Link to="/blog" className="text-muted hover:text-primary-blue transition-colors flex items-center gap-2 group no-underline"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Blog</Link></li>
              <li><Link to="/learn" className="text-muted hover:text-primary-blue transition-colors flex items-center gap-2 group no-underline"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Learning Paths</Link></li>
              <li><Link to="/tools" className="text-muted hover:text-primary-blue transition-colors flex items-center gap-2 group no-underline"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Free Tools</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              Legal
              <span className="h-1 w-8 bg-primary-blue rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li><Link to="/disclaimer" className="text-muted hover:text-primary-blue transition-colors no-underline">Disclaimer</Link></li>
              <li><Link to="/privacy" className="text-muted hover:text-primary-blue transition-colors no-underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted hover:text-primary-blue transition-colors no-underline">Terms of Service</Link></li>
              <li><Link to="/about" className="text-muted hover:text-primary-blue transition-colors no-underline">About Us</Link></li>
              <li><Link to="/contact" className="text-muted hover:text-primary-blue transition-colors no-underline">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              Newsletter
              <span className="h-1 w-8 bg-primary-blue rounded-full"></span>
            </h3>
            <p className="text-muted text-sm mb-6">Stay updated with our latest guides and tools.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-surface border-main rounded-xl py-3 px-4 pr-12 focus:outline-none focus:border-primary-blue text-sm transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bg-primary-blue text-white p-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t pt-10">
          <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl mb-10 flex gap-4 items-start">
            <ShieldAlert className="text-red-500 flex-shrink-0" size={24} />
            <div>
              <p className="text-sm font-bold text-red-800 dark:text-red-300 mb-1 uppercase tracking-wider">Educational Disclaimer</p>
              <p className="text-sm text-red-700 dark:text-red-400 leading-relaxed mb-0">
                EduEarn India provides educational content and tools for informational purposes only. We do not provide financial advice, trading signals, or guarantees of profit. All financial decisions should be made after consulting with qualified professionals.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted text-sm font-medium mb-0">
              &copy; {currentYear} EduEarn India. All rights reserved.
            </p>
            <div className="flex gap-8">
              <div className="flex items-center gap-2 text-muted text-sm">
                <Mail size={16} className="text-primary-blue" />
                hello@eduearnindia.com
              </div>
              <div className="flex items-center gap-2 text-muted text-sm">
                <MapPin size={16} className="text-primary-blue" />
                India
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
