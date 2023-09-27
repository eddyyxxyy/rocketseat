import http from 'node:http';
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callBack) {
    const transformed = Number(chunk.toString()) * -1;

    console.log(transformed);

    callBack(null, Buffer.from(String(transformed)));
  }
}

const server = http.createServer(async (req, res) => {
  let buffers = [];

  for await (const chunk of req) {
    buffers = [...buffers, chunk];
  }

  const fullStreamContent = Buffer.concat(buffers).toString();

  console.log(fullStreamContent);

  return res.end(fullStreamContent);
});

server.listen(3334);
