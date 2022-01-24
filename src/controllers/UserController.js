const { response } = require("express");
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
  async showUser(req, res) {
    try {
      const user = await User.findAll({ where: { id: req.params.id } });

      return res.json(user);
    } catch (err) {
      return console.error("Error in find one", err);
    }
  },
  async show(req, res) {
    try {
      const filter = req.query;

      const name = filter.username;
      const password = filter.password;

      const user = await User.findAll({
        where: { name: name, password: password },
      });

      if (user.length == 0) {
        return res.status(400).json(user);
      }

      return res.json(user);
    } catch (err) {
      return console.error("Error in find user", err);
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
