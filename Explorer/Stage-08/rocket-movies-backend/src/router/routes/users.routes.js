const { Router } = require('express');
const UsersController = require('../../controllers/UsersController');

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/:id', usersController.show);
usersRouter.post('/create', usersController.create);
usersRouter.put('/update/:id', usersController.update);
usersRouter.delete('/delete/:id', usersController.delete);

module.exports = usersRouter;
