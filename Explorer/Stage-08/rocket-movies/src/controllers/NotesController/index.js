const conn = require('../../database/connection');
const AppError = require('../../utils/AppError');

class NotesController {
  async create(req, res, next) {
    const { user_id } = req.query;

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

    return res.json({ message: `${title} note created successfully.` });
  }

  async index(req, res, next) {
    const { user_id, title, tags } = req.query;

    try {
      if (!(await conn('users').where({ id: user_id }).first())) {
        throw new AppError('User not found', 400);
      }
    } catch (err) {
      return next(err);
    }

    let notes;

    if (tags && !title) {
      const filterTags = tags.split(',').map((tag) => tag.trim());

      const rows = await conn('movie_tags')
        .select([
          'movie_notes.id',
          'movie_notes.title',
          'movie_notes.description',
          'rating',
          'movie_notes.user_id',
          'movie_tags.name as tag_name',
        ])
        .where('movie_notes.user_id', user_id)
        .whereIn('name', filterTags)
        .innerJoin('movie_notes', 'movie_notes.id', 'movie_tags.note_id');

      const notesMap = new Map();

      for (const row of rows) {
        if (!notesMap.has(row.id)) {
          notesMap.set(row.id, {
            ...row,
            tags: [],
          });
        }

        const note = notesMap.get(row.id);
        note.tags.push({
          name: row.tag_name,
          note_id: row.id,
          user_id: row.user_id,
        });
      }

      notes = Array.from(notesMap.values());
    } else if (title && !tags) {
      notes = await conn('movie_notes')
        .select('id', 'title', 'description', 'rating', 'user_id')
        .where({ user_id })
        .whereLike('title', `%${title}%`)
        .orderBy('title');
    } else {
      notes = await conn('movie_notes')
        .select('id', 'title', 'description', 'rating', 'user_id')
        .where({ user_id })
        .orderBy('title');
    }

    const userTags = await conn('movie_tags').where({ user_id });
    const notesWithTags = notes.map((note) => {
      const noteTags = userTags.filter((tag) => tag.note_id === note.id);
      return {
        ...note,
        tags: noteTags,
      };
    });

    return res.json(notesWithTags);
  }

  async show(req, res, next) {
    const { id } = req.params;

    try {
      let note = await conn('movie_notes')
        .select('title', 'description', 'rating')
        .where({ id })
        .first();

      if (!note) {
        throw new AppError('Note not found', 400);
      }

      const tags = await conn('movie_tags').where({ note_id: id });

      note = {
        ...note,
        tags: [...tags],
      };

      return res.json(note);
    } catch (err) {
      return next(err);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;

    const note = await conn('movie_notes').where({ id }).first();

    if (!note) {
      return next(new AppError('Note not found', 400));
    }

    await conn('movie_notes').where({ id }).delete();

    return res.json({ message: 'Note deleted successfully.' });
  }
}

module.exports = NotesController;
