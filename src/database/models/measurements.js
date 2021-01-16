module.exports = function (sequelize, DataTypes) {
  var Measurement = sequelize.define("Measurement", {
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
