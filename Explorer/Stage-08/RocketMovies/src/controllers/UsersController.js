const knex = require("../database/knex");

/**
 * UsersController class
 * @class
 */
class UsersController {
  /**
   * Creates a new user.
   *
   * This is an asynchronous function that receives
   * a request and a response object, and handles the
   * data that will be registered in the Database.
   *
   * @param {Object} req - The request object
   * @param {Object} res - The response object
   * @returns {Object} JSON response with a message/data
   */
  async create(req, res) {
    return res.json({ message: "Testing UsersController /create route." });
  }
}

module.exports = UsersController;
