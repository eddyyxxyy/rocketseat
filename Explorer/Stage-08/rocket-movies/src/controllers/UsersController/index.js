const conn = require('../../database/connection');
const AppError = require('../../utils/AppError');
const checkUserExists = require('../../utils/checkUserExists');
const checkEmail = require('../../utils/checkEmail');
const checkPassword = require('../../utils/checkPassword');
const { hash, compare } = require('bcrypt');

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
      return next(err);
    }
  }

  async show(req, res, next) {
    const { id } = req.params;

    try {
      const user = await conn('users').where({ id }).first();

      if (!user) {
        throw new AppError('User not found.', 400);
      }

      const { name, email, avatar } = user;

      return res.status(200).json({ name, email, avatar });
    } catch (err) {
      return next(err);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;

    const user = await conn('users').where({ id }).first();

    if (!user) {
      return next(new AppError('User not found.', 400));
    }

    const { name, email, password, oldPassword } = req.body;

    if (email) {
      try {
        checkEmail(email);
      } catch (err) {
        return next(err);
      }

      const userWithProvidedEmail = await conn('users')
        .select('id')
        .where({ email })
        .first();

      if (userWithProvidedEmail && userWithProvidedEmail.id !== user.id) {
        return next(
          new AppError('Email already in use, please try another.'),
          409
        );
      }
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if ((password && !oldPassword) || (!password && oldPassword)) {
      return next(
        new AppError(
          'To change the password you must provide the old and new passwords.',
          400
        )
      );
    } else if (password && oldPassword) {
      try {
        const isSamePassword = await compare(oldPassword, user.password);
        if (!isSamePassword) {
          return next(new AppError('Old password is not correct.', 400));
        }

        checkPassword(password);

        user.password = await hash(password, 8);
      } catch (err) {
        return next(err);
      }
    }

    try {
      await conn('users').where({ id: id }).update({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    } catch (err) {
      return next(err);
    }

    return res.status(200).json({ message: `User updated successfully.` });
  }

  async delete(req, res, next) {
    const { id } = req.params;

    const user = await conn('users').select('name', 'id').where({ id }).first();
    if (!user) {
      return next(new AppError('User not found.', 400));
    }

    await conn('users').where({ id: user.id }).delete();

    return res.json({
      message: `Users '${user.name}' with id '${user.id}' deleted successfully.`,
    });
  }
}

module.exports = UsersController;
