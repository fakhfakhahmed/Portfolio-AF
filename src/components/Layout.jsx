import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import LanguageSwitcher from './LanguageSwitcher';

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 501);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 501);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-rn-accent' : 'text-white hover:text-rn-accent';
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#121212'; // Set body background to match rn-dark
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-rn-dark">
      {/* Mobile Navigation - Always rendered regardless of page */}
      <Navbar />
      {/* Sidebar - Hidden on Mobile */}
      {!isMobile && (
        <div className="w-16 sm:w-20 md:w-24 bg-rn-darker flex flex-col fixed h-screen z-10">
        {/* Logo */}
        <div className="p-3 sm:p-4 md:p-5">
          <Link to="/" className="text-rn-accent font-bold text-lg sm:text-3xl md:text-4xl">AF</Link>
        </div>
        
        {/* Vertical Navigation */}
        <div className="flex flex-col items-center justify-center flex-1 space-y-8">
          <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7 7 7-7m-14 0l2-2" />
              </svg>
              <span className="text-[8px] sm:text-xs mt-1">HOME</span>
            </div>
          </Link>
          
          <Link to="/about" className={`${isActive('/about')} transition-colors duration-200`}>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs mt-1">ABOUT</span>
            </div>
          </Link>
          
          
          
          <Link to="/experience" className={`${isActive('/experience')} transition-colors duration-200`}>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs mt-1">EXPERIENCE</span>
            </div>
          </Link>
          
          <Link to="/projects" className={`${isActive('/projects')} transition-colors duration-200`}>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              <span className="text-xs mt-1">PROJECTS</span>
            </div>
          </Link>
          
          <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200`}>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs mt-1">CONTACT</span>
            </div>
          </Link>
        </div>
        
        {/* Creative Language Switcher - Desktop */}
        <div className="pb-6 flex flex-col items-center justify-center mt-2">
          <LanguageSwitcher isMobile={false} />
        </div>
      </div>
      )}
      
      {/* Main Content */}
      <div className={`${isMobile ? 'pb-16 w-full' : 'ml-16 sm:ml-20 md:ml-24 w-full'} bg-rn-dark text-white`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
