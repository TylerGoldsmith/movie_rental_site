"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Rental", {
      rental_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      movie_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Movie",
          key: "movie_id",
        },
      },
      last_updated: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      holder: {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: "user_id",
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Rental");
  },
};
