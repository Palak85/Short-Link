import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AppLayout = ({ children }) => {
  const location = useLocation();

  const isLinkActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-warm-100 text-warm-900">
      {/* TopNavBar */}
      <nav className="sticky top-0 w-full z-50 bg-warm-100/80 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(187,0,88,0.08)]">
        <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="text-2xl font-extrabold text-primary tracking-tight hover:opacity-90 transition-opacity"
          >
            ShortLink
          </Link>
          
          <div className="flex items-center space-x-6 text-sm font-bold text-slate-500">
            <Link 
              to="/" 
              className={`transition-colors hover:text-primary ${
                isLinkActive('/') ? 'text-primary border-b-2 border-primary pb-1' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`transition-colors hover:text-primary ${
                isLinkActive('/dashboard') ? 'text-primary border-b-2 border-primary pb-1' : ''
              }`}
            >
              Dashboard
            </Link>
          </div>
          
          <div>
            <Link
              to="/dashboard"
              className="px-6 py-2 bg-primary text-white font-bold rounded-full pill-shape sunset-glow hover:scale-105 active:scale-95 transition-all inline-block text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#f8f3e9] px-6 md:px-16 py-10 mt-16 border-t border-warm-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="text-xl font-bold text-primary">
              ShortLink
            </Link>
            <p className="text-xs text-slate-500 text-center md:text-left opacity-75 max-w-xs leading-relaxed">
              Empowering the web with energetic link infrastructure for modern creators.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-500">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-primary transition-colors">API Docs</Link>
            <Link to="#" className="hover:text-primary transition-colors">Support</Link>
          </div>
          
          <div className="text-xs text-slate-400 font-medium">
            © {new Date().getFullYear()} ShortLink. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
