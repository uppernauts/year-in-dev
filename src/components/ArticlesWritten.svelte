<script>
	import StatCard from './StatCard.svelte'
	export let articles
</script>
<div class="bg-gray-800 w-full lg:w-1/3 flex flex-col items-center p-8 rounded-lg">
	<h1 class="text-xl mb-4">YOU WROTE</h1>
	<StatCard color="bg-pink-500" value={articles} label="Articles" icon="file-alt"></StatCard>
</div>