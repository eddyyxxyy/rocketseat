const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const userWithProvidedEmailExists = require("../utils/userWithProvidedEmailExists");
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

    if (await userWithProvidedEmailExists(knex, email)) {
      throw new AppError("E-mail already in use, try another.");
    }

    const encryptedPassword = await hash(password, 8);

    await knex("users").insert({ name, email, password: encryptedPassword });

    res.status(201).json({ message: `User '${name}' created with success` });
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, password, oldPassword } = req.body;
    const userOldPassword = await knex("users").where({ id }).first();

    let errors = checkUserRequestData({ name, email, password, oldPassword });

    if (email) {
      const userWithEmail = await userWithProvidedEmailExists(knex, email);
      if (id != userWithEmail.id) {
        errors = {
          ...errors,
          email: "E-mail already in use, try another.",
        };
      }
    }

    const passwordsMatch = await compare(oldPassword, userOldPassword.password);

    if (!passwordsMatch) {
      errors = {
        ...errors,
        oldPassword: `Old password does not match.`,
      };
    }

    if (Object.keys(errors).length > 0) {
      throw new AppError(errors);
    }

    const encryptedPassword = await hash(password, 8);

    await knex("users").update({ name, email, password: encryptedPassword });

    res
      .status(201)
      .json({ message: `User '${name}' info updated with success` });
  }
}

module.exports = UsersController;
