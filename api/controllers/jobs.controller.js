import Job from "../models/job.model.js";

export const createJob = async (req, res, next) => {
    try {
      const {
        companyName,
        logo,
        title,
        salary,
        jobType,
        locationType,
        location,
        description,
        about,
        skills,
        information
      } = req.body;
  
      if (
        !companyName||
        !logo||
        !title||
        !salary||
        !jobType||
        !locationType||
        !location||
        !description||
        !about||
        !skills||
        !information
      ) {
        return res.status(400).json({message: "Please fill all the fields"});
      }
      const skillsArray = skills.split(",").map((skill) => skill.trim());
      const newJob = new Job({
        companyName,
        logo,
        title,
        salary,
        jobType,
        locationType,
        location,
        description,
        about,
        information,
        skills: skillsArray,
        refUserId: req.userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await newJob.save();
      res.status(201).json({message: "Job created successfully"});
    } catch (err) {
      next(err);
    }
  };
export const getAllJobs = async (req, res, next) => {
  const { skills } = req.query;
    try {
      if(!skills){
        const jobs = await Job.find()
          .select(["title", "skills","salary", "location", "locationType", "logo", "jobType"]) // select only these fields
          .sort({ createdAt: -1 }); // -1 for descending order
        res.status(200).json(jobs);
      } else {
        const skillsArray = skills.split(",").map((skill) => skill.trim());
        const regexArray = skillsArray.map((skill) => ({
          skills: { $regex: new RegExp(skill, "i") }
        }));
        const jobs = await Job.find({ $or: regexArray })
          .select(["title", "skills","salary", "location", "locationType", "logo", "jobType"]) // select only these fields
          .sort({ createdAt: -1 }); // -1 for descending order
        res.status(200).json(jobs);
      }
    } catch (err) {
      next(err);
    }
  };
  
export const getJobById = async (req, res, next) => {
    try {
      const { jobnumber } = req.params;
      const job = await Job.findById(jobnumber);
      // if job is not found in the database it will give 500 because Job.findById() will throw an error instead of returning null
      if (!job) {
        return res.status(404).json({message: "Job not found"});
      }
      res.status(200).json(job);
    } catch (err) {
      next(err);
    }
  };
  
export const updateJob = async (req, res, next) => {
    try {
      const { jobnumber } = req.params;
      const job = await Job.findById(jobnumber);
      const skillsArray = req.body.skills
        ? req.body.skills.split(",").map((skill) => skill.trim())
        : null;
      const updatedJob = await Job.findByIdAndUpdate(
        jobnumber,
        {
          title: req.body.title || job.title,
          about: req.body.about || job.about,
          companyName: req.body.companyName || job.companyName,
          location: req.body.location || job.location,
          salary: req.body.salary || job.salary,
          description: req.body.description || job.description,
          locationType: req.body.locationType || job.locationType,
          jobType: req.body.jobType || job.jobType,
          skills: skillsArray || job.skills,
          logo: req.body.logo || job.logo,
          information: req.body.information || job.information,
          updatedAt: new Date(),
          createdAt: job.createdAt,
        },
        { new: true }
      );
      await updatedJob.save();
      res.status(200).json({ message: "Job updated successfully", updatedJob});
    } catch (err) {
      next(err);
    }
  };

export const getSkills = async (req, res, next) => {
    try {
      const skills = await Job.distinct("skills");
      res.status(200).json(skills);
    } catch (err) {
      next(err);
    }
  };