const { User, Thought } = require("../models");

module.exports = {
  //get all users
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //get single user by id, with thought and friend data
  getUserById(req, res) {
    User.findById(req.params._id)
      .populate("thoughts")
      .populate("friends")
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  },
  //create new user
  createUser(req, res) {
    User.create(req.body)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  },
  //update user details by id
  editUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params._id },
      {
        username: req.body.username,
        email: req.body.email,
      },
      { runValidators: true, new: true }
    )
      .then((userData) => {
        if (!userData) {
          res.status(404).json({
            message: "Sorry user ID was not found. Please try again!",
          });
        } else {
          res.json(userData);
        }
      })
      .catch((error) => res.status(500).json(error));
  },
  //delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params._id })
      .then((userData) => {
        if (!userData) {
          res.status(404).json({
            message: "Sorry user ID was not found. Please try again!",
          });
        } else {
          console.log(userData);
          res.json({ message: "User successfully deleted!" });
        }
      })
      .catch((error) => res.status(500).json(error));
  },
  //add a friend to an existing user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params._id },
      { $push: { friends: req.params.friendId } },
      { new: true }
    )
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  },
  //delete friend from user's friend list
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params._id },
      { $pull: { friends: req.params.friendId } }
    )
      .then((friendData) => {
        console.log(friendData);
        if (!friendData) {
          res.json({ message: "Sorry no friend id found. Please try again!" });
        } else {
          res.json({ message: "Success!Friend removed." });
        }
      })
      .catch((error) => res.status(500).json(error));
  },
};
