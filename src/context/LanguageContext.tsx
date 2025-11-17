import { createContext, useState } from "react";
import type { ReactNode } from "react";

// Defines the shape of the language context.
// It stores the active language and a function to change it.
type LanguageContextType = {
  language: "fr" | "en";
  setLanguage: (lang: "fr" | "en") => void;
};

// Creates the LanguageContext with default values.
// Default language is "fr", and setLanguage is a placeholder until overridden.
export const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
});

type LanguageProviderProps = {
  children: ReactNode; // The components wrapped by the provider.
};

// Provides the language state to the entire app.
// Components inside this provider can read and update the language.
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // State that stores the current language ("fr" by default).
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  return (
    // Makes language and setLanguage available to all child components.
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
