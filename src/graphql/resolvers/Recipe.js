module.exports = {
  ingredient: (parent, args, context, info) => {
    return context.Recipe.findOne({
      where: { id: parent.id },
    }).getMeasurement();
  },
};
