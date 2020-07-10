<script>
	import StatCard from './StatCard.svelte'
	export let totalArticles
</script>

<h1 class="text-xl mb-4">YOU WROTE</h1>
<StatCard color="bg-pink-500" value={totalArticles} label="Articles" icon="file-alt"></StatCard>