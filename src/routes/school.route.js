const express = require("express");
const schoolRouter = express.Router();
const { PersonModal, SchoolModal } = require("../models/index");
const Collection = require("../models/lib/collection");

schoolRouter.get("/school", getSchool);
schoolRouter.get("/school/:id", getSchool);
schoolRouter.post("/school", createSchool);
schoolRouter.put("/school/:id", updateSchool);
schoolRouter.delete("/school/:id", deleteSchool);
schoolRouter.get("/schoolperson/:id", getSchoolPerson);
// async function getAllSchool(req, res) {
//   let sechoolResult = await School.findAll();
//   res.status(200).json(sechoolResult);
// }

async function getSchoolPerson(req, res) {
  let { id } = req.params;
  let schoolResult = await SchoolModal.readSchoolPerson(id, PersonModal.model);
  res.status(200).send(schoolResult);
}

async function getSchool(req, res) {
  const schoolId = parseInt(req.params.id);
  let school = await SchoolModal.read(schoolId);
  res.status(200).json(school);
}

async function createSchool(req, res) {
  let newSchool = req.body;
  let school = await SchoolModal.add(newSchool);
  res.status(201).json(school);
}

async function updateSchool(req, res) {
  let schoolId = parseInt(req.params.id);
  let updateSchool = req.body;
  let updatedSchool = await SchoolModal.update(updateSchool, schoolId);
  res.status(201).json(updatedSchool);
}

async function deleteSchool(req, res) {
  let schoolId = parseInt(req.params.id);
  let deleteSchool = await SchoolModal.delete(schoolId);
  res.status(204).json(deleteSchool);
}

module.exports = schoolRouter;
