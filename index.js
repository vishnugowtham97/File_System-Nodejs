const express = require("express");
const APP_SERVER = require("./appServer");
const NODE_SERVER = express();
const BODY_PARSER = require("body-parser");

const PORT = 4000;
NODE_SERVER.use("/", APP_SERVER);
try {
  NODE_SERVER.listen(PORT, "localhost", () => {
    console.log("SERVER STARTED", PORT);
  });
} catch (error) {
  console.log("ERROR", error);
}
