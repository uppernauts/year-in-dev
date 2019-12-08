<script>
	export let profileImage
	export let name
	export let username
	export let profileUrl
</script>

<style>
	h1, h3 {
		font-family: 'Quicksand', sans-serif;
	}
</style>

<header class="bg-gray-800 w-full lg:w-2/3 flex p-8 rounded-lg mr-4 items-center justify-center mb-4 lg:mb-0">
	<img class="w-24 md:w-40 rounded-full mr-4" src={profileImage} alt="profile-image">
	<div>
		<a href={profileUrl}><h1 class="text-xl md:text-3xl mb-2">{name}</h1></a>
		<h3 class="text-md md:text-xl">@{username}</h3>
	</div>
</header>