module.exports = function (sequelize, DataTypes) {
  var Measurement = sequelize.define("Measurement", {
    RecipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Recipe",
        key: "id",
      },
      primaryKey: true,
    },
    IngredientId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Ingredient",
        key: "id",
      },
      primaryKey: true,
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
