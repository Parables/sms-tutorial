<script>
	import MenuItem from '$lib/menu_item.svelte';
</script>

<div class=" flex items-stretch w-full">
	<nav class="px-10 pt-14 pb-10">
		<h1 class="text-2xl font-semibold">Educa<span class="text-indigo-500">me</span></h1>
		<MenuItem />
	</nav>

	<main>
		<slot />
	</main>

	<aside />
</div>
