<script>
  export let color;
  export let icon;
  export let value;
  export let label;
</script>
<style>
	.body {
		font-family: 'Quicksand-Medium', sans-serif;
	}
</style>
<div
  class="rounded-lg {color} px-4 py-2 flex flex-col items-center justify-center text-4xl md:text-5xl w-full body mb-4">
  <p class="leading-tight">
    <i class="far fa-{icon} mr-2" />
    {value}
  </p>
  <p class="text-3xl">{label}</p>
</div>
