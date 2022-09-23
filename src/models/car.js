'use strict';

const carSchema = (sequelize, DataTypes) =>
  sequelize.define('Car', {
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = carSchema;
