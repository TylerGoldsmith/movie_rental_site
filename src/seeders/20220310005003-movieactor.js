'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('MovieActors', [{
      
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieActors', null, {});
  }
};