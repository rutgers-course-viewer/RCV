<script lang="ts">
	import HeroiconsAcademicCap from '~icons/heroicons/academic-cap';
	import HeroiconsBookOpen from '~icons/heroicons/book-open';
	import HeroiconsBuildingLibrary from '~icons/heroicons/building-library';
	import HeroiconsCalculator from '~icons/heroicons/calculator';
	import HeroiconsCalendarDays from '~icons/heroicons/calendar-days';
	import HeroiconsChevronRight from '~icons/heroicons/chevron-right';
	import HeroiconsGlobeEuropeAfrica from '~icons/heroicons/globe-europe-africa';
	import HeroiconsMapPin from '~icons/heroicons/map-pin';
	import HeroiconsSquare3Stack3d from '~icons/heroicons/square-3-stack-3d';
	import HeroiconsUserGroup from '~icons/heroicons/user-group';
	import SidebarItem from './SidebarItem.svelte';
</script>

<div
	class="sticky top-0 flex h-screen overflow-y-auto w-60 shrink-0 flex-col border-r border-r-gray-700"
>
	<div class="flex grow flex-col gap-8 px-4 py-6">
		<div class="flex gap-3">
			<div class="flex items-center justify-center rounded-full bg-gray-800 p-2">
				<HeroiconsBookOpen class="text-primary" />
			</div>
			<h1 class="text-3xl font-bold text-gray-300">RCV</h1>
		</div>
		<div class="flex grow flex-col gap-2">
			<p class="text-sm uppercase text-gray-500">Filter</p>
			<SidebarItem icon={HeroiconsAcademicCap} text="Campus" />
			<SidebarItem icon={HeroiconsMapPin} text="Location" />
			<SidebarItem icon={HeroiconsBuildingLibrary} text="School" />
			<SidebarItem icon={HeroiconsGlobeEuropeAfrica} text="Core Code" />
			<SidebarItem icon={HeroiconsCalculator} text="Subject" />
			<SidebarItem icon={HeroiconsUserGroup} text="Class mode" />
			<SidebarItem icon={HeroiconsSquare3Stack3d} text="Class level" />
		</div>
	</div>
	<div class="flex items-center gap-2 border-t border-t-gray-700 p-4">
		<HeroiconsCalendarDays class="text-primary" />
		<p class="grow text-base text-gray-300">Spring 2023</p>
		<HeroiconsChevronRight class="text-gray-300" />
	</div>
</div>
