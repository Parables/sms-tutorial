<script>
	import '../app.css';
	import SideMenu from '$lib/components/side_menu.svelte';
</script>

<div class=" flex items-stretch w-full h-full">
	<SideMenu />

	<main class="bg-ghost-white-900  w-full">
		<slot />
	</main>

	<aside class="bg-ghost-white-700  w-3/12 " />
</div>
