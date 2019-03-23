const express = require("express");
const helmet = require("helmet");

const server = express();
const mask = helmet();
const parser = express.json();

server.use(mask, parser);

module.exports = server;
