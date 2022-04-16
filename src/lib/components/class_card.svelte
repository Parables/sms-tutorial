<script lang="ts">
	import IconUser from '$lib/assets/svg/frame.svg';
	import IconMore from '$lib/assets/svg/more.svg';
	import IconFolder from '$lib/assets/svg/folder.svg';
	import IconDocument from '$lib/assets/svg/document.svg';
	import IconPeople from '$lib/assets/svg/people.svg';
	import IconWatch from '$lib/assets/svg/watch.svg';

	export let className: string;
	export let lecturer: string;
	export let classType: string;
	export let creditHours: number;
	export let studentCount: number;
	export let duration: number;
</script>

<dt class="sr-only">{className}</dt>
<dd class="md:w-[48%] w-full bg-white rounded-3xl py-6 mt-10   flex flex-col">
	<!-- header -->
	<div class="flex items-center justify-between mb-5">
		<span class="flex items-center">
			<!-- image/icon -->
			<span class="w-16 h-16 rounded-md bg-blue-500 ml-6" />
			<!-- class name &lecturer -->
			<div class="flex flex-col px-4 ">
				<h1 class="text-xl font-medium mb-2">{className}</h1>
				<p class="text-sm font-normal text-gray-500 inline-flex items-center">
					<IconUser class="mr-1" />
					{lecturer}
				</p>
			</div>
		</span>
		<!-- more icon -->
		<IconMore class=" rotate-90 self-start mr-6" />
	</div>
	<hr />
	<!-- details -->
	<div class="grid grid-cols-2 gap-x-10 gap-y-5 px-6 mt-5 ">
		<p class="text-gray-300 inline-flex items-center">
			<IconFolder class="mr-3" />
			{classType} Class
		</p>
		<p class="text-gray-300 inline-flex items-center">
			<IconDocument class="mr-3" />{creditHours} Credit
		</p>
		<p class="text-gray-300 inline-flex items-center">
			<IconPeople class="mr-3" />{studentCount} Students
		</p>
		<p class="text-gray-300 inline-flex items-center">
			<IconWatch class="mr-3" />
			{duration} Hours/Week
		</p>
	</div>
	<a href="/classes" class="text-red-400 text-base text-center font-normal w-full mt-10"
		>View Class
	</a>
</dd>
