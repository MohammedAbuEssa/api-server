"use strict";
require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const Collection = require("./lib/collection");
const person = require("./person.model");
const school = require("./school.model");
const POSTGRES_URI =
  process.env.NODE_ENV === "test"
    ? "sqlite::memory:"
    : process.env.DATABASE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const personTable = person(sequelize, DataTypes);
const schoolTable = school(sequelize, DataTypes);

const personCollection = new Collection(personTable);
const schoolCollection = new Collection(schoolTable);

schoolTable.hasMany(personTable, {
  foreignKey: "schoolId",
  sourceKey: "id",
});
personTable.belongsTo(schoolTable, {
  foreignKey: "personId",
  targetKey: "id",
});

module.exports = {
  db: sequelize,
  PersonModal: personCollection,
  SchoolModal: schoolCollection,
};
