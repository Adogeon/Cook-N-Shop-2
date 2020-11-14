module.exports = {
  ingredient: (parent, args, context, info) => {
    return parent.dataValues;
  },
  quantity: (parent, args, context, info) => {
    return parent.Measurement.dataValues.quantity;
  },
  unit: (parent, args, context, info) => {
    return parent.Measurement.dataValues.unit;
  },
};
