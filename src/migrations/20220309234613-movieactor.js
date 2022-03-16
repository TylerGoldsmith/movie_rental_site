"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Movie_Actor", {
      movie_actor_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movie_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Movie",
          key: "movie_id",
        },
      },
      actor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Actor",
          key: "actor_id",
        },
        actor_name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Movie_Actor");
  },
};
