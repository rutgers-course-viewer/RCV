import prisma from '$lib/server/prisma.js';
import { logger } from '$lib/server/logger';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	logger.info(`Requested all courses`);
	const courses = await prisma.course.findMany();

	return { courses };
}
