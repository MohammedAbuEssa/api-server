const express = require("express");
const personRouter = express.Router();
const { PersonModal, SchoolModal } = require("../models/index");
const Collection = require("../models/lib/collection");

personRouter.get("/person", getPerson);
personRouter.get("/person/:id", getPerson);
personRouter.post("/person", createPerson);
personRouter.put("/person/:id", updatePerson);
personRouter.delete("/person/:id", deletePerson);

// async function getAllPerson(req, res) {
//   let PersonResult = await Person.findAll();
//   res.status(200).json(PersonResult);
// }

async function getPerson(req, res) {
  const personId = parseInt(req.params.id);
  let person = await PersonModal.read(personId);
  res.status(200).json(person);
}
async function createPerson(req, res) {
  let newPerson = req.body;
  let person = await PersonModal.add(newPerson);
  res.status(201).json(person);
}
async function updatePerson(req, res) {
  let personId = parseInt(req.params.id);
  let updatePerson = req.body;
  let updatedPerson = await PersonModal.update(updatePerson, personId);
  res.status(201).json(updatedPerson);
}
async function deletePerson(req, res) {
  let personId = parseInt(req.params.id);
  let deletePerson = await PersonModal.delete(personId);
  res.status(204).json(deletePerson);
}

module.exports = personRouter;
