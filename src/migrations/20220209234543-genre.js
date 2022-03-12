"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Genre", {

        genre_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
  
        genre_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Genre");
  },
};
