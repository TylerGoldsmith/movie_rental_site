"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie, Movie_Actor }) {
      Actor.belongsToMany(Movie, {
        foreignKey: "actor_id",
        as: "actor_id",
        through: Movie_Actor,
      });
    }
  }
  Actor.init(
    {
      actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      actor_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "music_rental_library",
      tableName: "Actor",
      timestamps: false,
    }
  );
  return Actor;
};
