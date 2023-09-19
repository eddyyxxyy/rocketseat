const conn = require('../../database/connection');
const AppError = require('../../utils/AppError');

class NotesController {
  async create(req, res, next) {
    const { user_id } = req.params;

    try {
      const user = await conn('users').where({ id: user_id }).first();

      if (!user) {
        throw new AppError('User not found.', 400);
      }
    } catch (err) {
      return next(err);
    }

    const { title, description, rating, tags } = req.body;

    if (!title || !description || !rating || !tags) {
      const missing = ['title', 'description', 'rating', 'tags'].filter(
        (field) => !req.body[field]
      );
      return next(
        new AppError(`Missing required field(s): ${missing.join(', ')}`, 400)
      );
    }

    if (tags.length < 1) {
      return next(new AppError('A note must have at least 1 tag', 400));
    } else if (tags.length > 6) {
      return next(new AppError('A note must have at most 6 tags', 400));
    }

    try {
      const [note_id] = await conn('movie_notes').insert({
        title,
        description,
        rating,
        user_id,
      });

      const tagsInsert = tags.map((name) => {
        return { name, note_id, user_id };
      });

      await conn('movie_tags').insert(tagsInsert);
    } catch (err) {
      return next(err);
    }

    res.json({ message: `${title} note created successfully.` });
  }
}

module.exports = NotesController;
