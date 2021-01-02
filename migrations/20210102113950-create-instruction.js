'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Instructions', {
      recipeId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Recipes",
          key: "id",
        },
      },
      order: {
        type: Sequelize.NUMBER
      },
      step: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Instructions');
  }
};