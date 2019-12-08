<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div
    class="flex flex-col min-h-screen justify-center items-center text-white w-1/2
    mx-auto">
	<span class="text-6xl"><i class="fas fa-exclamation-triangle mb-4" /> {status}</span>
    
    <p class="text-2xl text-center mb-4">
      {error.message}
    </p>
    <a class="text-blue-500" href="/">Back to home</a>
  </div>
