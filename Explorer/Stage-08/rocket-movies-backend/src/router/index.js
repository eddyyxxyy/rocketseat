const { Router } = require('express');
const usersRouter = require('./routes/users.routes');
const notesRouter = require('./routes/notes.routes');
const tagsRouter = require('./routes/tags.routes');

const router = Router();

router.use('/users', usersRouter);
router.use('/notes', notesRouter);
router.use('/tags', tagsRouter);

module.exports = router;
