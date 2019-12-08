<svelte:head>
  <title>Your year in DEV</title>
</svelte:head>
<script>
	import { goto } from '@sapper/app';

	function stats(event) {
		if(event.keyCode == 13) {
			let username = event.currentTarget.value
			if(username.trim().length > 0) {
				username = username.toLowerCase().replace("@","")
				goto(`/stats/${username}`)
			}
		}
	}
</script>
<div class="min-h-screen flex flex-col items-center justify-center text-white">
  <h1 class="text-5xl mb-6">Your year in DEV</h1>
  <div class="max-w-xl w-full bg-gray-800 p-6 rounded mb-16">
    <input type="text" on:keypress={stats} class="w-full p-2 rounded text-xl text-center" placeholder="Enter your DEV username" />
  </div>
  <div class="text-lg text-center">
	<p>Built with <i class="far fa-heart mx-2 text-red-500" /> by</p>
	<p class="mb-8">
		<a class="text-blue-500 mx-2" target="_blank" href="https://dev.to/maurogarcia_19">Mauro García</a> and <a target="_blank" class="text-blue-500 mx-2" href="https://dev.to/paulasantamaria">Paula Santamaría</a>
	</p>
	<p>Check the code on <a class="text-blue-500 mx-2" href="https://github.com/uppernauts/year-in-dev" target="_blank"><i class="fab fa-github-alt mr-1"></i>Github</a></p>
  </div>
</div>