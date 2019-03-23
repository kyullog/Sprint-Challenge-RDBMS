const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("./routers/projectsRouter.js");
const actionsRouter = require("./routers/actionsRouter.js");

const server = express();
const mask = helmet();
const parser = express.json();

server.use(mask, parser);
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;
