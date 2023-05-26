import express, { Response } from "express";
import { logger } from "../logger";
import { courseModel } from "./courseSchema";
import { updateDB, updateDBInterval } from "./updateDb";

const router = express.Router();

router.get("/", (_, res: Response) => {
  res.send("Welcome to API");
});

router.get("/course/:course", async (req: any, res: Response) => {
  const courseName = req.params.course;
  logger.info(`Requested Course: ${courseName}`);
  const course = await courseModel.findOne({ title: courseName }).exec();
  res.send(course);
});

// Call the updateDB function immediately
updateDB();
// Start the updateDB interval
updateDBInterval();

export = router;
