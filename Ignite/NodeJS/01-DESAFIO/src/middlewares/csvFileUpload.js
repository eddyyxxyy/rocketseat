export async function csvFileUpload(req, res) {
  let resultData = null;
  let buffers = [];

  for await (const chunk of req) {
    buffers = [...buffers, chunk];
  }

  const mainBuffer = Buffer.concat(buffers);
  let str = mainBuffer.toString();

  let lines = str.split('\n').slice(4, -3);

  if (lines.length > 0) {
    let headers = lines[0].split(',');
    if (headers[0] !== 'title' || headers[1] !== 'description') {
      return res.end(
        JSON.stringify({
          message: 'Invalid CSV format: headers do not match expected values',
        })
      );
    }

    for (let i = 1; i < lines.length; i++) {
      let row = lines[i].split(',');

      if (row.length !== headers.length) {
        return res.end(
          JSON.stringify({
            message: `Invalid CSV format: row ${i} has ${row.length} fields, expected ${headers.length}`,
          })
        );
      }
      for (let j = 0; j < row.length; j++) {
        if (typeof row[j] !== 'string') {
          return res.end(
            JSON.stringify({
              message: `Invalid CSV format: value ${row[j]} in row ${i}, column ${j} is not a string`,
            })
          );
        }
      }
    }

    lines.shift();

    resultData = lines.map((row) => {
      const [title, description] = row.split(',');
      return { title, description };
    });
  }

  if (resultData) {
    req.body = { csvRows: resultData };
  } else {
    req.body = null;
  }

  res.setHeader('Content-type', 'application/json');
}
