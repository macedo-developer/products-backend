const Product = require("../models/Product");

module.exports = {
  async list(req, res) {
    try {
      const products = await Product.findAll();

      return res.json(products);
    } catch (err) {
      return console.err("Error in find all!", err);
    }
  },
  async show(req, res) {
    try {
      const product = await Product.findAll({ where: { id: req.params.id } });

      return res.json(product);
    } catch (err) {
      return console.error("Error in find one", err);
    }
  },
  async create(req, res) {
    const { description, price, idUser = null } = req.body;
    try {
      const product = await Product.create({ description, price, idUser });

      return res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: "Error in create" });

      return console.error("Error in create", err);
    }
  },
  async update(req, res) {
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;

    const { price } = req.body;
    const id = req.params.id;

    try {
      await Product.update({ price }, { where: { id: { [Op.eq]: id } } });

      return res.json({ msg: `Updated product!` });
    } catch (err) {
      return res.json({ msg: `Product not updated` }, err);
    }
  },
};
