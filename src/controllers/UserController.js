const User = require("../models/User");

module.exports = {
  async list(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      return console.err("Error in find all!", err);
    }
  },
  async show(req, res) {
    try {
      const user = await User.findAll({ where: { id: req.params.id } });

      return res.json(user);
    } catch (err) {
      return console.error("Error in find one", err);
    }
  },
  async create(req, res) {
    const { name, password } = req.body;

    try {
      const user = await User.create({ name, password });

      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: "Error in create" });

      return console.error("Error in create", err);
    }
  },
  async update(req, res) {
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;

    const { name, password } = req.body;

    const id = req.params.id;

    try {
      await User.update({ name, password }, { where: { id: { [Op.eq]: id } } });

      return res.json({ msg: `Updated user!` });
    } catch (err) {
      return res.json({ msg: `User not updated!` });
    }
  },
};
