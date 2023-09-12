const express = require("express");
const UsersController = require("../../controllers/UsersController");

const usersRouter = express.Router();
const usersController = new UsersController();

usersRouter.post("/create", usersController.create);

module.exports = usersRouter;
