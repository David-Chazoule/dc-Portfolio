import { createContext, useState } from "react";
import type { ReactNode } from "react";

// Defines the structure of the theme context.
// It exposes the current theme and a function to switch it.
type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

// Creates the ThemeContext with default values.
// Default theme is "light". setTheme is a dummy function until replaced by the provider.
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode; // Components wrapped by the provider.
};

// Provides the theme state to the entire app.
// Any component inside this provider can read and update the theme.
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Stores the current theme ("light" by default).
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    // Makes theme and setTheme available to all child components.
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
