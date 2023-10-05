import fastify from 'fastify';

const app = fastify();

const PORT = 3333;

app.get('/', () => 'Hello World');

app
  .listen({
    port: PORT,
  })
  .then(() => console.log('HTTP SERVER RUNNING AT PORT: ' + PORT));
