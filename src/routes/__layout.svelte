<script>
	import '../app.css';
	import SideMenu from '$lib/components/side_menu.svelte';
</script>

<div class=" flex items-stretch w-full h-full overflow-hidden">
	<SideMenu />

	<main class="bg-ghost-white-900  py-8 px-12 w-full overflow-y-auto">
		<slot />
	</main>

	<aside class="bg-ghost-white-700  w-5/12 overflow-y-auto" />
</div>
