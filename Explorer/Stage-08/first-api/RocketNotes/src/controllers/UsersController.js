const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");
const { hash } = require("bcrypt");

class UsersController {
  async create(req, resp) {
    const { name, email, password } = req.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExists) {
      throw new AppError("Este e-mail já está cadastrado.");
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return resp.status(201).json();
  }
}

module.exports = UsersController;
