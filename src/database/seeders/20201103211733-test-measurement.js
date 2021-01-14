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
          recipeId: 1,
          ingredientId: 1,
          quantity: 2,
          unit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          ingredientId: 3,
          quantity: 4,
          unit: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 1,
          quantity: 4,
          unit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 2,
          quantity: 3,
          unit: "tablespoons",
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
