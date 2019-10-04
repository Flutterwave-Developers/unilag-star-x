const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const users = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  }
});

const usermodel = (module.exports = mongoose.model("users", users));

/**
 * @method: findUserById
 * @description: queries database for user using user id
 * @returns object
 */

exports.findUserById = (id, callback) => {
  usermodel.findById(id, callback);
};

/**
 * @method: findUserByEmail
 * @description: queries database for user using email has key.
 * @returns object
 */
exports.findUserByEmail = (email, callback) => {
  const query = { email: email };
  usermodel.find(query, callback);
};

/**
 * @method: Create new user
 * @description: Create a new user record in database
 * @returns object
 */
exports.createNewUser = async (user, callback) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    user.save(callback);
  } catch (e) {
    console.error(e);
  }
};
