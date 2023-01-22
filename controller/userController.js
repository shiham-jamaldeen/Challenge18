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
      req.params._id,
      {
        username: req.body.username,
        email: req.body.email,
        friends: [req.body.friends],
        thoughts: [req.body.thoughts],
      },
      { runValidators: true, new: true },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("updated: " + docs);
        }
      }
    );
  },
};
