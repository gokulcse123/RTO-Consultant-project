import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en'); // 'en' or 'ta'
  const [fontScale, setFontScale] = useState(1); // 0.9, 1, 1.1

  useEffect(() => {
    if (lang === 'ta') {
      document.title = "NTC டிரைவிங் & RTO கன்சல்டன்ட் | G. சதீஷ் - சென்னை";
    } else {
      document.title = "NTC Driving & RTO Consultant | G. Sathish - Chennai";
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  const setScale = (scale) => {
    setFontScale(scale);
  };

  // Helper function to get translated text
  const t = (key) => {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, fontScale, setScale, t }}>
      <div style={{ fontSize: `${fontScale * 100}%` }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
