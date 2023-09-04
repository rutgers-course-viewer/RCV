export type calEvent = {
	start: string;
	end: string;
	title: string;
	startRow?: number;
	endRow?: number;
	rowSpan?: number;
	startString?: string;
	endString?: string;
};

export let events: calEvent[] = [
	{
		start: '08:00',
		end: '09:00',
		title: 'Event 1'
	},
	{
		start: '09:30',
		end: '10:00',
		title: 'Event 2',
	},
	{
		start: '14:00',
		end: '16:30',
		title: 'Event 3',
	},
	{
		start: '18:15',
		end: '22:30',
		title: 'Event 3',
	}
	// ... more events
];

events = events.map((event) => {
	const [startHour, startMinute] = event.start.split(':').map(Number);
	const [endHour, endMinute] = event.end.split(':').map(Number);

	const startString = `${startHour % 12}:${startMinute === 0 ? '00' : startMinute} ${
		startHour > 12 ? 'PM' : 'AM'
	}`;
	const endString = `${endHour % 12}:${endMinute === 0 ? '00' : endMinute} ${
		endHour > 12 ? 'PM' : 'AM'
	}`;

	const startRow = ((startHour - 8) * 60 + startMinute) / 5;
	const endRow = ((endHour - 8) * 60 + endMinute) / 5;

	return {
		...event,
		startRow,
		endRow,
		rowSpan: endRow - startRow,
		startString,
		endString
	};
});