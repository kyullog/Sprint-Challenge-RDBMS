const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("./routers/projectsRouter.js");

const server = express();
const mask = helmet();
const parser = express.json();

server.use(mask, parser);
server.use("/api/projects", projectsRouter);

module.exports = server;
