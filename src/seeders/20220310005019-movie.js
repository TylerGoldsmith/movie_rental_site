'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Movie', [{
      title: 'title dummy data',
      movie_cover: 'movie cover dummy data',
      synopsis: 'synopsis dummy data',
      year_release: '1'
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movie', null, {});
  }
};