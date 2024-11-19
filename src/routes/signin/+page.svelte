<script lang="ts">
  let { form } = $props();
  let errorMessage = $state(form?.error);

  $effect(() => {
    if (form?.error) {
      setTimeout(() => (errorMessage = null), 10000);
    }
  });
</script>

<h1 class="text-center font-bold">Sign In page</h1>

{#if errorMessage}
  <p class="text-red-500 text-center">{errorMessage}</p>
{/if}

<section class="flex justify-center items-start">
  <form
    id="signin"
    method="post"
    class="w-2/6 flex flex-col items-start"
    action="?/signin"
  >
    <label for="username">
      Username:
      <input type="text" name="username" required />
    </label>

    <label for="password">
      Password:
      <input type="password" name="password" required />
    </label>

    <input
      type="submit"
      value="Sign In"
      class="border-none text-black mb-1 hover:bg-black hover:text-white"
    />
  </form>
</section>
