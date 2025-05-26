import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import profilePhoto from '../assets/279787631_1225434571324131_2014762143615193992_n.jpg';
import styles from '../assets/styles/ProfileImage.module.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col-reverse md:flex-row w-full min-h-screen relative overflow-hidden">
      {/* Main Content Area - right side */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        {/* Profile Info */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Ahmed Fakhfakh</h1>
          <p className="text-rn-accent mb-6">{t('hero.subtitle')}</p>
          
          <div className="flex space-x-4 mb-8">
           
            <a href="https://www.facebook.com/ahmed.fakhfakh.547/" className="text-white hover:text-rn-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
              </svg>
            </a>
           
            <a href="https://www.linkedin.com/in/ahmed-fakhfakh/" className="text-white hover:text-rn-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href="https://github.com/fakhfakhahmed" className="text-white hover:text-rn-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* About Me */}
        <div className="mb-12">
          <h2 className="text-3xl uppercase mb-6">{t('about.title')}</h2>
          <div className="text-sm text-gray-400 mb-4">{t('home.personal')}</div>
          <p className="text-gray-300 leading-relaxed">{t('home.aboutText')}</p>
        </div>

        {/* My Services */}
        <div className="mb-12">
          <h2 className="text-3xl uppercase mb-10">{t('home.services')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4 text-rn-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('home.webDev')}</h3>
                <p className="text-gray-400 text-sm">{t('home.webDevDesc')}</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-rn-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('home.seo')}</h3>
                <p className="text-gray-400 text-sm">{t('home.seoDesc')}</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-rn-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('home.microservices')}</h3>
                <p className="text-gray-400 text-sm">{t('home.microservicesDesc')}</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-rn-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('home.security')}</h3>
                <p className="text-gray-400 text-sm">{t('home.securityDesc')}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Button */}
        <div className="mt-10">
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 border border-rn-accent text-rn-accent text-sm uppercase tracking-widest font-medium hover:bg-rn-accent hover:text-white transition-colors"
          >
            {t('navbar.contact')}
          </Link>
        </div>
      </div>
      
      {/* Image Area - left side */}
      <div className="w-full md:w-1/2 relative overflow-hidden">
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-rn-dark to-transparent z-10"></div>
        
        {/* Profile Image */}
        <div className={styles.imageContainer}>
          <img 
            src={profilePhoto} 
            alt={t('home.profileAlt')} 
            className={styles.profileImage}
          />
        </div>
        
        {/* Name Overlay */}
        <div className="absolute bottom-20 left-10 z-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white">Ahmed <br/> Fakhfakh</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
