<script>
	import MenuItem from '$lib/components/menu_item.svelte';
	import IconDashboard from '$lib/assets/svg/category.svg';
	import IconFolder from '$lib/assets/svg/folder-open.svg';
	import IconCalendar from '$lib/assets/svg/calendar.svg';
	import IconChart from '$lib/assets/svg/chart-square.svg';
	import IconTicket from '$lib/assets/svg/ticket-star.svg';
	import IconSms from '$lib/assets/svg/sms.svg';
	import IconSettings from '$lib/assets/svg/setting.svg';
	import IconImport from '$lib/assets/svg/import.svg';
	import IconLogout from '$lib/assets/svg/logout.svg';
	import playstore from '$lib/assets/images/playstore.png';
	import appstore from '$lib/assets/images/apple.png';
</script>

<nav class="p-5 pr-0 w-2/12 flex flex-col justify-between bg-ghost-white-500">
	<div>
		<h1 class="text-2xl font-semibold  mb-5">Educa<span class="text-indigo-500">me</span></h1>
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
	</div>

	<div class="w-full pr-10 ">
		<div class="bg-white  py-8 rounded-md flex flex-col  items-center justify-center">
			<span class="text-pink-500 mb-5 bg-pink-300 rounded-full w-10 grid place-items-center h-10">
				<IconImport />
			</span>
			<p class="text-lg font-medium ">Educa<span class="text-indigo-500">me</span></p>
			<p class="text-lg font-medium">for Mobile</p>
			<p class="my-2">
				<img src={appstore} alt="apple" class="w-5 h-5 mr-5 inline" />
				<img src={playstore} alt="apple" class="w-5 h-5 inline" />
			</p>
			<button class="px-5 py-3 mt-5 bg-indigo-500 text-xs font-medium text-white rounded-xl"
				>Download Now
			</button>
		</div>
	</div>
	<MenuItem label="Logout"><IconLogout class="rotate-180" /></MenuItem>
</nav>
