const express = require('express');
const handleErrors = require('./utils/handleErrors');
const AppError = require('./utils/AppError');

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', async (req, res, next) => {
  try {
    throw new AppError('Testing error handling middleware');
  } catch (err) {
    next(err);
  }
});

app.use(handleErrors);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
