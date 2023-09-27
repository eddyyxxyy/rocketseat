import fs from 'node:fs/promises';
import { databasePath } from '../configs/databaseConfigs.js';

export class Database {
  #database = {};

  constructor() {
    fs.readFile(databasePath, 'utf-8')
      .then((data) => (this.#database = { ...JSON.parse(data) }))
      .catch(() => this.#persist());
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify({ ...this.#database }), 'utf-8');
  }

  select(table) {
    return this.#database[table] ?? [];
  }
}
