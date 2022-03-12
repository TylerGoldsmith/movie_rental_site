'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Genre', [{
      genre_name: 'genre name dummy data',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genre', null, {});
  }
};