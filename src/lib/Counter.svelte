<script lang="ts">
  import { counter } from "./stores";
</script>

<div style="font-size: {$counter}px;">
  count is {Math.floor($counter)}
</div>

<button on:click={counter.increment}>inc</button>
<button on:click={counter.decrement}>dec</button>
<button on:click={counter.reset}>reset</button>

<style>
  div {
    margin: 1rem;
    color: gold;
  }
</style>
