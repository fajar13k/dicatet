import React, { useState, useContext } from 'react';

import { LanguageContext } from './LanguageContext';
import { languageOptions, dictionaryList } from '../../languages';


// it provides the language context to app
export function LanguageContextWrapper({ children }) {
  const defaultLanguage = localStorage.getItem('locale');
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'en'
      setUserLanguage(newLanguage);
      localStorage.setItem('locale', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

// get text according to id & current language
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
};