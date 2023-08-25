<script lang="ts">
	import CourseListItem from '$lib/CourseListItem.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col p-4">
	<div class="flex w-[600px] shrink flex-col gap-3 px-4">
		<div class="flex flex-col gap-2">
			<h3 class="text-2xl font-bold text-primary">Course List</h3>
			<h4 class="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-500">
				Click any course to expand sections, or filter using the categories on the left.
			</h4>
		</div>
		{#each data.courses as course}
			<CourseListItem {course} />
		{/each}
	</div>
</div>
