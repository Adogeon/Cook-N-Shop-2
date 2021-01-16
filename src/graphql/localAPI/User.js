const { User } = require("../../database/models");

module.exports = {
  getUserById: async (id) => {
    try {
      const userInst = await User.findOne({ where: { id: id } });
      const userData = userInst.get({ plain: true });
      return userData;
    } catch (err) {
      throw new Error(err);
    }
  },
};
