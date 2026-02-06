import { PropsWithChildren, useEffect } from 'react';

export function ThemeProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return <>{children}</>;
}
