<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const campusMap: { [key: string]: string } = {
		'0': 'Online',
		'1': 'College Ave',
		'2': 'Busch',
		'3': 'Livingston',
		'4': 'Cook/Douglass',
		'5': 'Downtown New Brunswick',
		S: 'Study Abroad',
		Z: 'Off-Campus'
	};
	let courseLocations: string;
	if (data.course) {
		courseLocations = data.course.campusLocations
			.map((item: string) =>
				campusMap.hasOwnProperty(item) ? campusMap[item] : 'Unknown location'
			)
			.join(', ');
	}
</script>

<div class="p-4 bg-white shadow-md rounded-md">
	{#if data.course}
		<div class="text-2xl font-semibold mb-4">
			{data.course.title}
		</div>
		<div class="space-y-2">
			<div><span class="font-medium">Course String:</span> {data.course.courseString}</div>
			<div><span class="font-medium">Expanded Title:</span> {data.course.expandedTitle}</div>
			<div><span class="font-medium">Course Number:</span> {data.course.courseNumber}</div>
			<div><span class="font-medium">Credits:</span> {data.course.credits}</div>
			<div><span class="font-medium">Subject:</span> {data.course.subject}</div>
			<div><span class="font-medium">Locations:</span> {courseLocations}</div>
		</div>
	{:else}
		<div class="text-xl font-medium text-red-600">Course not found</div>
	{/if}
</div>
