<script lang="ts">
  import { code } from './code.js';
  import { mistakes } from './store';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
  let currentIndex = 11;
  //let cheatCode: string[] = [];
  $: typedCode = code.slice(0, currentIndex);
  $: charAtCursor = code[currentIndex];
  $: remainingCode = code.slice(currentIndex + 1, code.length);

  function handleKeyPress(e: KeyboardEvent): void {
    let char = e.key;

    // queue structure: keep latest 5 key presses
    // if (cheatCode.length > 4) {
    //   [, ...cheatCode] = cheatCode;
    // }
    // cheatCode = [...cheatCode, char];
    // // check cheat
    // if (cheatCode.toString() === 'i,d,d,q,d') {
    //   currentIndex += 10;
    // }
    //
    e.stopPropagation();
    e.preventDefault();
    if (char == charAtCursor || (char == 'Enter' && charAtCursor == '\n')) {
      currentIndex += 1;
    } else {
      mistakes.update((m) => [...m, { actualKey: charAtCursor, pressedKey: char }]);
    }
  }
</script>

<main>
  <div class='theme-container'>
  <ThemeSwitcher />
  </div>
  <div on:keyup={handleKeyPress} tabindex="0" class="code">
    <span class="completed">{typedCode}</span><span class="cursor">{charAtCursor}</span><span
      class="uncompleted">{remainingCode}</span
    >
  </div>
</main>

<style>
  .code {
    border: 1px solid;
    border-color: var(--color-text);
    border-radius: var(--radius-sm);
    padding: var(--size-2) var(--size-6);
    font-size: var(--scale-00);
    text-align: start;
    font-family: var(--font-mono) 
  }
  .completed {
    opacity: 0.3;
    white-space: pre;
  }
  .cursor {
    background-color: var(--color-blue-300);
  }
  .uncompleted {
    white-space: pre;
  }
  .theme-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
  }
</style>
