"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Instructions",
      [
        [
          {
            recipeId: 1,
            order: 1,
            step: "Get coffee",
          },
          {
            recipeId: 1,
            order: 2,
            step: "Drink coffee",
          },
          {
            recipeId: 1,
            order: 3,
            step: "Sacrifice a mechanical goat to please the Mother-Of-Ants",
          },
          {
            recipeId: 2,
            order: 2,
            step: "Fry the eggs",
          },
          {
            recipeId: 2,
            order: 1,
            step:
              "Get eggs from the guy at the back of the Asian market on 4th",
          },
        ],
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Instructions", null, {});
  },
};
