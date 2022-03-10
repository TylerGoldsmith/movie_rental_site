'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Rentals', [{
      last_updated: 'dummy data rental update',
      cost: 'rental cost dummy data'
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rentals', null, {});
  }
};