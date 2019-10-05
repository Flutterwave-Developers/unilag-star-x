const Validator = require("validator");
const isEmpty = require("./isempty");

module.exports = function validateRegister(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.username = !isEmpty(data.username) ? data.username : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!Validator.isLength(data.password, { min: 6 })) {
    errors.password = "Password must be more than 6 characters";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password cannot be empty";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  if (Validator.isEmpty(data.user_type)) {
    errors.user_type = "User type is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
