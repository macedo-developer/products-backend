const Sequelize = require("sequelize");

const sequelize = require("../db");

const schema = "products";

class Sale extends Sequelize.Model {}

Sale.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    client: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    total_price: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    discount: Sequelize.DECIMAL,
    idUser: Sequelize.INTEGER,
  },
  { sequelize, modelName: "sale", schema }
);

sequelize.sync();

module.exports = Sale;
