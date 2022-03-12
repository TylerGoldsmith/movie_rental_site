'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Actor', [{
      name: 'dummy data actor name',
      bio: 'dummy data actor bio',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actor', null, {});
  }
};