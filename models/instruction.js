module.exports = function (sequelize, DataTypes) {
  var Instruction = sequelize.define("Instruction", {
    RecipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Recipe",
        key: "id",
      },
      primaryKey: true,
    },
    order: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    step: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Instruction;
};
