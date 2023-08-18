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
	let courseLocations: string[];
	if (data.course) {
		courseLocations = data.course.campusLocations
			.map((item: string) =>
				campusMap.hasOwnProperty(item) ? campusMap[item] : 'Unknown location'
			)
			.join(', ');
	}
</script>

{#if data.course}
	Course Title: {data.course.title} <br />
	Course String: {data.course.courseString} <br />
	Course Expanded Title: {data.course.expandedTitle} <br />
	Course Number: {data.course.courseNumber}<br />
	Course Credits: {data.course.credits}<br />
	Course Subject: {data.course.subject} <br />
	Course Locations: {courseLocations} <br />
	<br />
	<br />
{:else}
	Course not found
{/if}
