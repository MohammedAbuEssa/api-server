"use-strict";
// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

const Person = (sequelize, DataTypes) =>
  sequelize.define("Person", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = Person;
