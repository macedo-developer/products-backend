const express = require("express");
const cors = require("cors");
const api = express();

const routes = require("./router");

api.use(express.json());
api.use(cors());
api.use(routes);

api.listen(3001);
