const db = require("../dbConfig.js");

module.exports = {
  insert,
  getActionsByProject,
  getById
};
function insert(project) {
  return db("projects").insert(project);
}

function getActionsByProject(id) {
  return db("actions").where({ project_id: id });
}

function getById(id) {
  return db("projects")
    .where({ id })
    .first();
}
