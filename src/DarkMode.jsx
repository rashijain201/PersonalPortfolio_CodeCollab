import { useState, useEffect } from 'react';

export default function DarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-2xl p-2 rounded-full transition-transform hover:scale-110 bg-gray-100 dark:bg-gray-800"
      aria-label="Toggle dark mode"
    >
      {isDark ? '🔌' : '💡'}
    </button>
  );
}



