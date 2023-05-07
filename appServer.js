const express = require("express");
const APP_SERVER = express();
const BODY_PARSER = require("body-parser");

APP_SERVER.use(BODY_PARSER.urlencoded({ extended: true }));
APP_SERVER.use(BODY_PARSER.json());

const FilesRouter = require("./Controllers/files.controller");

APP_SERVER.use("/filesystem", FilesRouter);
module.exports = APP_SERVER;
