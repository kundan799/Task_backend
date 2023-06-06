const express = require("express");
const { createProject, geteProject, updateProject } = require("../Controller/project.controller");
const app = express.Router();

app.post("/", createProject);
app.get("/", geteProject);
app.patch("/:id", updateProject);
module.exports = app;
