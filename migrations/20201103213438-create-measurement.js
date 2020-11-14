"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Measurements", {
      recipeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Recipes",
          key: "id",
        },
        primaryKey: true,
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Ingredients",
          key: "id",
        },
        primaryKey: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Measurements");
  },
};
