<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#if data.course}
	Course Title: {data.course.title} <br />
	Course Number: {data.course.courseNumber}
{:else}
	Course not found
{/if}
