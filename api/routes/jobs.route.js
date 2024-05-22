import express from "express";
import { createJob, getAllJobs, getJobById, updateJob } from "../controllers/jobs.controller.js";
import { verifyAuth } from "../middleware/verifyAuth.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("Job Route!");
  });
  router.post("/create", verifyAuth, createJob);
  router.get("/all", getAllJobs);
  router.get("/view/:jobnumber", getJobById); // job/123576
  router.patch("/update/:jobnumber", verifyAuth, updateJob);

export default router;