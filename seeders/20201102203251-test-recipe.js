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
      "Recipe",
      [
        {
          id: 1,
          name: "Recipe A",
          description: "Recipe A description",
          instruction: "Instruction for recipe A",
          imageURL: "",
        },
        {
          id: 2,
          name: "Recipe B",
          description: "Recipe B description",
          instruction: "Instruction for recipe B",
          imageURL: "",
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
    await queryInterface.bulkDelete("Recipe", null, {});
  },
};
