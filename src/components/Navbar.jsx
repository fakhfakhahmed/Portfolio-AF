import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import profileImg from '../assets/279787631_1225434571324131_2014762143615193992_n.jpg';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Navbar (Bottom) */}
      {isMobile && (
        <>
          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black text-white z-40 p-6 flex flex-col">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center">
                  <img 
                    src={profileImg} 
                    alt="Ahmed Fakhfakh" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-red-600"
                  />
                  <div className="ml-4">
                    <h1 className="font-bold text-xl text-white ">Ahmed Fakhfakh</h1>
                    <p className="text-sm text-red-500">Full-Stack Web Developer</p>
                  </div>
                </div>
                <button onClick={toggleMenu} className="p-2 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <ul className="flex-1 space-y-6 text-base uppercase tracking-wide font-medium">
                <li><Link to="/" className="block py-2 text-white hover:text-red-500 transition-colors" onClick={toggleMenu}>{t('navbar.home')}</Link></li>
                <li><Link to="/about" className="block py-2 text-white hover:text-red-500 transition-colors" onClick={toggleMenu}>{t('navbar.about')}</Link></li>
                <li><Link to="/experience" className="block py-2 text-white hover:text-red-500 transition-colors" onClick={toggleMenu}>{t('navbar.experience')}</Link></li>
                <li><Link to="/projects" className="block py-2 text-white hover:text-red-500 transition-colors" onClick={toggleMenu}>{t('navbar.projects')}</Link></li>
                <li><Link to="/contact" className="block py-2 text-white hover:text-red-500 transition-colors" onClick={toggleMenu}>{t('navbar.contact')}</Link></li>
              </ul>
              
              {/* No language switcher in mobile - removed */}
            </div>
          )}
          
          {/* Mobile Bottom Navigation Bar */}
          <nav className="fixed bottom-0 w-full bg-black border-t border-gray-800 z-50">
            <div className="flex justify-around items-center h-12">
              <Link to="/" className="flex flex-col items-center justify-center text-[10px] text-gray-400 hover:text-red-500 transition-colors hover:scale-110 transform duration-200">
                <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>{t('navbar.home')}</span>
              </Link>
              
              <Link to="/about" className="flex flex-col items-center justify-center text-[10px] text-gray-400 hover:text-red-500 transition-colors hover:scale-110 transform duration-200">
                <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{t('navbar.about')}</span>
              </Link>
              
              <Link to="/experience" className="flex flex-col items-center justify-center text-[10px] text-gray-400 hover:text-red-500 transition-colors hover:scale-110 transform duration-200">
                <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{t('navbar.experience')}</span>
              </Link>
              
              <Link to="/projects" className="flex flex-col items-center justify-center text-[10px] text-gray-400 hover:text-red-500 transition-colors hover:scale-110 transform duration-200">
                <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>{t('navbar.projects')}</span>
              </Link>
              
              <Link to="/contact" className="flex flex-col items-center justify-center text-[10px] text-gray-400 hover:text-red-500 transition-colors hover:scale-110 transform duration-200">
                <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{t('navbar.contact')}</span>
              </Link>
              
              {/* Creative Language Switcher */}
              <LanguageSwitcher isMobile={true} />
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
