import React, { createContext, useContext, useEffect } from 'react';

// 1. Define the theme type and context type
export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};


// 2. Create the context with a default value

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Light, // Default theme
  setTheme: () => { }, // Empty function as default
});

// 3. Create a custom hook to use the context
export const useTheme = () => useContext(ThemeContext);

// 4. Create a provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(Theme.Light);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
