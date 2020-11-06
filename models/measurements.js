module.exports = function (sequelize, DataTypes) {
  var Measurement = sequelize.define("Measurement", {
    recipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Recipe",
        key: "id",
      },
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Ingredient",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.DECIMAL(10, 2),
    },
    unitOfMeasure: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Measurement;
};
