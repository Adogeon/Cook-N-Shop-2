const { User } = require("../../../database/models");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const { getUserById, createNewUser } = require("../../localAPI/User");
require("dotenv").config();

module.exports = {
  User: {
    createdRecipes: (parent, args) => {
      return User.findOne({ where: { id: parent.dataValues.id } }).then(
        (UserInst) => {
          return UserInst.getRecipes().then((result) => {
            return result;
          });
        }
      );
    },
  },
  Query: {
    currentUser: async (_, args, { currentUserId }) => {
      return await getUserById(currentUserId);
    },
    user: async (_, { id }) => {
      return await getUserById(id);
    },
  },
};
