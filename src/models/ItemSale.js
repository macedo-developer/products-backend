const Sequelize = require("sequelize");

const sequelize = require("../db");

const schema = "products";

class ItemSale extends Sequelize.Model {}

ItemSale.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    idSale: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    idProduct: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    valueProduct: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
  },
  { sequelize, modelName: "item_sale", schema }
);

sequelize.sync();

module.exports = ItemSale;
