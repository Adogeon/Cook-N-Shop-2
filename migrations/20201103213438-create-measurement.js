'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Measurements", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Recipe",
          key: "id",
        },
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Ingredient",
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      unitOfMeasurement: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Measurements');
  }
};