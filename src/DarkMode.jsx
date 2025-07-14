// This file defines and exports the component
import { useState, useEffect } from 'react';
import { Lightbulb, LightbulbOff } from 'lucide-react';

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
      className="p-2 rounded-full bg-yellow-200 dark:bg-gray-700 text-yellow-700 dark:text-yellow-300 hover:scale-105 transition-transform"
    >
      {isDark ? <LightbulbOff size={24} /> : <Lightbulb size={24} />}
    </button>
  );
}


