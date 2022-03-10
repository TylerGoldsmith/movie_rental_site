"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Genre", {
      rental_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      last_updated: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      movie_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Movie",
          key: "movie_id",
        },
      },
      cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Genre");
  },
};
