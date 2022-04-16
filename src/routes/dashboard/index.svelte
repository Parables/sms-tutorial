<script>
	import ArrowRight from '$lib/assets/svg/arrow-right.svg';
	import ClassCard from '$lib/components/class_card.svelte';
</script>

<h1 class="text-2xl font-semibold">Hi, Kevin William 👋</h1>
<p class="text-sm text-gray-500 font-medium">Welcome back, nice to see you again!</p>

<!-- semester grades -->
<div class="my-5 p-5 rounded-3xl bg-white w-full h-72" />

<h1 class="text-xl font-medium mt-10 flex items-center justify-between">
	My Classes
	<a href="/classes" class="text-red-400 text-base font-normal inline-flex items-center"
		>See All
		<ArrowRight />
	</a>
</h1>

<dl class="flex items-center justify-between flex-wrap">
	<ClassCard
		className="Interaction Engineering"
		lecturer="Wade Warren"
		classType="B"
		creditHours={3}
		studentCount={30}
		duration={3}
	/>

	<ClassCard
		className="Machine Learning"
		lecturer="Eleanor Pena"
		classType="B"
		creditHours={4}
		studentCount={32}
		duration={4}
	/>
</dl>
