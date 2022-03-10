'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Movies', [{
      title: 'title dummy data',
      movie_cover: 'movie cover dummy data',
      synopsis: 'synopsis dummy data',
      year_release: 'year released dummy data'
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};