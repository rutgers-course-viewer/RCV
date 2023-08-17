<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.error);
</script>

{#if data.error}
	<h1>{data.message} 1</h1>
{:else}
	<h1>Course Title: {data.course.title}</h1>
{/if}
