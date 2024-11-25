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
        <form onclick={(result = note)}>
          <button>{note.title}</button>
        </form>
      </li>
    {/each}
  </ul>
{/if}

<br />

{#if result}
  <form method="post">
    <input type="text" name="title" value={result.title} class="font-bold" />
    <input
      type="text"
      name="description"
      value={result.description}
      class="italic"
    />

    <input type="hidden" name="id" value={result.id} />

    <button
      name="action"
      value="update"
      type="submit"
      class="border-none text-black mb-1 hover:bg-black hover:text-white"
      >Update</button
    >

    <button
      name="action"
      value="delete"
      type="submit"
      class="border-none text-black mb-1 hover:bg-black hover:text-white"
      >Delete</button
    >
  </form>
{/if}

<br />

<h1 class="font-bold">Add note</h1>
<form method="post">
  <label for="title"
    >Title:
    <input type="text" name="title" /></label
  >

  <label for="description"
    >Description:
    <input type="text" name="description" /></label
  >
  <button
    name="action"
    value="add"
    type="submit"
    class="border-none text-black mb-1 hover:bg-black hover:text-white"
    >Add</button
  >
</form>
