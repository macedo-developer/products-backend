const express = require("express");

const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserController");
const SaleController = require("./controllers/SaleController");
const ItemSaleController = require("./controllers/ItemSaleController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Rota de teste");
});

routes.get("/products", ProductController.list);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.create);
routes.put("/products/:id", ProductController.update);

routes.get("/users", UserController.list);
routes.get("/user", UserController.show);
routes.get("/users/:id", UserController.showUser);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);

routes.get("/sales", SaleController.list);
routes.get("/sales/:id", SaleController.show);
routes.post("/sales", SaleController.create);
routes.put("/sales/:id", SaleController.update);

routes.get("/itemSales", ItemSaleController.list);
routes.get("/itemSales/:id", ItemSaleController.show);
routes.post("/itemSales", ItemSaleController.create);

module.exports = routes;
