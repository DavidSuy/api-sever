'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id) {
    try {
      if (id) {
        return this.model.findOne({ where: { id } });
      } else {
        return this.model.findAll();
      }
    } catch (err) {
      return err;
    }
  }

  async create(json) {
    try {
      if (!json) {
        throw new Error('Please provide a JSON in the argument');
      } else {
        return this.model.create(json);
      }
    } catch (err) {
      return err;
    }
  }
}

module.exports = Collection;
