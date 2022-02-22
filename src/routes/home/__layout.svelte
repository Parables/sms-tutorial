<script>
	import MenuItem from '$lib/menu_item.svelte';
	import IconDashboard from '$lib/assets/svg/category.svg';
	import IconFolder from '$lib/assets/svg/folder-open.svg';
	import IconCalendar from '$lib/assets/svg/calendar.svg';
	import IconChart from '$lib/assets/svg/chart-square.svg';
	import IconTicket from '$lib/assets/svg/ticket-star.svg';
	import IconSms from '$lib/assets/svg/sms.svg';
	import IconSettings from '$lib/assets/svg/setting.svg';
	import IconImport from '$lib/assets/svg/import.svg';
	import IconLogout from '$lib/assets/svg/logout.svg';
</script>

<div class=" flex items-stretch w-full h-full">
	<nav class="px-10 py-5 pr-0 w-2/12 bg-ghost-white-500">
		<h1 class="text-2xl font-semibold p-4 mb-5">Educa<span class="text-indigo-500">me</span></h1>
		<dl>
			<MenuItem label="Dashboard" active>
				<IconDashboard />
			</MenuItem>
			<MenuItem label="Class"><IconFolder /></MenuItem>
			<MenuItem label="Schedule"><IconCalendar /></MenuItem>
			<MenuItem label="Groups" badgeText="New"><IconChart /></MenuItem>
			<MenuItem label="Grade"><IconTicket /></MenuItem>
			<MenuItem label="Message" badgeText="2" badgeClass="bg-orange-200 text-orange-500"
				><IconSms /></MenuItem
			>
			<MenuItem label="Settings"><IconSettings /></MenuItem>
		</dl>

		<div class="bg-white w-full rounded-md flex flex-col mr-10">
			<span class="text-pink-500 bg-pink-300 rounded-full w-10 grid place-items-center h-10">
				<IconImport />
			</span>
		</div>
	</nav>

	<main class="bg-ghost-white-900  w-full">
		<slot />
	</main>

	<aside class="bg-ghost-white-700  w-3/12 " />
</div>
