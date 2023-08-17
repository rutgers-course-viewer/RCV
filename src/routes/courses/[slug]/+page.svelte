<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#if data.error}
	<h1>Unable to find course</h1>
{:else}
	Course Title: {data.course.title} <br />
	Course Number: {data.course.courseNumber}
{/if}
