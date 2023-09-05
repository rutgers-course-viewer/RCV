export type calEvent = {
	weekday: Weekday;
	start: string;
	end: string;
	title: string;
};

export type calComponent = {
	start: string;
	end: string;
	title: string;
	startRow: number;
	endRow: number;
	rowSpan: number;
	startString: string;
	endString: string;
};

export enum Weekday {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday
}

const calEvents: calEvent[] = [
	{
		weekday: Weekday.Monday,
		start: '08:00',
		end: '09:00',
		title: 'Event 1'
	},
	{
		weekday: Weekday.Tuesday,
		start: '09:30',
		end: '10:00',
		title: 'Event 2'
	},
	{
		weekday: Weekday.Tuesday,
		start: '10:30',
		end: '18:00',
		title: 'Event 2'
	},
	{
		weekday: Weekday.Wednesday,
		start: '14:00',
		end: '16:30',
		title: 'Event 3'
	},
	{
		weekday: Weekday.Friday,
		start: '18:10',
		end: '22:55',
		title: 'Event 3'
	}
	// ... more events
];

type GroupedCalEvents = {
	[key in Weekday]: calComponent[];
};

export const groupedEvents: GroupedCalEvents = {
	[Weekday.Monday]: [],
	[Weekday.Tuesday]: [],
	[Weekday.Wednesday]: [],
	[Weekday.Thursday]: [],
	[Weekday.Friday]: [],
	[Weekday.Saturday]: [],
	[Weekday.Sunday]: []
};

calEvents.forEach((event) => {
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

	groupedEvents[event.weekday].push({
		...event,
		startRow,
		endRow,
		rowSpan: endRow - startRow,
		startString,
		endString
	});
});
