<script>
  export let title;
  export let comments;
  export let reactions;
</script>

<style>
  .body {
    font-family: "Quicksand-Medium", sans-serif;
  }
  .elipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>

<div
  class="bg-gray-800 w-full p-8 rounded-lg mr-4 justify-center mb-4 flex flex-col flex-grow">
  <h1 class="text-xl mb-4">ARTICLE OF THE YEAR</h1>
  <div class="body">
    <p class="text-lg md:text-2xl elipsis">{title}</p>
    <div class="flex mt-2 text-3xl">
      <p class="mr-4">
        <i class="far fa-comments" />
        {comments}
      </p>
      <p>
        <i class="far fa-heart" />
        {reactions}
      </p>
    </div>
  </div>
</div>
