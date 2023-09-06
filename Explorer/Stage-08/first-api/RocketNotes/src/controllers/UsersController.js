const AppError = require("../utils/AppError");

class UsersController {
  create(req, resp) {
    const { name, email, password } = req.body;

    if (!name) {
      throw new AppError("O nome é obrigatório!");
    }

    resp.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
