"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Movie", [
      {
        title: "Titanic",
        movie_cover: "movie cover dummy data",
        synopsis: "The boat sinks in the end",
        year_released: "1997",
        actor_name: ["Bill Whatshismane", "John Whatshismane"]
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Movie", null, {});
  },
};
