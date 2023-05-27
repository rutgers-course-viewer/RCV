import express, { Request, Response } from "express";
import { logger } from "../logger";
import { courseModel } from "./courseSchema";
import { updateDB, updateDBInterval } from "./updateDb";

const router = express.Router();

router.get("/", (_, res: Response) => {
  res.send("Welcome to API");
});

router.get("/course/:course", async (req: Request, res: Response) => {
  const courseName = req.params.course;
  logger.info(`Requested Course: ${courseName}`);
  const course = courseModel.findOne({ title: courseName }).exec();

  course
    .then((foundCourse) => {
      if (foundCourse) {
        res.send(foundCourse);
      } else {
        res.send({ error: "Course not found" });
      }
    })
    .catch(() => {
      res.send({ error: "An error occurred while searching for the course" });
    });
});

router.get("/course/", async (_, res: Response) => {
  logger.info(`Requested all courses`);

  const courses = courseModel.find({}).exec();

  courses
    .then((foundCourses) => {
      if (foundCourses.length > 0) {
        res.send(foundCourses);
      } else {
        res.send({ error: "No courses found" });
      }
    })
    .catch(() => {
      res.send({ error: "An error occurred while retrieving courses" });
    });
});

// Call the updateDB function immediately
updateDB();
// Start the updateDB interval
updateDBInterval();

export = router;
