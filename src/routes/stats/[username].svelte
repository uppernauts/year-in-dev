<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`stats/${params.username}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { stats: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import UserCard from "../../components/UserCard.svelte";
  import ArticlesWritten from "../../components/ArticlesWritten.svelte";
  import FeaturedArticle from "../../components/FeaturedArticle.svelte";
  import ArticleStats from "../../components/ArticleStats.svelte";
  import FeaturedTags from "../../components/FeaturedTags.svelte";
  export let stats;
</script>

<svelte:head>
  <title>Stats</title>
</svelte:head>
{#if stats.totalArticles > 0}
  <div class="w-full lg:w-4/5 mx-auto text-gray-200">
    <div class="lg:flex mb-4">
      <UserCard {...stats.user} />
      <ArticlesWritten totalArticles={stats.totalArticles} />
    </div>
    <div class="lg:flex mb-4">
      <div class="w-full lg:w-2/3 mr-4 mb-4 lg:mb-0 flex flex-col">
        <FeaturedArticle comments="25" reactions="50" />
        <FeaturedTags mostUsedTags={stats.mostUsedTags} />
      </div>
      <ArticleStats
        totalReactions={stats.totalReactions}
        totalComments={stats.totalComments} />
    </div>
  </div>
{:else}
	<div class="flex flex-col h-screen justify-center items-center text-white w-1/2 mx-auto">
		<i class="text-6xl fas fa-exclamation-triangle mb-4"></i>
		<p class="text-2xl text-center mb-4">The user does not exist or they haven't written articles yet</p>
		<a href="/">Try with other username</a>
	</div>
{/if}
