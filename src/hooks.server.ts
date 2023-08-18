import { logger } from '$lib/server/logger';
import prisma from '$lib/server/prisma';

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
				update: {
					subject: entry.subject,
					openSections: parseInt(entry.openSections),
					synopsisUrl: entry.synopsisUrl,
					title: entry.title,
					preReqNotes: entry.preReqNotes,
					courseString: entry.courseString,
					credits: parseFloat(entry.credits) || 0,
					subjectDescription: entry.subjectDescription,
					expandedTitle: entry.expandedTitle,
					mainCampus: entry.mainCampus,
					subjectNotes: entry.subjectNotes,
					courseNumber: parseInt(entry.courseNumber),
					level: entry.level,
					campusCode: entry.campusCode,
					subjectGroupNotes: entry.subjectGroupNotes,
					offeringUnitCode: entry.offeringUnitCode,
					offeringUnitTitle: entry.offeringUnitTitle || '',
					courseDescription: entry.courseDescription,
					supplementCode: entry.supplementCode,
					unitNotes: entry.unitNotes,
					courseNote: entry.courseNote || '',
					campusLocations: entry.campusLocations.map((campusLocation: { code: string }) => {
						return campusLocation.code;
					})
				},
				create: {
					subject: entry.subject,
					openSections: parseInt(entry.openSections),
					synopsisUrl: entry.synopsisUrl,
					title: entry.title,
					preReqNotes: entry.preReqNotes,
					courseString: entry.courseString,
					credits: parseInt(entry.credits) || 0,
					subjectDescription: entry.subjectDescription,
					expandedTitle: entry.expandedTitle,
					mainCampus: entry.mainCampus,
					subjectNotes: entry.subjectNotes,
					courseNumber: parseInt(entry.courseNumber),
					level: entry.level,
					campusCode: entry.campusCode,
					subjectGroupNotes: entry.subjectGroupNotes,
					offeringUnitCode: entry.offeringUnitCode,
					offeringUnitTitle: entry.offeringUnitTitle || '',
					courseDescription: entry.courseDescription,
					supplementCode: entry.supplementCode,
					unitNotes: entry.unitNotes,
					courseNote: entry.courseNote || '',
					campusLocations: entry.campusLocations.map((campusLocation: { code: string }) => {
						return campusLocation.code;
					})
				}
			});
		}

		logger.info('Updated database');
	}
}

export function updateDBInterval() {
	setInterval(updateDB, 60000);
}

updateDB();
updateDBInterval();

/**
 * campusLocations: {
						createMany: {
							data: entry.campusLocations.map((campusLocation: campusLocation) => {
								return { code: campusLocation.code, description: campusLocation.description };
							})
						}
					}
 */
