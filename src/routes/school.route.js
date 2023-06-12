const express = require("express");
const schoolRouter = express.Router();
const { School } = require("../models/index");

schoolRouter.get("/school", getAllSchool);
schoolRouter.get("/school/:id", getSchool);
schoolRouter.post("/school", createSchool);
schoolRouter.put("/school/:id", updateSchool);
schoolRouter.delete("/school/:id", deleteSchool);

async function getAllSchool(req, res) {
  let sechoolResult = await School.findAll();
  res.status(200).json(sechoolResult);
}

async function getSchool(req, res) {
  const schoolId = parseInt(req.params.id);
  let school = await School.findOne({
    where: {
      id: schoolId,
    },
  });
  res.status(200).json(school);
}

async function createSchool(req, res) {
  let newSchool = req.body;
  let school = await School.create(newSchool);
  res.status(201).json(school);
}

async function updateSchool(req, res) {
  let schoolId = parseInt(req.params.id);
  let updateSchool = req.body;
  let foundSchool = await School.findOne({ where: { id: schoolId } });
  let updatedSchool = await foundSchool.update(updateSchool);
  res.status(201).json(updatedSchool);
}

async function deleteSchool(req, res) {
  let schoolId = parseInt(req.params.id);
  let deleteSchool = await Person.destroy({ where: { id: schoolId } });
  res.status(204).json(deleteSchool);
}

module.exports = schoolRouter;
