const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
} = require("../../controller/userController.js");

// path: api/users
router.route("/").get(getAllUsers).post(createUser);

// path: /api/users/:userId
router.route("/:_id").get(getUserById).put(editUser);

//

module.exports = router;
