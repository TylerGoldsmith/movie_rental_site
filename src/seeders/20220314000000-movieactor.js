"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Movie_Actor", [
      {
        movie_id: 1,
        actor_id: 1,
      },
      {
        movie_id: 2,
        actor_id: 1,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Movie_Actor", null, {});
  },
};
