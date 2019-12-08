<svelte:head>
  <title>Your year in DEV</title>
</svelte:head>
<script>
	import { goto } from '@sapper/app';

	function stats(event) {
		if(event.keyCode == 13) {
			const username = event.currentTarget.value
			if(username.trim().length > 0) {
				goto(`/stats/${username.toLowerCase()}`)
			}
		}
	}
</script>
<div class="h-screen flex flex-col items-center justify-center">
  <h1 class="text-5xl mb-4 text-white">Your year in DEV</h1>
  <div class="max-w-xl w-full bg-gray-800 p-6 rounded">
    <input type="text" on:keypress={stats} class="w-full p-2 rounded text-xl text-center" placeholder="Enter your DEV username" />
  </div>
</div>