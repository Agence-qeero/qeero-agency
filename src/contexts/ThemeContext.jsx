import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

const STORAGE_KEY = 'qeero-theme';

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    // Respect OS preference on first visit
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  } catch (_) {}
  return 'light';
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    const t = getInitialTheme();
    applyTheme(t);
    return t;
  });

  // Keep DOM in sync whenever theme changes
  useEffect(() => { applyTheme(theme); }, [theme]);

  const setTheme = useCallback((t) => {
    setThemeState(t);
    try { localStorage.setItem(STORAGE_KEY, t); } catch (_) {}
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

