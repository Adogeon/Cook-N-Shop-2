module.exports = {
  id: (parent) => {
    return parent.dataValues.id;
  },
  username: (parent) => {
    return parent.dataValues.username;
  },
  email: (parent) => {
    return parent.dataValues.email;
  },
  createdRecipes: (parent, args, context) => {
    return context.User.findOne({ where: { id: parent.dataValues.id } }).then(
      (UserInst) => {
        return UserInst.getRecipes().then((result) => {
          return result;
        });
      }
    );
  },
};
