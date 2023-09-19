const conn = require('../../database/connection');
const AppError = require('../../utils/AppError');

class TagsController {
  async index(req, res, next) {
    const { user_id } = req.query;

    let tags;

    try {
      tags = await conn('movie_tags').where({ user_id });
    } catch (err) {
      return next(err);
    }

    return res.json(tags);
  }
}

module.exports = TagsController;
