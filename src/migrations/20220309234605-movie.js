"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Movie", {
      movie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
          type: Sequelize.STRING,
          allowNull: false
      },
      mover_cover: {
          type: Sequelize.STRING,
          
      },
      synopsis: {
          type: Sequelize.TEXT,
          
      },
      year_released: {
          type: Sequelize.INTEGER,
          
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Movie");
  },
};
