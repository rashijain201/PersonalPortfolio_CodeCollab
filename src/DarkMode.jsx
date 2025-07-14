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
      // 👇 Here’s where the className goes:
      className="text-3xl p-2 rounded-full border-2 border-red-500"
    >
      {isDark ? '🔌' : '💡'}
    </button>
  );
}




