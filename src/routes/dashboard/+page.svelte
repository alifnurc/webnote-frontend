<script lang="ts">
  let { data } = $props();
</script>

<h1 class="text-center font-bold">Welcome {data.user}</h1>

{#if data.notes}
  <ul>
    {#each data.notes as note}
      <li>{note.title}</li>
    {/each}
  </ul>
{/if}

<form action="?/logout" method="post">
  <button type="submit">Logout</button>
</form>
