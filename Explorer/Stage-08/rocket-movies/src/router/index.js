const { Router } = require('express');
const usersRouter = require('./routes/users.routes');

const router = Router();

router.use('/users', usersRouter);

module.exports = router;
