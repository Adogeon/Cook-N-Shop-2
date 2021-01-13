module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Recipe, {
      foreignKey: "authorId",
    });
  };

  return User;
};
