// Lê a stream de entrada, ou seja, tudo do terminal, e encaminha para
// a saída, que tambem é o terminal

// process.stdin.pipe(process.stdout);

import { Readable, Writable, Transform } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callBack) {
    const transformed = Number(chunk.toString()) * -1;
    callBack(null, Buffer.from(String(transformed)));
  }
}

class MultipleByTenStream extends Writable {
  _write(chunk, encoding, callBack) {
    console.log(Number(chunk.toString()) * 10);
    callBack();
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultipleByTenStream());
