"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Rental", [
      {
        last_updated: "01/02/03	",
        cost: "1",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Rental", null, {});
  },
};
