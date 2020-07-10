<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(
      `stats/${params.username}.json?year=${query.year || 2020}`
    );
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
  import YearSelector from "../../components/YearSelector.svelte";

  import { stores } from "@sapper/app";
  const { page } = stores();
  export let stats;
  let selectedYear = parseInt($page.query.year) || 2020;

  function onYearSelected(event) {
    console.log(event.target.value);
    selectedYear = parseInt(event.target.value) || 2020;
    window.location.href = `${window.location.protocol}//${window.location.host}${window.location.pathname}?year=${selectedYear}`;
  }
</script>

<style>
  h1 {
    font-family: "Quicksand-Medium", sans-serif;
  }
</style>

<svelte:head>
  <title>My year in DEV</title>
  <meta name="title" content={stats.metadata.title} />
  <meta name="description" content={stats.metadata.description} />
  <meta name="twitter:title" content={stats.metadata.title} />
  <meta name="twitter:description" content={stats.metadata.description} />
  <meta name="og:title" content={stats.metadata.title} />
  <meta name="og:description" content={stats.metadata.description} />
</svelte:head>

{#if stats.totalArticles > 0}
  <div
    class="flex flex-col justify-center items-center min-h-screen text-white">
    <div class="mb-4">
      <h1 class="text-5xl mr-2 mb-2">#MyYearInDEV</h1>
      <div class="flex items-center justify-center">
        <p class="mr-2">Share your stats</p>
        <a
          class="bg-blue-500 px-2 py-1 rounded"
          data-size="large"
          href={stats.tweetIntent}>
          <i class="fab fa-twitter mr-1" />
          Share
        </a>
      </div>
    </div>
    <div class="w-full lg:w-4/5 mx-auto text-gray-200">
      <div class="lg:flex mb-4">
        <UserCard {...stats.user} />
        <div class="w-full lg:w-1/3 flex flex-col items-center">
          <div class="bg-gray-800 w-full flex flex-col items-center px-8 py-4 rounded-lg mb-4">
            <h1 class="text-xl mb-4">YEAR</h1>
            <YearSelector {onYearSelected} {selectedYear} />
          </div>
          <div class="bg-gray-800 w-full flex flex-col items-center p-8 rounded-lg">
            <ArticlesWritten totalArticles={stats.totalArticles} />
          </div>
        </div>
      </div>
      <div class="lg:flex mb-4">
        <div class="w-full lg:w-2/3 mr-4 mb-4 lg:mb-0 flex flex-col">
          <FeaturedArticle
            title={stats.mostLikedArticle.title}
            url={stats.mostLikedArticle.url}
            comments={stats.mostLikedArticle.comments_count}
            reactions={stats.mostLikedArticle.positive_reactions_count} />
          <FeaturedTags mostUsedTags={stats.mostUsedTags} />
        </div>
        <ArticleStats
          totalReactions={stats.totalReactions}
          totalComments={stats.totalComments} />
      </div>
    </div>
    <a href="/">Try with another username</a>
  </div>
{:else}
  <div
    class="flex flex-col min-h-screen justify-center items-center text-white
    w-2/3 mx-auto">
    <i class="text-6xl fas fa-exclamation-triangle mb-4" />
    <p class="text-2xl text-center mb-4">
      The user does not exist or they haven't written articles on {selectedYear}
    </p>
    <div class="mb-4 text-center">
      <p>Try a different year:</p>
      <YearSelector {onYearSelected} {selectedYear} />
    </div>

    <a href="/">Or try with another username</a>
  </div>
{/if}