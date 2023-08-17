import prisma from '$lib/prisma.js';
import { logger } from '$lib/logger';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const courseName = params.slug;
	logger.info(`Requested Course: ${courseName}`);
	const course = await prisma.course.findUnique({ where: { title: courseName } });

	if (!course) {
		return { error: true };
	} else {
		return { course: course };
	}
}
