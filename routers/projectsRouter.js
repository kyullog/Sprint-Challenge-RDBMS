const express = require("express");
const router = express.Router();
const db = require("../data/helpers/projectHelpers.js");

router.post("/", async (req, res) => {
  try {
    const project = req.body;
    if (!project.project_name) {
      res.status(400).json({ error: "A name is required for your project" });
    } else {
      const added = await db.insert(project);
      res.status(201).json(added);
    }
  } catch (err) {
    res.status(500).json({ error: "There was a problem adding the project" });
  }
});

router.get("/", async (req, res) => {
  try {
    const projects = await db.get();
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "There was a problem retrieving the projects" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const project = await db.getById(id);
    const actions = await db.getActionsByProject(id);
    const formatActions = actions.map(action => {
      return {
        id: action.id,
        description: action.action_description,
        notes: action.notes,
        completed: !!action.action_completed
      };
    });
    const formatProject = {
      id: project.id,
      name: project.project_name,
      description: project.project_description,
      completed: !!project.project_completed,
      actions: formatActions
    };
    res.status(200).json(formatProject);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "There was a problem getting the project" });
  }
});

module.exports = router;
