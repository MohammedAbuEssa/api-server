"use strict";
require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
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

module.exports = {
  db: sequelize,
  Person: person(sequelize, DataTypes),
  School: school(sequelize, DataTypes),
};
