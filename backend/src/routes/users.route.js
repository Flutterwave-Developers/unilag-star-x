const usercontroller = require("../controllers/users.controller");
const router = express.Router();
const passport = require("passport");

module.exports = router => {
  router.route("/user/login").post(usercontroller.loginUser);

  router.route("/user/register").post(usercontroller.registerUser);
};
