<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.course}
	Course Title: {data.course.title} <br />
	Course Expanded Title: {data.course.expandedTitle} <br />
	Course Number: {data.course.courseNumber}<br />
	Course Subject: {data.course.subject}
{:else}
	Course not found
{/if}
