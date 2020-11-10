module.exports = {
  ingredient: (parent, args, context, info) => {
    return parent.name;
  },
  quantity: (parent, args, context, info) => {
    return parent.Measurement.quantity;
  },
  unit: (parent, args, context, info) => {
    return parent.Measurement.unit;
  },
};
