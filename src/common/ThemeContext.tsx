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
  theme: Theme.Dark,
  setTheme: () => undefined,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    document.body.setAttribute('data-theme', Theme.Dark);
    localStorage.setItem('theme', Theme.Dark);
  }, []);

  const value: ThemeContextType = React.useMemo(
    () => ({
      theme: Theme.Dark,
      setTheme: () => undefined,
    }),
    [],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
