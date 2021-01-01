module.exports = {
  order: (parent, args, context, info) => {
    return parent.dataValues.order;
  },
  step: (parent, args, context, info) => {
    return parent.dataValues.step;
  },
};
