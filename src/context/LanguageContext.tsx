import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useSettings } from '@/hooks/useDatabase';
import { translations, Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  t: (key) => key,
  isRTL: false,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { data: settings } = useSettings();
  const language = ((settings as any)?.language || 'en') as Language;
  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};
