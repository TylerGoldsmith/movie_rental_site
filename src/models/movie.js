"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Actor, Movie_Actor, Rental, Genre }) {
      Movie.belongsToMany(Actor, {
        foreignKey: "actor_id",
        as: "actor_id",
        through: Movie_Actor,
      });
      Movie.hasMany(Rental, {
        foreignKey: "movie_id",
        as: "movie_id",
      });
      Movie.hasMany(Genre, {
        foreignKey: "movie_id",
        as: "movie_id",
      });
    }
  }
  Movie.init(
    {
      movie_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      movie_cover: {
        type: DataTypes.STRING,
      },
      synopsis: {
        type: DataTypes.TEXT,
      },
      year_released: {
        type: DataTypes.INTEGER,
      },
      actor_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },
    {
      sequelize,
      modelName: "music_rental_library",
      tableName: "Movie",
      timestamps: false,
    }
  );
  return Movie;
};
