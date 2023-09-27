import fs from 'node:fs/promises';

const databaseFilePath = new URL('db.json', import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(databaseFilePath, 'utf-8')
      .then((data) => (this.#database = JSON.parse(data)))
      .catch(() => this.#persist());
  }

  #persist() {
    fs.writeFile(databaseFilePath, JSON.stringify(this.#database));
  }

  delete(table, id) {
    const oldTable = this.#database[table];
    const newTable = oldTable.filter((row) => row.id !== id);

    if (newTable.length !== oldTable.length) {
      this.#database[table] = newTable;
      this.#persist();
    }
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database = {
        ...this.#database,
        [table]: [...this.#database[table], data],
      };
    } else {
      this.#database = {
        ...this.#database,
        [table]: [data],
      };
    }

    this.#persist();

    return data;
  }

  select(table, search) {
    let data = this.#database[table] ?? [];

    if (search) {
      data = data.filter((user) => {
        return Object.entries(search).some(([key, value]) => {
          return user[key].toLowerCase().includes(value.toLowerCase());
        });
      });
    }

    return data;
  }

  update(table, data, id) {
    const oldTable = this.#database[table];
    const newTable = oldTable.map((row) => {
      if (row.id === id) {
        return {
          id: id,
          name: data[0],
          email: data[1],
        };
      } else {
        return row;
      }
    });

    this.#database = { ...this.#database, [table]: newTable };
    this.#persist();
  }
}
