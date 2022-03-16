"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie_Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie_Actor.init(
    {
      movie_actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      actor_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
      movie_id: DataTypes.INTEGER,
      actor_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Movie_Actor",
    }
  );
  return Movie_Actor;
};
