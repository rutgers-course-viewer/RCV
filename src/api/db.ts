import dotenv from "dotenv";
import mongoose from "mongoose";
import { logger } from "../logger";

dotenv.config();

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl || "", {
    dbName: "RCV-test",
  })
  .then(() => logger.info("Connected to database"))
  .catch((err) => logger.error(err));

process.on("exit", function () {
  mongoose.disconnect();
});

export default mongoose;
