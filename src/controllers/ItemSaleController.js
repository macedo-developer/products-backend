const ItemSale = require("../models/ItemSale");

module.exports = {
  async list(req, res) {
    try {
      const itemSales = await ItemSale.findAll();

      return res.json(itemSales);
    } catch (err) {
      return console.err("Error in find all!", err);
    }
  },
  async show(req, res) {
    try {
      const itemSale = await ItemSale.findAll({ where: { id: req.params.id } });

      return res.json(itemSale);
    } catch (err) {
      return console.error("Error in find one", err);
    }
  },
  async create(req, res) {
    const { idSale, idProduct, valueProduct, idUser = null } = req.body;

    try {
      const itemSale = await ItemSale.create({
        idSale,
        idProduct,
        valueProduct,
        idUser,
      });

      return res.status(200).json(itemSale);
    } catch (err) {
      res.status(500).json({ message: "Error in create" });

      return console.error("Error in create");
    }
  },
};
