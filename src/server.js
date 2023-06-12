"use strict";
const express = require("express");
const app = express();
const personRouter = require("./routes/person.route");
app.use(express.json());
app.use(personRouter);
const schoolRouter = require("./routes/school.route");
app.use(schoolRouter);

app.get("/", homeHandler);
function homeHandler(req, res) {
  res.status(200).send("hi");
}
function start(port) {
  app.listen(port, () => {
    console.log(`server is listen on ${port}`);
  });
}
module.exports = {
  start: start,
  app: app,
};
