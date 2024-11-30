<script>
  import "../app.css";

  let { data } = $props();
</script>

<nav>
  <ul class="inline-block">
    <li>Web Note</li>
  </ul>
  <form method="post" action="/logout" class="inline-block">
    <ul>
      {#if data.loggedIn}
        <li class="inline-block">
          <button class="text-sky-300">Log Out</button>
        </li>
      {:else}
        <li class="inline-block"><a href="/signup" class="text-sky-300">Sign Up</a></li>
        <li class="inline-block"><a href="/signin" class="text-sky-300">Sign In</a></li>
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
