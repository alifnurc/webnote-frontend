<script>
  import "../app.css";
</script>

<nav class="flex justify-between items-center">
  <ul class="list-none m-0 p-0 flex">
    <li class="mr-2 text-blue-500">Web Note</li>
  </ul>
  <ul class="list-none m-0 p-0 flex ml-auto">
    <li class="mr-2"><a href="/signup" class="text-sky-300">Sign Up</a></li>
    <li class="mr-2"><a href="/signin" class="text-sky-300">Sign In</a></li>
  </ul>
</nav>

<slot />
