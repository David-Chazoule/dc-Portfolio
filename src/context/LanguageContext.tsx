import { createContext, useState } from "react";
import type { ReactNode } from "react";

type LanguageContextType = {
  language: "fr" | "en";
  setLanguage: (lang: "fr" | "en") => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
});

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};