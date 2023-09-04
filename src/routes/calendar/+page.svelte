<script lang="ts">
	let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	const bgColors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];

	import type { calComponent } from './events.js';
	import { events } from './events.js';

	function getEventStyle(event: calComponent) {
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
			class="container mx-auto mt-10 max-w-screen-xl rounded-lg border-[1px] border-black shadow-lg"
		>
			<h1 class="my-8 text-center text-4xl font-bold">Class Calendar</h1>
			<div class="flex h-10 w-full flex-row">
				<div class="w-20 flex-none">
					&nbsp;
					<!-- Add more time slots here, making sure to set a fixed height -->
				</div>
				<div class="flex w-full flex-row">
					{#each weekdays as day}
						<div class="flex-1 text-center">
							<div class="font-bold">{day}</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="relative flex h-[1024px]">
				<div class="time-grid-rows grid h-full w-20 flex-none grid-flow-row">
					<!-- Time slots -->
					{#each { length: 15 } as _, i}
						<div class="border-top mx-auto flex-none">
							<div class="font-bold">
								{(i + 8) % 12}:00 {i + 8 > 12 ? 'PM' : 'AM'}
							</div>
						</div>
					{/each}

					<!-- Add more time slots here, making sure to set a fixed height -->
				</div>
				<div class="grid flex-1 grid-cols-7 grid-rows-1">
					<div class="relative">
						<div class="hours-grid-rows grid h-full grid-flow-row grid-cols-1 gap-0">
							{#each events as event, index}
								<div style={getEventStyle(event)} class="px-2">
									<div
										class="event h-full {bgColors[
											index % bgColors.length
										]} grid place-content-center rounded-md bg-blue-300 shadow-md"
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
