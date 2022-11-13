<script type="ts">
  import { theme } from './store';
  import { onMount } from 'svelte';

  let currentlyDarkMode: boolean;
  theme?.subscribe((theme: 'dark' | 'light') => {
    currentlyDarkMode = theme === 'dark';
  });

  const handleChange = (e) => {
    theme.set(e.matches ? 'dark' : 'light');
  };

  onMount(() => {
    const themeSwitch = matchMedia('(prefers-color-scheme: dark)');
    themeSwitch.addEventListener('change', handleChange);
    return () => themeSwitch.removeEventListener('change', handleChange);
  });
</script>

<div class="container">
  <input
    type="checkbox"
    id="theme-toggle"
    bind:checked={currentlyDarkMode}
    on:change={(e) => {
      theme?.set(e?.target?.checked ? 'dark' : 'light');
    }}
  />
  <label for="theme-toggle">Dark Mode</label>
</div>

<style>
  
  .container {
    margin: var(--size-4) 0; 
  }

  </style>
