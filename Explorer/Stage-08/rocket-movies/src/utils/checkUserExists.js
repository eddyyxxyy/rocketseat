async function checkUserExists(email, conn) {
  const userAlreadyExists = await conn('users').where({ email });
  if (!userAlreadyExists) {
    throw new AppError('User already exists, try another e-mail.', 409);
  }
}

module.exports = checkUserExists;
