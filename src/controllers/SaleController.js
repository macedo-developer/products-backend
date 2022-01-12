const Sale = require("../models/Sale");

module.exports = {
  async list(req, res) {
    try {
      const sales = await Sale.findAll();

      return res.json(sales);
    } catch (err) {
      return console.err("Error in find all!");
    }
  },
  async show(req, res) {
    try {
      const sale = await Sale.findAll({ where: { id: req.params.id } });

      return res.json(sale);
    } catch (err) {
      return console.error("Error in find one", err);
    }
  },
  async create(req, res) {
    const { client, total_price, discount, idUser = null } = req.body;

    try {
      const sale = await Sale.create({ client, total_price, discount, idUser });

      return res.status(200).json(sale);
    } catch (err) {
      res.status(500).json({ message: "Error in create" });

      return console.error("Error in create", err);
    }
  },
  async update(req, res) {
    const Sequelize = require("sequelize");

    const Op = Sequelize.Op;

    const { client, total_price, discount } = req.body;

    const id = req.params.id;

    try {
      await Sale.update(
        { client, total_price, discount },
        { where: { id: { [Op.eq]: id } } }
      );

      return res.json({ msg: `Updated sale!` });
    } catch (err) {
      return res.json({ msg: `Sale not updated!` });
    }
  },
};
