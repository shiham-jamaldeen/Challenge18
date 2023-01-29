const { User, Thought } = require("../models");

module.exports = {
  //view all thoughts and display thought
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughtData) => {
        res.status(200).json(thoughtData);
      })
      .catch((err) => res.status(500).json(err));
  },
  //get thought by id
  getThoughByID(req, res) {
    Thought.findById(req.params._id)
      .then((thoughtData) => {
        if (!thoughtData) {
          res.json({
            message: "Sorry, that thought ID was not found. Please try again",
          });
        } else {
          res.json(thoughtData);
        }
      })
      .catch((error) => res.stats(500).json(error));
  },
  //create new thought created by the user and link it to the relevant user id
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughtData) => {
        console.log(thoughtData);
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thoughtData._id } },
          { new: true, runValidators: true }
        );
      })
      .then((thoughtData) => res.json(thoughtData))
      .catch((error) => res.json(error));
  },
  editThoughByID(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params._id },
      {
        thoughtText: req.body.thoughtText,
      },
      { new: true, runValidators: true }
    )
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({
            message: "No user ID was found",
          });
        } else {
          res.json(thoughtData);
          console.log(thoughtData);
        }
      })
      .catch((error) => res.json(error));
  },
  //delete a thought by thought by id
  deleteThoughtByID(req, res) {
    Thought.findByIdAndDelete({ _id: req.params._id })
      .then((thoughtData) => {
        console.log(thoughtData);
        if (!thoughtData) {
          res.status(404).json({
            message: "Sorry thought ID was not found. Please try again",
          });
        } else {
          res.status(200).json({ message: "Success, thought was deleted!" });
        }
      })
      .catch((error) => res.json(error));
  },
  //create a new reaction to a thought (posted by a user)
  createReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params._id },
      {
        $push: {
          reactions: {
            reactionBody: req.body.reactionBody,
            username: req.body.username,
          },
        },
      },
      { new: true, runValidators: true }
    )
      .then((thoughtData) => {
        //console.log(thoughtData);
        if (!thoughtData) {
          res.status(404).json({
            message: "Thought created, but no user ID was found",
          });
        } else {
          res.status(200).json(thoughtData);
        }
      })
      .catch((error) => res.json(error));
  },
  //delete a reaction by providing the reaction id
  deleteReactionByID(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params._id },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((reactionData) => {
        if (!reactionData) {
          res.status(404).json({
            message: "Sorry reaction ID was not found. Please try again!",
          });
        } else {
          res.status(200).json(reactionData);
        }
      })
      .catch((error) => res.json(error));
  },
};
