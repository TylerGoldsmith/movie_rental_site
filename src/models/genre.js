'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Movie }) {
      Genre.belongsTo(Movie, {
        foreignKey: "movie_id",
        as: "movie_id",
      })
    }
  }
  Genre.init({
    genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    
    genre_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'music_rental_library',
    tableName: 'Genre',
    timestamps: false
  })
  return Genre
}