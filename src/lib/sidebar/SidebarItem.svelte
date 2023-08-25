<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte';
	import HeroiconsChevronRight from '~icons/heroicons/chevron-right';

	export let icon: ComponentType<SvelteComponent>;
	export let text: string;
</script>

<div class="flex items-center gap-2 py-3">
	<slot name="icon" class="text-primary" />
	<svelte:component this={icon} class="text-primary" />
	<p class="grow text-base text-gray-300">{text}</p>
	<HeroiconsChevronRight class="text-gray-300" />
</div>
