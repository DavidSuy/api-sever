const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('./collection-class');
const carSchema = require('./car');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';

let sequelize = new Sequelize(DATABASE_URL);

const CarModel = carSchema(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  car: new Collection(CarModel),
};
