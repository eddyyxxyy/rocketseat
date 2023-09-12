const express = require("express");
const UsersController = require("../../controllers/UsersController");

const usersRouter = express.Router();
const usersController = new UsersController();

usersRouter.post("/create", usersController.create);
usersRouter.put("/:id", usersController.update);

module.exports = usersRouter;
