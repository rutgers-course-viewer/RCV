<script lang="ts">
	let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	const bgColors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];

	import type { calEvent } from './events';
	import { events } from './events';

	function getEventStyle(event: calEvent) {
		return `grid-row-start: ${event.startRow + 1}; grid-row-end: ${event.endRow + 1}; z-index: 2;`;
	}
</script>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Week Calendar Demo - RCV</title>
	</head>

	<body>
		<div
			class="container mx-auto max-w-screen-xl mt-10 shadow-lg border-[1px] rounded-lg border-black"
		>
			<h1 class="text-4xl font-bold my-8 text-center">Class Calendar</h1>
			<div class="flex flex-row h-10 w-full">
				<div class="flex-none w-20">
					&nbsp;
					<!-- Add more time slots here, making sure to set a fixed height -->
				</div>
				<div class="flex flex-row w-full">
					{#each weekdays as day}
						<div class="text-center flex-1">
							<div class="font-bold">{day}</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="flex relative h-[1024px]">
				<div class="grid time-grid-rows grid-flow-row w-20 flex-none h-full">
					<!-- Time slots -->
					{#each { length: 15 } as _, i}
						<div class="mx-auto border-top flex-none">
							<div class="font-bold">
								{(i + 8) % 12}:00 {i + 8 > 12 ? 'PM' : 'AM'}
							</div>
						</div>
					{/each}

					<!-- Add more time slots here, making sure to set a fixed height -->
				</div>
				<div class="grid grid-cols-7 grid-rows-1 flex-1">
					<div class="relative">
						<div class="grid gap-0 hours-grid-rows grid-cols-1 grid-flow-row h-full">
							{#each events as event, index}
								<div style={getEventStyle(event)} class="px-2">
									<div
										class="event h-full {bgColors[
											index % bgColors.length
										]} bg-blue-300 rounded-md grid place-content-center shadow-md"
									>
										{event.title}
										<br />
										<h3>{event.startString} - {event.endString}</h3>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div></body
	>
</html>

<style>
	.hours-grid-rows {
		height: 100% absolute;
		grid-template-rows: repeat(180, 1fr);
	}
	.time-grid-rows {
		grid-template-rows: repeat(15, 1fr);
	}
	.border-top::before {
		content: '';
		display: block;
		height: 1px;
		background-color: black;
		position: absolute;
		width: 100%;
		left: 0;
		z-index: 1;
	}
</style>
