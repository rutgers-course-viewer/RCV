<script>
	/** @type {import('./$types').PageServerData} */
	export let data;
</script>

{#if data.course}
	Course Title: {data.course.title} <br />
	Course Expanded Title: {data.course.expandedTitle} <br />
	Course Number: {data.course.courseNumber}
{:else}
	Course not found
{/if}
