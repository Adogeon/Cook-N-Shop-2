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
  instructions: (parent, args, context, info) => {
    console.log(parent)
    return context.Recipe.findOne({ where: { id: parent.dataValues.id } }).then(
      (RecInst) => {
        return RecInst.getInstructions().then((result) => {
          console.log("instruction", result);
          return result;
        });
      }
    );
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
