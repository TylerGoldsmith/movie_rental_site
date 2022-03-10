'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Actors', [{
      name: 'dummy data actor name',
      bio: 'dummy data actor bio',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actors', null, {});
  }
};