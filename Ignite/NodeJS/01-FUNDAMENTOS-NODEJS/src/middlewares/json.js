export async function json(req, res) {
  let buffers = [];

  for await (const chunk of req) {
    buffers = [...buffers, chunk];
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  res.setHeader('Content-type', 'application/json');
}
