import prisma from '$lib/server/prisma.js';
import { logger } from '$lib/server/logger';

export async function load({ params }) {
	const courseName = params.slug;
	logger.info(`Requested Course: ${courseName}`);
	const course = await prisma.course.findUnique({ where: { title: courseName } });

	return { course: course };
}
