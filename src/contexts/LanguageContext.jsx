import React, { createContext, useState, useContext, useCallback } from 'react';
import { en } from '../i18n/en';
import { fr } from '../i18n/fr';

const LanguageContext = createContext();

const STORAGE_KEY = 'qeero-lang';
const VALID_LANGS = ['fr', 'en'];

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && VALID_LANGS.includes(stored)) return stored;
  } catch (_) { /* localStorage unavailable (e.g. private browsing) */ }
  return 'fr';
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = useCallback((lang) => {
    if (!VALID_LANGS.includes(lang)) return;
    setLanguageState(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }, []);

  const t = language === 'en' ? en : fr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

