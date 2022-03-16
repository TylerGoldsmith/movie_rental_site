"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Movie_Actor", [
      {
        movie_id: 1,
        actor_id: 1,
        actor_name: "John Whatshismane",
      },
      {
        movie_id: 1,
        actor_id: 2,
        actor_name: "Bill Whatshismane"
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Movie_Actor", null, {});
  },
};
