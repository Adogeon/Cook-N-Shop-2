module.exports = function (sequelize, DataTypes) {
  var Measurement = sequelize.define("Measurement", {
    RecipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Recipe",
        key: "id",
      },
    },
    IngredientId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Ingredient",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.DECIMAL(10, 2),
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Measurement;
};
