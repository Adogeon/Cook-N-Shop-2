const { User } = require("../../database/models");

module.exports = {
  async getUserById(id) {
    try {
      const userInst = await User.findByPk(id);
      return userInst.get({ plain: true });
    } catch (err) {
      throw new Error(err);
    }
  },
  async updateUserById(id, newValue) {
    try {
      const userInst = await User.findByPk(id);
      await userInst.update(newValue);
      return userInst.get({ plain: true });
    } catch (err) {
      throw new Error(err);
    }
  },
  async deleteUserById(id) {
    try {
      const userInst = await User.findByPk(id);
      await userInst.destroy();
    } catch (err) {
      throw new error(err);
    }
  },
  async addNewUser(newUser) {
    try {
      const userInst = await User.create(newUser);
      return userInst.get({ plain: true });
    } catch (err) {
      throw new Error(err);
    }
  },
};
