const Sequelize = require("sequelize");

const sequelize = require("../db");

const schema = "products";

class User extends Sequelize.Model {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNUll: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "user", schema }
);

sequelize.sync();

module.exports = User;
