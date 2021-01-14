const { User } = require("../../../database/models");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  User: {
    id: (parent) => {
      return parent.dataValues.id;
    },
    username: (parent) => {
      return parent.dataValues.username;
    },
    email: (parent) => {
      return parent.dataValues.email;
    },
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
  Mutation: {
    registerUser: async (_, { username, email, password }) => {
      try {
        const user = await User.create({
          username,
          email,
          password: await bcrypt.hash(password, 10),
        });

        const token = jsonwebtoken.sign(
          { id: user.id, username: user.username, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1w" }
        );

        return {
          token,
          userId: user.id,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },

    login: async (_, { username, password }) => {
      try {
        const user = await User.findOne({ where: { username: username } });
        if (!user) {
          throw new Error("No user with that username");
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          throw new Error("Incorrect password");
        }

        const token = jsonwebtoken.sign(
          {
            id: user.id,
            email: user.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1w" }
        );
        return {
          token,
          userId: user.id,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Query: {},
};
