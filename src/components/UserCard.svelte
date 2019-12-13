<script>
	export let name
	export let username
	export let profile_image
	export let twitter_username
	export let github_username
	export let website_url
	export let profile_image_90
	const profileUrl = `https://dev.to/${username}`

	function goToProfile() {
		window.open(profileUrl)
	}
</script>

<style>
	h1, h3 {
		font-family: 'Quicksand', sans-serif;
	}
</style>

<header on:click={goToProfile} class="bg-gray-800 w-full lg:w-2/3 flex p-8 rounded-lg mr-4 items-center mb-4 lg:mb-0 cursor-pointer">
	<img class="w-24 md:w-40 rounded-full mr-4" src={profile_image} alt="profile-image">
	<div>
		<h1 class="text-xl md:text-3xl mb-2">{name}</h1>
		<h3 class="text-md md:text-xl">@{username}</h3>
	</div>
</header>