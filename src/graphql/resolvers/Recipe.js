module.exports = {
  id: (parent, args, context, info) => {
    return parent.dataValues.id;
  },
  name: (parent, args, context, info) => {
    return parent.dataValues.name;
  },
  description: (parent, args, context, info) => {
    return parent.dataValues.description;
  },
  instruction: (parent, args, context, info) => {
    return parent.dataValues.instruction;
  },
  imageURL: (parent, args, context, info) => {
    return parent.dataValues.imageURL;
  },
  ingredients: (parent, args, context, info) => {
    return context.Recipe.findOne({ where: { id: parent.dataValues.id } }).then(
      (RecInst) => {
        return RecInst.getIngredients().then((result) => {
          return result;
        });
      }
    );
  },
};
