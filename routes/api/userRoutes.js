const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controller/userController.js");

// path: api/users
router.route("/").get(getAllUsers).post(createUser);

// path: /api/users/:userId
router.route("/:_id").get(getUserById).put(editUser).delete(deleteUser);

///api/users/:userId/friends/:friendId
router.route("/:_id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
