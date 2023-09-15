const { Router } = require('express');

const usersRouter = Router();

usersRouter.post('/create', async (req, res, next) => {
  res.status(200).json({ message: '/users/create' });
});

module.exports = usersRouter;
