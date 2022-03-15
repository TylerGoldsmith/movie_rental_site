"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Actor", [
      {
        name: "Bill Whatshismane",
        bio: "Who doesnt know Bill?",
      },
      {
        name: "John Whatshismane",
        bio: "Who doesnt know John?",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Actor", null, {});
  },
};
