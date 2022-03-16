"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Actor", [
      {
        actor_name: "Bill Whatshismane",
        bio: "Who doesnt know Bill?",
      },
      {
        actor_name: "John Whatshismane",
        bio: "Who doesnt know John?",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Actor", null, {});
  },
};
