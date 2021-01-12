module.exports = function (sequelize, DataTypes) {
  var Instruction = sequelize.define("Instruction", {
    order: {
      type: DataTypes.INTEGER,
      unique: false,
    },
    step: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Instruction.associate = function (models) {
    Instruction.belongsTo(models.Recipe);
  };

  return Instruction;
};
