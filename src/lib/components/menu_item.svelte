<script lang="ts">
	export let label: string;
	export let badgeText: string = '';
	export let badgeClass: string = '';
	export let active: boolean = false;
</script>

<dt class="sr-only">Overview of the system</dt>
<dd class="{active ? 'border-r-4 border-indigo-500' : ''} w-full  min-w-max  pr-8 mt-2">
	<span
		class=" w-full flex flex-shrink-0 bg-gradient-to-r {active
			? 'from-red-300 to-pink-200 text-black'
			: 'text-gray-400'} p-3    rounded-2xl justify-between items-center "
	>
		<span class="inline-flex items-center">
			<span class="{active ? 'p-2 bg-gray-50 rounded-md' : ''} mr-4 ">
				<slot />
			</span>
			{label}
		</span>

		<slot name="badge">
			{#if badgeText !== ''}
				<span class="bg-indigo-500  w-10 py-1 text-center text-xs rounded-md {badgeClass}"
					>{badgeText}</span
				>
			{/if}
		</slot>
	</span>
</dd>
