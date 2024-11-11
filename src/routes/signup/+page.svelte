<script>
  let username = "";
  let password = "";

  async function handleSignup() {
    try {
      const response = await fetch("https://127.0.0.1:5000/signup", {
        method: "post",
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);
      } else {
        const error = await response.json();
        console.error("Signup failed:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
</script>

<h1 class="text-center font-bold">Sign Up page</h1>

<section class="flex justify-center items-start">
  <form
    id="signup"
    method="post"
    action="?/signup"
    on:submit|preventDefault={handleSignup}
    class="w-2/6 flex flex-col items-start"
  >
    <label for="username"
      >Username:
      <input type="text" bind:value={username} required /></label
    >

    <label for="password"
      >Password:
      <input type="password" bind:value={password} required /></label
    >

    <input
      type="submit"
      value="Sign Up"
      class="border-none bg-sky-800 text-white mb-1 hover:bg-sky-600"
    />
  </form>
</section>
