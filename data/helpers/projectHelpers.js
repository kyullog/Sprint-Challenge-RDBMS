const db = require("../dbConfig.js");

module.exports = {
  insert: project => {
    return db("projects").insert(project);
  }
};
