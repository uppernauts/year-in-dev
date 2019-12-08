<script>
  export let mostUsedTags;
</script>

<style>
  .body {
    font-family: "Quicksand-Medium", sans-serif;
  }
</style>

<div
  class="bg-gray-800 w-full p-8 rounded-lg mr-4 items-center justify-center body">
  <h1 class="text-xl mb-4">MOST USED TAGS</h1>
  <div class="flex flex-wrap">
    {#each mostUsedTags as tag}
      <p class="bg-teal-500 px-4 py-2 rounded mr-2 mb-2 text-xl">#{tag}</p>
    {/each}
  </div>
</div>
