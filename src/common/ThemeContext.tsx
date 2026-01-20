import React, { createContext, useContext, useEffect } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Light,
  setTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize from localStorage or system preference
  const [theme, setTheme] = React.useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      return saved as Theme;
    }
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return Theme.Dark;
    }
    return Theme.Light;
  });

  useEffect(() => {
    const root = document.documentElement;

    // Add/remove dark class on <html> element for Tailwind
    if (theme === Theme.Dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Also set data-theme for any legacy styles
    document.body.setAttribute('data-theme', theme);

    // Persist to localStorage
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
