const usermodel = require("../models/users.model");
const bcrypt = require("bcryptjs");

const validateRegisterInput = require("../validators/register.validator");
const validateLoginInput = require("../validators/login.validator");

const passport = require("passport");
const jwt = require("jsonwebtoken");

/**
 * @method loginUser
 * @description Authenticates a new user
 * @returns object
 */

exports.loginUser = async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(422).send(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  usermodel.findUserByEmail(email, (err, user) => {
    if (err) console.error(err);

    if (user) {
      bcrypt.compare(password, user.password, (err, success) => {
        if (err)
          return res.status(401).json({ message: "Invalid Email/Password" });

        if (success) {
          const token = jwt.sign(
            {
              data: user._id
            },
            secret_key,
            {
              expiresIn: 117200
            }
          );
          return res.status(200).json({
            token: "JWT " + token,
            message: "Login succesful!"
          });
        }
      });
    } else {
      return res.status(400).json({
        message: "Invalid Email/Password"
      });
    }
  });
};

/**
 * @method Register
 * @description: register a new user
 * @returns object
 */

exports.registerUser = async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(422).send(errors);
  }

  usermodel.findUserByEmail(req.body.email, (err, user) => {
    if (err) console.error(err);

    if (user) {
      return res.status(422).json({
        message: "Email Address already exists"
      });
    } else {
      const newuser = new usermodel({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        user_type: req.body.user_type,
        createdAt: Date.now()
      });
      usermodel.createNewUser(newuser, (err, created) => {
        if (err) console.error(err);

        if (created) {
          const token = jwt.sign(
            {
              data: created._id
            },
            secret_key,
            {
              expiresIn: 117200
            }
          );

          return res.status(200).json({
            token: "JWT " + token,
            message: "Registration Successful"
          });
        } else {
          return res.status(422).json({
            message: "An error occured!"
          });
        }
      });
    }
  });
};
