const Sequelize = require("sequelize");

const sequelize = new Sequelize("products", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
  schema: "products",
});

module.exports = sequelize;
