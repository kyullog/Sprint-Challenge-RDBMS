const db = require("../dbConfig.js");

module.exports = {
  insert: action => {
    return db("actions").insert(action);
  }
};
