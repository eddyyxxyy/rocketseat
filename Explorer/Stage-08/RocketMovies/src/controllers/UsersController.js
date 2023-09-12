const knex = require("../database/knex");

class UsersController {
  async create(req, res) {
    res.json({ message: "Testing UsersController /create route." });
  }
}

module.exports = UsersController;
