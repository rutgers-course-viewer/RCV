import { logger } from './src/lib/logger';
import prisma from './src/lib/prisma';

export async function updateDB() {
	logger.info('Starting dB update');

	const response = await fetch(
		'http://sis.rutgers.edu/soc/api/courses.json?year=2023&term=1&campus=NB'
	);

	if (!response.ok) {
		logger.error('Could not fetch data from Rutgers');
	} else {
		const data = await response.json();
		logger.info('Retrieved data from Rutgers');

		for (const entry of data) {
			await prisma.course.upsert({
				where: { title: entry.title },
				update: { courseNumber: parseInt(entry.courseNumber) },
				create: { title: entry.title, courseNumber: parseInt(entry.courseNumber) }
			});
		}

		logger.info('Updated database');
	}
}

export function updateDBInterval() {
	setInterval(updateDB, 60000);
}
