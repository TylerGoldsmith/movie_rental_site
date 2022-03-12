'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [{
      username: 'username dummy data',
      password: 'password dummy data',
      total_due: '1'
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};