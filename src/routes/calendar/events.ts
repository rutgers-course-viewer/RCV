export type calEvent = {
	start: string;
	end: string;
	title: string;
	startRow: number;
	endRow: number;
	rowSpan: number;
	startString: string;
	endString: string;
};

export let events: calEvent[] = [
	{
		start: '08:00',
		end: '09:00',
		title: 'Event 1',
		startRow: 0,
		endRow: 0,
		rowSpan: 0,
		startString: '',
		endString: ''
	},
	{
		start: '09:30',
		end: '10:00',
		title: 'Event 2',
		startRow: 0,
		endRow: 0,
		rowSpan: 0,
		startString: '',
		endString: ''
	},
	{
		start: '14:00',
		end: '16:30',
		title: 'Event 3',
		startRow: 0,
		endRow: 0,
		rowSpan: 0,
		startString: '',
		endString: ''
	},
	{
		start: '18:00',
		end: '22:00',
		title: 'Event 3',
		startRow: 0,
		endRow: 0,
		rowSpan: 0,
		startString: '',
		endString: ''
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