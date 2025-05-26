import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 sm:py-5 md:py-6 w-full bg-white border-b border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-black tracking-tighter ">AF</Link>
        
      
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 focus:outline-none text-black" 
          onClick={toggleMenu}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className={`md:flex items-center ${isMenuOpen ? 'block absolute top-20 left-0 right-0 bg-white p-6 border-b border-gray-100 z-10' : 'hidden'} md:static`}>
          <ul className="md:flex md:space-x-6 lg:space-x-10 space-y-4 md:space-y-0 text-xs sm:text-sm uppercase tracking-widest font-medium">
            <li><Link to="/" className="text-black hover:text-gray-500 transition-colors">{t('navbar.home')}</Link></li>
            <li><Link to="/about" className="text-black hover:text-gray-500 transition-colors">{t('navbar.about')}</Link></li>
            <li><Link to="/experience" className="text-black hover:text-gray-500 transition-colors">{t('navbar.experience')}</Link></li>
            <li><Link to="/projects" className="text-black hover:text-gray-500 transition-colors">{t('navbar.projects')}</Link></li>
            <li><Link to="/contact" className="text-black hover:text-gray-500 transition-colors">{t('navbar.contact')}</Link></li>
          </ul>
          
          {/* Language switcher */}
          <div className="mt-6 md:mt-0 md:ml-6 lg:ml-10 flex space-x-4">
            <button 
              onClick={() => changeLanguage('en')} 
              className={`text-xs uppercase tracking-widest font-medium ${i18n.language === 'en' ? 'text-black' : 'text-gray-400'}`}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('fr')} 
              className={`text-xs uppercase tracking-widest font-medium ${i18n.language === 'fr' ? 'text-black' : 'text-gray-400'}`}
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
