const FilesRouter = require("express").Router();
const filesystem = require("fs");
const path = require("path");
const { getFileName } = require("../utils/calendar");
FilesRouter.post("/createFileSynchronusly", function (req, res) {
  const { message } = req.body;
  const path = `./fileSystem/${getFileName(new Date())}`;
  try {
    filesystem.writeFileSync(path, message || "New File Created");
    return res.status(200).json({
      message: "File created successfully!!!",
    });
  } catch (error) {
    return res.status(501).json({
      message: "Error creating file!!!",
    });
  }
});

FilesRouter.post("/createFile/:name", function (req, res) {
  const { message } = req.body;
  const path = `./fileSystem/${getFileName(new Date())}`;
  filesystem.writeFile(path, message || "File Created", function (err) {
    if (err) {
      return res.status(501).json({
        message: "Error creating file!!!",
      });
    } else {
      return res.status(200).json({
        message: "File created successfully!!!",
        response: "success",
      });
    }
  });
});

FilesRouter.get("/createFile/:name", function (req, res) {
  const { message } = req.body;
  const path = `./fileSystem/${getFileName(new Date())}`;
  filesystem.readdir(path, message || "File Created", function (err) {
    if (err) {
      return res.status(501).json({
        message: "Error creating file!!!",
      });
    } else {
      return res.status(200).json({
        message: "File created successfully!!!",
        response: "success",
      });
    }
  });
});

module.exports = FilesRouter;
