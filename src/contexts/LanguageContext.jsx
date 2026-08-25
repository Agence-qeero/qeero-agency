import React, { createContext, useState, useContext } from 'react';
import { en } from '../i18n/en';
import { fr } from '../i18n/fr';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); 

  const t = language === 'en' ? en : fr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
