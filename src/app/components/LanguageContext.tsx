import React, { createContext, useState, useContext } from 'react';

interface LanguageContextType {
  language: string;
  toggleLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
