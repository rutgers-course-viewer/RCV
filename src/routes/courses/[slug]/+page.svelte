<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#if data.error}
	<h1>{data.message} 1</h1>
{:else}
	Course Number: {data.course.courseNumber}
{/if}
