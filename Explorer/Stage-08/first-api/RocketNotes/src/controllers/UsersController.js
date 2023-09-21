const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');
const { compare, hash } = require('bcrypt');

class UsersController {
  async create(req, resp) {
    const { name, email, password } = req.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    );

    if (checkUserExists) {
      throw new AppError('Este e-mail já está cadastrado.');
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    return resp.status(201).json();
  }

  async update(req, resp) {
    const { name, email, password, old_password } = req.body;
    const { id: user_id } = req.user;

    const database = await sqliteConnection();
    const user = await database.get('SELECT * FROM users WHERE id = (?)', [
      user_id,
    ]);

    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    const userWithUpdatedEmail = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError('Este e-mail já está em uso.');
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError(
        'Você precisar informar a senha antiga para poder definir uma nova.'
      );
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError('A senha antiga não está correta.');
      }

      user.password = await hash(password, 8);
    }

    await database.run(
      `UPDATE users SET name = (?), email = (?), password = (?), modified_at = DATETIME('now') WHERE id = (?)`,
      [user.name, user.email, user.password, user_id]
    );

    return resp.json();
  }
}

module.exports = UsersController;
