const Sequelize = require("sequelize");

const sequelize = require("../db");

const schema = "products";

class Product extends Sequelize.Model {}

Product.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    idUser: Sequelize.INTEGER,
  },
  { sequelize, modelName: "product", schema }
);

sequelize.sync();

module.exports = Product;
