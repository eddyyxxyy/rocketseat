import { Database } from '../database/Database.js';
import { buildRoutePath } from '../utils/buildRoutePath.js';
import { checkRequiredFields } from '../utils/checkRequiredFields.js';

const database = new Database();

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler(req, res) {
      const { search } = req.query;

      const tasks = database.select(
        'tasks',
        search
          ? {
              title: search,
              description: search,
            }
          : null
      );

      return res.end(JSON.stringify(tasks));
    },
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler(req, res) {
      const missing = checkRequiredFields(req.body, 'title', 'description');

      if (missing.length > 0) {
        return res.writeHead(400).end(
          JSON.stringify({
            error: 'Missing required fields',
            message: `Required field(s): ${missing.join(', ')}`,
          })
        );
      }

      const { title, description } = req.body;

      database.create('tasks', { title, description });

      return res.writeHead(204).end();
    },
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler(req, res) {
      const { id } = req.params;

      const taskDoNotExists = database.markAsComplete('tasks', id);

      if (taskDoNotExists) {
        return res.writeHead(404).end(taskDoNotExists);
      }

      return res.writeHead(204).end();
    },
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler(req, res) {
      const { id } = req.params;

      const taskDoNotExists = database.delete('tasks', id);

      if (taskDoNotExists) {
        return res.writeHead(404).end(taskDoNotExists);
      }

      return res.writeHead(204).end();
    },
  },
];
