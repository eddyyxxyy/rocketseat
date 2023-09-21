const { verify } = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const { jwt } = require('../configs/auth');

function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token não informado.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, jwt.secrets);

    req.user = {
      id: Number(user_id),
    };

    return next();
  } catch (err) {
    throw new AppError('JWT Token inválido.', 401);
  }
}

module.exports = ensureAuthenticated;
