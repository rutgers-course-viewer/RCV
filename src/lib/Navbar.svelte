<script lang="ts">
	import HeroiconsMagnifyingGlass20Solid from '~icons/heroicons/magnifying-glass-20-solid';
	import { browser } from '$app/environment';

	// Mac detection, via: https://stackoverflow.com/a/29035153/6525260
	$: isMac =
		browser &&
		(/mac/i.test(
			// @ts-expect-error
			window.navigator.userAgentData
				? // @ts-expect-error
				  window.navigator.userAgentData.platform
				: window.navigator.platform
		) ||
			false);

	$: shortcut = browser ? `(${isMac ? '⌘' : '^'} + K)` : '';

	let inputEl: HTMLInputElement | undefined;
	let isInputFocused = false;

	// Focus on input when Cmd/Ctrl + K is pressed
	$: handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'k' && (isMac ? event.metaKey : event.ctrlKey)) {
			inputEl?.focus();
		} else if (isInputFocused && event.key === 'Escape') {
			inputEl?.blur();
		}
	};

	const onInputFocus = () => {
		isInputFocused = true;
	};

	const onInputBlur = () => {
		isInputFocused = false;
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<div
	class="sticky top-0 flex h-16 w-full items-center gap-2 border-b border-b-gray-700 bg-gray-900 px-6 py-2"
>
	<div class="relative grow">
		<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center p-2">
			<HeroiconsMagnifyingGlass20Solid class="text-primary" />
		</div>
		<input
			bind:this={inputEl}
			on:focus={onInputFocus}
			on:blur={onInputBlur}
			type="text"
			class="border-transparent block h-10 w-full overflow-hidden rounded border bg-gray-900 pl-10 text-sm text-gray-300 caret-gray-300 outline-none
						transition-all duration-150
            placeholder:text-sm placeholder:text-gray-500
					  focus:border focus:border-gray-500 focus:bg-gray-800 focus:ring-gray-500"
			placeholder="search courses, professors, subjects {shortcut}"
		/>
	</div>
	<button
		class="flex h-10 items-center justify-center rounded bg-primary px-4 py-2 text-base font-bold text-gray-300 transition-transform
		       focus:outline-none focus:ring focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900
					 active:scale-95">Open Planner</button
	>
</div>
