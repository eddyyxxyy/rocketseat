import fs from 'node:fs/promises';
import { randomUUID } from 'node:crypto';

import { databasePath } from '../configs/databaseConfigs.js';
import { timestamp } from '../utils/timestamp.js';

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

  create(table, taskData) {
    const newTaskData = {
      id: randomUUID(),
      title: taskData.title,
      description: taskData.description,
      completed_at: null,
      created_at: timestamp(),
      updated_at: timestamp(),
    };

    if (Array.isArray(this.#database[table])) {
      this.#database = {
        ...this.#database,
        [table]: [...this.#database[table], newTaskData],
      };
    } else {
      this.#database = {
        ...this.#database,
        [table]: [newTaskData],
      };
    }

    this.#persist();

    return newTaskData;
  }

  delete(table, id) {
    if (!this.#database[table]) {
      return JSON.stringify({
        error: 'Task not found.',
        message: 'There is no tasks registered.',
      });
    }

    const dataIndex = this.#database[table].findIndex((task) => task.id === id);

    if (dataIndex === -1) {
      return JSON.stringify({
        error: 'Task not found.',
        message: 'Try another ID.',
      });
    }

    const newDataArray = [
      ...this.#database[table].filter((task) => task.id !== id),
    ];

    this.#database = {
      ...this.#database,
      [table]: newDataArray,
    };

    this.#persist();
  }

  markAsComplete(table, id) {
    if (!this.#database[table]) {
      return JSON.stringify({
        error: 'Task not found.',
        message: 'There is no tasks registered.',
      });
    }

    const oldDataIndex = this.#database[table].findIndex(
      (task) => task.id === id
    );

    if (oldDataIndex === -1) {
      return JSON.stringify({
        error: 'Task not found.',
        message: 'Try another ID.',
      });
    }

    const newDataArray = [...this.#database[table]];

    const updatedTask = {
      ...newDataArray[oldDataIndex],
      completed_at: timestamp(),
      updated_at: timestamp(),
    };

    newDataArray[oldDataIndex] = updatedTask;

    this.#database = {
      ...this.#database,
      [table]: newDataArray,
    };

    this.#persist();
  }

  select(table, search) {
    if (!search || search.length === 0) {
      return this.#database[table] ?? [];
    }

    if (!this.#database[table]) {
      return {
        error: 'Task not found.',
        message: 'There is no tasks registered.',
      };
    }

    const filteredTasks = this.#database[table].filter((tasks) => {
      return Object.entries(search).some(([key, value]) => {
        return tasks[key].toLowerCase().includes(value.toLowerCase());
      });
    });

    return filteredTasks;
  }

  update(table, id, data) {
    if (!this.#database[table]) {
      return JSON.stringify({
        error: 'Task not found.',
        message: 'There is no tasks registered.',
      });
    }

    const oldDataIndex = this.#database[table].findIndex(
      (task) => task.id === id
    );

    if (oldDataIndex === -1) {
      return JSON.stringify({
        error: 'Task not found.',
        message: 'Try another ID.',
      });
    }

    const newDataArray = [...this.#database[table]];

    const updatedTask = {
      ...newDataArray[oldDataIndex],
      title: data.title ?? newDataArray[oldDataIndex].title,
      description: data.description ?? newDataArray[oldDataIndex].description,
      updated_at: timestamp(),
    };

    newDataArray[oldDataIndex] = updatedTask;

    this.#database = {
      ...this.#database,
      [table]: newDataArray,
    };

    this.#persist();
  }
}
