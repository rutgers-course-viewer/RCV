import { logger } from "../logger";
import { courseModel } from "./courseSchema";

export async function updateDB() {
  logger.info("Starting dB update");

  const response = await fetch(
    "http://sis.rutgers.edu/soc/api/courses.json?year=2023&term=1&campus=NB"
  );

  if (!response.ok) {
    logger.error("Could not fetch data from Rutgers");
  } else {
    const data = await response.json();
    logger.info("Retrieved data from Rutgers");

    for (const course of data) {
      //logger.info(course);
      await courseModel.updateOne({ title: course.title }, course, {
        upsert: true
      });
    }

    logger.info("Updated database");
  }
}

export function updateDBInterval() {
  setInterval(updateDB, 60000);
}
