const db = require("../dbConfig.js");

module.exports = {
  insert: action => {
    return db("actions").insert(action);
  },

  get: () => {
    return db("actions")
      .select(
        "action_description as description",
        "notes",
        "action_completed as completed",
        "projects.project_name as project"
      )
      .innerJoin("projects", "actions.project_id", "projects.id");
  }
};
