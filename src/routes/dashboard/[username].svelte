<script>
  import UserCard from "../../components/UserCard.svelte";
  import ArticlesWritten from "../../components/ArticlesWritten.svelte";
  import FeaturedArticle from "../../components/FeaturedArticle.svelte";
  import ArticleStats from "../../components/ArticleStats.svelte";
  import FeaturedTags from "../../components/FeaturedTags.svelte";

  const profileImage =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--jOb_HVl1--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/61298/4a328028-ab95-41a6-b98f-c725fa537be9.jpg";
  const tags = ["tailwindcss", "javascript", "netcore"];
</script>

<div class="w-full lg:w-4/5 mx-auto text-gray-200">
  <div class="lg:flex mb-4">
    <UserCard profileUrl="https://google.com" {profileImage} name="Mauro Garcia" username="maurogarcia_19" />
    <ArticlesWritten articles="25" />
  </div>
  <div class="lg:flex mb-4">
    <div class="w-full lg:w-2/3 mr-4 mb-4 lg:mb-0 flex flex-col">
      <FeaturedArticle comments="25" reactions="50" />
      <FeaturedTags {tags} />
    </div>
    <ArticleStats comments="255" reactions="500" articles="25" />
  </div>
</div>
