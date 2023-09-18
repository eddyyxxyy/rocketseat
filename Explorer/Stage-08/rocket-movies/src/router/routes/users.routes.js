const { Router } = require('express');
const UsersController = require('../../controllers/UsersController');

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/:id', usersController.show);
usersRouter.post('/create', usersController.create);

module.exports = usersRouter;