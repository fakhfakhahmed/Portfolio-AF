import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ukFlag from '../assets/language/uk.svg';
import franceFlag from '../assets/language/france.svg';

// Creative language switcher with flip and slide animations
const LanguageSwitcher = ({ isMobile }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleLanguageChange = (lang) => {
    if (lang === i18n.language) return;
    
    setIsFlipping(true);
    setTimeout(() => {
      i18n.changeLanguage(lang);
      setIsFlipping(false);
      setIsOpen(false);
    }, 300);
  };

  const currentFlag = i18n.language === 'fr' ? franceFlag : ukFlag;
  const alternateFlag = i18n.language === 'fr' ? ukFlag : franceFlag;
  const alternateLang = i18n.language === 'fr' ? 'en' : 'fr';

  // Desktop version - round button with flip effect
  if (!isMobile) {
    return (
      <div className="cursor-pointer">
        <div 
          className={`w-10 h-10 rounded-full overflow-hidden perspective-500 border-2 border-red-600 ${isFlipping ? 'animate-flip-180' : 'hover:animate-pulse'}`}
          onClick={() => handleLanguageChange(alternateLang)}
          title={i18n.language === 'fr' ? 'Switch to English' : 'Passer au Français'}
        >
          <img 
            src={currentFlag} 
            alt={i18n.language === 'fr' ? 'Français' : 'English'}
            className="w-full h-full object-cover transform transition-all duration-300"
          />
        </div>
      </div>
    );
  }

  // Mobile version - simple direct switch
  return (
    <div>
      <button 
        onClick={() => handleLanguageChange(alternateLang)}
        className="flex items-center justify-center"
      >
        <img 
          src={currentFlag}
          alt={i18n.language === 'fr' ? 'Français' : 'English'} 
          className={`h-5 w-5 rounded-full border-2 border-red-600 ${isFlipping ? 'animate-spin-once' : 'animate-pulse'}`}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
