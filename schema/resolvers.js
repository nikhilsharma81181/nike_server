const User = require("../models/user");
const { UserList } = require("../fakedata");
// const _ = require("lodash");

const resolvers = {
  Query: {
    users: async () => {
      try {
        return await User.find();
      } catch (err) {
        console.log(err);
      }
    },

    getUser: async (_, args) => {
      try {
        return await User.findById(args.id);
      } catch (err) {
        console.log(err);
      }
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      try {
        const { name, age, comics } = args.input;
        const user = new User({ name, age, comics });
        await user.save();
        return user;
      } catch (err) {
        console.log(err);
      }
    },

    updateUser: async (parent, args) => {
      try {
        const { id } = args;
        const { name, age, comics } = args.input;
        const user = await User.findByIdAndUpdate(
          id,
          { name, age, comics },
          { new: true }
        );
        return user;
      } catch (err) {}
    },

    deleteUser: async (parent, args) => {
      try {
        const { id } = args;
        await User.findByIdAndDelete(id);
        return "Deleted";
      } catch (err) {
        console.log(err);
      }
    },
  },
};

module.exports = { resolvers };
