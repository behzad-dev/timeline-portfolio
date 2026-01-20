'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  const saved = window.localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(t: Theme) {
  document.documentElement.classList.toggle('dark', t === 'dark');
  window.localStorage.setItem('theme', t);
}

export function ThemeToggle() {
  // Initialize on first client render (no effect state updates)
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  // Effect only touches external systems (DOM + localStorage). No setState here.
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle theme"
    >
      Theme
    </Button>
  );
}
