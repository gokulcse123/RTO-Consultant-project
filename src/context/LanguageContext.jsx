import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';
import { getPage, getPageTitle } from '../data/sitePages';

const LanguageContext = createContext();

export function LanguageProvider({ children, pathname = '/' }) {
  const [lang, setLang] = useState('en'); // 'en' or 'ta'
  const [fontScale, setFontScale] = useState(1); // 0.9, 1, 1.1

  // Restore only after hydration so the initial client HTML matches the English build.
  useEffect(() => {
    try {
      if (sessionStorage.getItem('ntc-language') === 'ta') setLang('ta');
    } catch { /* Language switching still works when storage is unavailable. */ }
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
    return () => { document.documentElement.style.fontSize = ''; };
  }, [fontScale]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = getPageTitle(getPage(pathname), lang);
  }, [lang, pathname]);

  const toggleLanguage = () => {
    const next = lang === 'en' ? 'ta' : 'en';
    setLang(next);
    try {
      sessionStorage.setItem('ntc-language', next);
    } catch { /* Keep the selected language for this page when storage is unavailable. */ }
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
