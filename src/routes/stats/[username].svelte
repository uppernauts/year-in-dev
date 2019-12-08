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
	export let stats;
</script>

<svelte:head>
	<title>Stats</title>
</svelte:head>

<h1>{stats.user.username}'s year in DEV</h1>