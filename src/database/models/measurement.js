module.exports = function (sequelize, DataTypes) {
  var Measurement = sequelize.define("Measurement", {
    quantity: {
      type: DataTypes.DECIMAL(10, 2),
    },
    unitOfMeasure: {
      type: DataTypes.STRING,
    },
  });

  return Measurement;
};
