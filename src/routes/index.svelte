<script>
  import { goto } from "@sapper/app";
  let loading = false;
  function stats(event) {
    if (event.keyCode == 13) {
      let username = event.currentTarget.value;
      if (username.trim().length > 0) {
        username = username.toLowerCase().replace("@", "");
        loading = true;
        goto(`/stats/${username}`);
      }
    }
  }
</script>

<svelte:head>
  <title>Your year in DEV</title>
  <meta name="title" content="Your year in DEV" />
  <meta name="description" content='Find out your DEV.to highlights of the year!' />
  <meta name="twitter:title" content="Your year in DEV" />
  <meta name="twitter:description" content="Find out your DEV.to highlights of the year!" />
  <meta name="og:title" content="Your year in DEV" />
  <meta name="og:description" content="Find out your DEV.to highlights of the year!" />
</svelte:head>

<div class="min-h-screen flex flex-col items-center justify-center">
  <h1 class="text-5xl mb-6 text-white">Your year in DEV</h1>
  <div class="max-w-xl w-full bg-gray-800 p-6 rounded mb-16">
    {#if !loading}
      <input
        type="text"
        on:keypress={stats}
        class="w-full p-2 rounded text-xl text-center"
        placeholder="Enter your DEV username" />
    {:else}
      <p class="text-white text-center">
        <i class="fas fa-circle-notch fa-spin mr-2" />
        Loading...
      </p>
    {/if}
  </div>
  <div class="text-lg text-center text-white">
    <p>
      Built with
      <i class="far fa-heart mx-2 text-red-500" />
      by
    </p>
    <p class="mb-8">
      <a
        class="text-blue-500 mx-2"
        target="_blank"
        href="https://dev.to/maurogarcia_19">
        Mauro García
      </a>
      and
      <a
        target="_blank"
        class="text-blue-500 mx-2"
        href="https://dev.to/paulasantamaria">
        Paula Santamaría
      </a>
    </p>
    <p>
      Check the code on
      <a
        class="text-blue-500 mx-2"
        href="https://github.com/uppernauts/year-in-dev"
        target="_blank">
        <i class="fab fa-github-alt mr-1" />
        Github
      </a>
    </p>
  </div>
</div>
