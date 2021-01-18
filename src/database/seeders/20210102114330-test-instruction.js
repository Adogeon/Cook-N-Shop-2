"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Instructions",
      [
        {
          recipeId: 1,
          order: 1,
          step: "Get coffee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          order: 2,
          step: "Drink coffee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          order: 3,
          step: "Sacrifice a mechanical goat to please the Mother-Of-Ants",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          order: 2,
          step: "Fry the eggs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          order: 1,
          step: "Get eggs from the guy at the back of the Asian market on 4th",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Instructions", null, {});
  },
};
