<script>
  import TextView from '../lib/TextView.svelte';
  import Page from '../lib/Page.svelte';
  import Mistake from '../lib/Mistake.svelte';
</script>

<main>
    <div class="container">
    <img src="./typeatron.png" height="320px" width="640px" alt="typeatron" />
    </div>
  <Page>
    <div class="container">
    <TextView />
    <Mistake />
    </div>
  </Page>
</main>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: var(--color-bg);
  }

  </style>
