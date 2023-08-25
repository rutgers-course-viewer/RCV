<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import '../app.css';
</script>

<div class="flex">
	<Sidebar />

	<div class="grow">
		<Navbar />
		<slot />
	</div>
</div>
