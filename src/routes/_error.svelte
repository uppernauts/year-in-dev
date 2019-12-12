<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

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
