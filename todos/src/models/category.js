import bookshelf from '../db';
import Todo from './todo';

const TABLE_NAME = 'categories';

/**
 * User model.
 */
class Todos extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }

  hasTodo() {
    return this.belongsToMany(Todo);
  }
}

export default Todos;
