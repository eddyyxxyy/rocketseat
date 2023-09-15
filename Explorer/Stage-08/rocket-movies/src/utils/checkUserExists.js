const AppError = require('./AppError');

async function checkUserExists(email, conn) {
  const userAlreadyExists = await conn('users').where({ email }).first();
  if (userAlreadyExists && userAlreadyExists.email === email) {
    throw new AppError('E-mail already in use, try another.', 409);
  }
}

module.exports = checkUserExists;
