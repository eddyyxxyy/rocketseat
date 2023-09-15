function handleErrors(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  console.error(err);

  res.status(err.statusCode).json({
    status: err.statusCode,
    message: err.message,
  });
}

module.exports = handleErrors;
