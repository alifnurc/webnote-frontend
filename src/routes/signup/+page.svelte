<script>
  let data = $props();
</script>

<h1 class="text-center font-bold">Sign Up page</h1>

{#if data.form?.success}
  <p class="text-center">Successfully signed up!</p>
{:else if data.form?.error}
  <p class="text-center">Error: {data.form.error}</p>
{/if}

<section class="flex justify-center items-start">
  <form
    id="signup"
    method="post"
    class="w-2/6 flex flex-col items-start"
    action="?/signup"
  >
    <label for="username"
      >Username:
      <input type="text" name="username" required /></label
    >

    <label for="password"
      >Password:
      <input type="password" name="password" required /></label
    >

    <input
      type="submit"
      value="Sign Up"
      class="border-none text-black mb-1 hover:bg-black hover:text-white"
    />
  </form>
</section>
