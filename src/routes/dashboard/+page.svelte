<script lang="ts">
  let { data } = $props();
  let result = $state();
</script>

<h1 class="text-center font-bold">Welcome {data.user}</h1>

<h1 class="font-bold">List of notes</h1>

{#if data.notes}
  <ul>
    {#each data.notes as note}
      <li>
        <form onclick={(result = note.description)}>
          <button>{note.title}</button>
        </form>
      </li>
    {/each}
  </ul>
{/if}

<br />

<p>{result}</p>

<form action="?/logout" method="post">
  <button type="submit">Logout</button>
</form>
