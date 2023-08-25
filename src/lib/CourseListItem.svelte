<script lang="ts">
	import type { Course } from '@prisma/client';

	export let course: Course;

	const filterWords = ['II', 'III', 'IV', 'VI', 'VII', 'IX', 'XI'];

	const convertToTitleCase = (courseTitle: string) =>
		courseTitle
			.trim()
			.split(' ')
			.map((w) => {
				if (!w) {
					return w;
				}

				if (filterWords.includes(w)) {
					return w;
				}

				return w[0].toUpperCase() + w.slice(1).toLowerCase();
			})
			.join(' ');

	$: courseTitle = convertToTitleCase(course.expandedTitle ? course.expandedTitle : course.title);
	$: courseCredits = course.credits > 0 ? `${course.credits} credits` : `Credits by arrangment`;
</script>

<div class="flex grow items-center rounded-md border border-gray-700 bg-gray-800 p-2">
	<div class="flex min-w-0 grow gap-2">
		<h3 class="text-base text-gray-300">{course.courseString}</h3>
		<h3 class="text-base text-gray-300">•</h3>
		<h3
			class="grow overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold text-gray-300"
			title={course.title}
		>
			{courseTitle}
		</h3>
		<h3 class="whitespace-nowrap text-base text-gray-300">
			{courseCredits}
		</h3>
		<div class="flex items-center justify-center gap-1 rounded-full bg-[#A7F3D0] px-2 py-1">
			<span class="h-2 w-2 rounded-full bg-[#065F46]"></span>
			<p class="text-xs text-[#065F46]">{course.openSections}/4</p>
		</div>
	</div>
</div>
