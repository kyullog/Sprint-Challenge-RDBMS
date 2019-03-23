const express = require("express");
const router = express.Router();
const db = require("../data/helpers/projectHelpers.js");

router.post("/", async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ error: "Please input a project to add" });
    } else {
      const project = req.body;
      if (!project.project_name) {
        res.status(400).json({ error: "A name is required for your project" });
      } else {
        const added = await db.insert(project);
        res.status(201).json(project);
      }
    }
  } catch (err) {}
});

module.exports = router;
