import http from 'node:http';

import { json } from './middlewares/json.js';
import { routes } from './routes/routes.js';
import { extractQueryParams } from './utils/extractQueryParams.js';
import { csvFileUpload } from './middlewares/csvFileUpload.js';

const PORT = 3333;

const server = http.createServer(async (req, res) => {
  if (
    req.headers['content-type'] &&
    req.headers['content-type'].startsWith('multipart/form-data')
  ) {
    await csvFileUpload(req, res);
  } else {
    await json(req, res);
  }

  const { method, url } = req;

  const route = routes.find((route) => {
    return route.method == method && route.path.test(url);
  });

  if (route) {
    const routeParams = req.url.match(route.path);
    const { query, ...params } = routeParams.groups;

    req.params = params;
    req.query = query ? extractQueryParams(query) : {};

    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});

server.listen(PORT);
