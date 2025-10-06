'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@nextui-org/react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <h3>{'greeting'}</h3>; The current theme is: {theme}
      <Button
        onClick={() => {
          setTheme('light');
        }}
      >
        Light
      </Button>
      <Button
        onClick={() => {
          setTheme('dark');
        }}
      >
        Dark
      </Button>
      <Button
        onClick={() => {
          setTheme('purple');
        }}
      >
        Purple
      </Button>
      <Button
        onClick={() => {
          setTheme('fantasy');
        }}
      >
        fantasy
      </Button>
    </div>
  );
}
