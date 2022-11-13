<script>
</script>

<div class="container">
  <div class="contents"><slot /></div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-bg);
    color: var(--color-text);
    padding: var(--size-12) var(--size-12);
  }
  
  .contents {
    max-width: 1200px;
  }
</style>
