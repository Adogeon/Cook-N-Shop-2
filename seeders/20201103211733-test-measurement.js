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
      "Measurements",
      [
        {
          id: 1,
          recipeId: 1,
          ingredientId: 1,
          quantity: 2,
          unitOfMeasure: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          recipeId: 1,
          ingredientId: 3,
          quantity: 4,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          recipeId: 2,
          ingredientId: 1,
          quantity: 4,
          unitOfMeasure: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          recipeId: 2,
          ingredientId: 2,
          quantity: 3,
          unitOfMeasure: "tablespoons",
          createdAt: new Date(),
          updatedAt: new Date(),
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
    await queryInterface.bulkDelete("Measurements", null, {});
  },
};
