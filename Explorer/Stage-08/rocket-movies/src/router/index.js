const { Router } = require('express');
const usersRouter = require('./routes/users.routes');
const notesRouter = require('./routes/notes.routes');

const router = Router();

router.use('/users', usersRouter);
router.use('/notes', notesRouter);

module.exports = router;
