"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie }) {
      Rental.belongsTo(Movie, {
        foreignKey: "movie_id",
        as: "movie_id"
      });
    }
  }
  Rental.init(
    {
      rental_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      last_updated: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      holder: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "music_rental_library",
      tableName: "Rental",
      timestamps: false,
    }
  );
  return Rental;
};
