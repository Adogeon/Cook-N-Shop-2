module.exports = function (sequelize, DataTypes) {
  var Measurement = sequelize.define("Measurement", {
    recipeID: {
      type: DataTypes.INTEGER,
      references: {
        model: Recipes,
        key: "id",
      },
    },
    ingredientID: {
      type: DataTypes.INTEGER,
      references: {
        model: Ingredients,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.DECIMAL(10, 2),
    },
    unitOfMeasure: {
      type: DataTypes.STRING,
    },
  });

  return Measurement;
};
