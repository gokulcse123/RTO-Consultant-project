import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en'); // 'en' or 'ta'
  const [fontScale, setFontScale] = useState(1); // 0.9, 1, 1.1

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
    return () => { document.documentElement.style.fontSize = ''; };
  }, [fontScale]);

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'ta') {
      document.title = "NTC ஆட்டோ கன்சல்டன்ட் | சென்னை RTO சேவைகள் & இன்சூரன்ஸ்";
    } else {
      document.title = "NTC Auto Consultant | RTO Services & Insurance in Chennai";
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
      <div>
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
