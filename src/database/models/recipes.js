module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  //any ingredient can show up in many recipes
  Recipe.associate = function (models) {
    Recipe.belongsTo(models.User,);
    Recipe.hasMany(models.Instruction);
    Recipe.belongsToMany(models.Ingredient, {
      through: "Measurement",
    });
  };

  return Recipe;
};
