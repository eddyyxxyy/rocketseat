const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const userExists = require("../utils/userExists");
const checkUserRequestData = require("../utils/checkUserRequestData");
const { hash, compare } = require("bcrypt");

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
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {null} JSON response with a message/data to the client
   */
  async create(req, res) {
    const { name, email, password } = req.body;

    const errors = checkUserRequestData({ name, email, password });

    if (Object.keys(errors).length > 0) {
      throw new AppError(errors);
    }

    if (await userExists(knex, email)) {
      throw new AppError("E-mail already in use, try another.");
    }

    const encryptedPassword = await hash(password, 8);

    await knex("users").insert({ name, email, password: encryptedPassword });

    res.status(201).json({ message: `User '${name}' created with success` });
  }
}

module.exports = UsersController;
