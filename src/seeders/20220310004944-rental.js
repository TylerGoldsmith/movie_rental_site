'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Rental', [{
      last_updated: '0001-01-01',
      cost: '00'
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rental', null, {});
  }
};