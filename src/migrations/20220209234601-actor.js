"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Actor", {
      actor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      actor_name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      bio: {
          type: Sequelize.TEXT,  
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Actor");
  },
};
