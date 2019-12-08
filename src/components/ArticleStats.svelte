<script>
	import StatCard from './StatCard.svelte'
	export let totalComments
	export let totalReactions
</script>
<div class="bg-gray-800 w-full lg:w-1/3 flex flex-col items-center p-8 rounded-lg">
	<h1 class="text-xl lg:text-center mb-4">YOUR ARTICLES RECEIVED</h1>
	<StatCard color="bg-teal-500" value={totalComments} label="Comments" icon="comments"></StatCard>
	<StatCard color="bg-indigo-500" value={totalReactions} label="Reactions" icon="heart"></StatCard>
</div>