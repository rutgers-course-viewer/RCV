import { courseModel } from '$lib/courseSchema.js';
import { logger } from '$lib/logger.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const courseName = params.slug;
	logger.info(`Requested Course: ${courseName}`);
	const courseQuery = courseModel.findOne({ title: courseName }).exec();

	const res = { error: false, course: {}, message: '' };

	await courseQuery
		.then((foundCourse) => {
			if (foundCourse) {
				res.error = false;
				res.course = { title: foundCourse.title };
			} else {
				res.error = true;
				res.message = 'Course not found';
			}
		})
		.catch(() => {
			res.error = true;
			res.message = 'An error occurred while searching for the course';
		});

	return res;
}
