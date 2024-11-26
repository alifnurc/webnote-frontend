<script>
  import "../app.css";

  let { data } = $props();
</script>

<nav class="flex justify-between items-center">
  <ul class="list-none m-0 p-0 flex">
    <li class="mr-2 text-blue-500">Web Note</li>
  </ul>
  <form method="post" action="/logout">
    <ul class="list-none m-0 p-0 flex ml-auto">
      {#if data.loggedIn}
        <li class="mr-2">
          <button class="text-sky-300">Log Out</button>
        </li>
      {:else}
        <li class="mr-2"><a href="/signup" class="text-sky-300">Sign Up</a></li>
        <li class="mr-2"><a href="/signin" class="text-sky-300">Sign In</a></li>
      {/if}
    </ul>
  </form>
</nav>

<slot />

<footer>
  <p class="text-center">Copyright © 2024 Web Note</p>

  <section class="flex justify-center underline">
    <a href="/about" class="mr-2">About</a>
    <a href="/contact" class="mr-2">Contact Us</a>
  </section>
</footer>
