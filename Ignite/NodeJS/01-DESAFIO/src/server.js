import http from 'node:http';

const PORT = 3333;

const server = http.createServer(async (req, res) => {
  res.end('Hello World');
});

server.listen(PORT);
