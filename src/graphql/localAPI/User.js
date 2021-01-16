const { User } = require("../../database/models");

module.exports = {
  getUserById: async (id) => {
    try {
      const userInst = await User.findByPk(id);
      return userInst.get({ plain: true });
    } catch (err) {
      throw new Error(err);
    }
  },
  updateUserById: async (id, newValue) => {
    try {
      const userInst = await User.findByPk(id);
      await userInst.update(newValue);
      return userInst.get({ plain: true });
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteUserById: async (id) => {
    try {
      const userInst = await User.findByPk(id);
      await userInst.destroy();
    } catch (err) {
      throw new error(err);
    }
  },
  addNewUser: async (newUser) => {
    try {
      const userInst = await User.create(newUser);
      return userInst.get({ plain: true });
    } catch (err) {
      throw new Error(err);
    }
  },
};
