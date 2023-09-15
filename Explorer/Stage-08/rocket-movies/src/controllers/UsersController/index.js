const conn = require('../../database/connection');
const AppError = require('../../utils/AppError');
const checkUserExists = require('../../utils/checkUserExists');
const checkEmail = require('../../utils/checkEmail');
const checkPassword = require('../../utils/checkPassword');
const { hash } = require('bcrypt');

class UsersController {
  async create(req, res, next) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      const missing = ['name', 'email', 'password'].filter(
        (field) => !req.body[field]
      );
      return next(
        new AppError(`Missing required field(s): ${missing.join(', ')}`, 400)
      );
    }

    try {
      await checkUserExists(email, conn);
      checkEmail(email);
      checkPassword(password);

      const encryptedPassword = await hash(password, 8);

      await conn('users').insert({ name, email, password: encryptedPassword });

      return res
        .status(200)
        .json({ message: `User '${name}' successfully created.` });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  }
}

module.exports = UsersController;
