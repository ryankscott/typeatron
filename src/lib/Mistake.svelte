<script lang="ts">
  import { mistakes, type Mistake } from './store';
  let allMistakes: Mistake[] = [];
  $: totalMistakes = allMistakes?.length;
  $: mistakeMap = (() => {
    const x = new Map();
    allMistakes.map((mistake) => {
      const { actualKey } = mistake;
      if (x.has(actualKey)) {
        x.set(actualKey, x.get(actualKey) + 1);
      } else {
        x.set(actualKey, 1);
      }
    });
    return x;
  })();

  mistakes.subscribe((m) => {
    allMistakes = m;
  });
</script>

<div class="container">
  <h4>Leaderboard</h4>
  <p>
    Total number of mistakes are: {totalMistakes}
  </p>
  <table>
    <thead>
      <tr>
        <th scope="col">Letter</th>
        <th scope="col">Count</th>
      </tr>
    </thead>
    <tbody>
      {#each [...mistakeMap] as [letter, times]}
        <tr>
          <td>{letter}</td>
          <td>{times}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .container {
    padding: var(--size-6) var(--size-4);
  }

  h4 {
    font-size: var(--scale-2);
  }

  tbody:before {
    content: '@';
    display: block;
    line-height: var(--size-1); 
    text-indent: -99999px;
  }

</style>
