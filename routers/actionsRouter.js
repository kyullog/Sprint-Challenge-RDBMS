const express = require("express");
const router = express.Router();
const db = require("../data/helpers/actionHelpers.js");

router.post("/", async (req, res) => {
  try {
    const action = req.body;
    if (!action.action_description || !action.project_id) {
      res
        .status(400)
        .json({ error: "Please provide an action name and valid project id" });
    } else {
      const posted = await db.insert(action);
      res.status(201).json(posted);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "There was a problem adding the action" });
  }
});

router.get("/", async (req, res) => {
  try {
    const actions = await db.get();
    res.status(200).json(actions);
  } catch (err) {
    res
      .status(500)
      .json({ error: "There was a problem retrieving the actions" });
  }
});

module.exports = router;
