import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Mistake = {
  actualKey: string;
  pressedKey: string;
};

export const mistakes = writable<Mistake[]>([]);

const changeTheme = (theme: 'dark' | 'light') => {
  localStorage.setItem('theme', theme);
  window.document.documentElement.setAttribute('data-theme', theme);
};

const createTheme = () => {
  if (browser) {
    const key = 'theme';
    const persistedTheme = localStorage.getItem(key);

    if (persistedTheme) {
      changeTheme(persistedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      changeTheme('dark');
    } else {
      changeTheme('light');
    }

    const theme = localStorage.getItem('theme');

    const { subscribe, set, update } = writable(theme);

    return {
      subscribe,
      set: (value: 'dark' | 'light') => {
        changeTheme(value);
        return set(value);
      },
      update
    };
  }
};

export const theme = createTheme();
