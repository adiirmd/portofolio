'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { site } from '@/lib/data';

const STORAGE_KEY = 'theme';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
    } catch {
      /* storage may be unavailable */
    }
  }

  return (
    <button type="button" onClick={toggle} className="icon-btn" aria-label={site.labels.toggleTheme}>
      {mounted && !isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
