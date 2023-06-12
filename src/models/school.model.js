"use-strict";

const School = (sequelize, DataTypes) =>
  sequelize.define("School", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfStudents: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = School;
