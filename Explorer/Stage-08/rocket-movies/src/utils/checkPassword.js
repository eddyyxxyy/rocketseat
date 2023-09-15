const AppError = require('./AppError');

function checkPassword(password) {
  if ([...password].length < 6) {
    throw new AppError('Password must be at least 6 characters long.', 400);
  }

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!regex.test(password)) {
    throw new AppError(
      'Password must have at least one uppercase letter, one lowercase letter, one number and one special character.',
      400
    );
  }
}

module.exports = checkPassword;
