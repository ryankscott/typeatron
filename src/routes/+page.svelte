<script>
  import TextView from '../lib/TextView.svelte';
  import Page from '../lib/Page.svelte';
  import Mistake from '../lib/Mistake.svelte';
</script>

<main>
  <Page>
    <img src="./typeatron.png" height="320px" width="640px" alt="typeatron" />
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
  }

  </style>
