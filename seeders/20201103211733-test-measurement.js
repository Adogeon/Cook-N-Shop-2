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
      "Measurement",
      [
        {
          id: 1,
          recipeId: 1,
          ingredientId: 1,
          quantity: 2,
          unitOfMeasure: null,
        },
        {
          id: 2,
          recipeId: 1,
          ingredientId: 3,
          quantity: 4,
          unitOfMeasure: "g",
        },
        {
          id: 3,
          recipeId: 2,
          ingredientId: 1,
          quantity: 4,
          unitOfMeasure: null,
        },
        {
          id: 4,
          recipeId: 2,
          ingredientId: 2,
          quantity: 3,
          unitOfMeasure: "tablespoons",
        },
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
    await queryInterface.bulkDelete("Measurement", null, {});
  },
};
