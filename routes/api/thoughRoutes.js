const router = require("express").Router();
const {
  getAllThoughts,
  createThought,
  getThoughByID,
  editThoughByID,
  deleteThoughtByID,
  createReaction,
  deleteReactionByID,
} = require("../../controller/thoughController.js");

// path: api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// path api/thoughts/:_id
router
  .route("/:_id")
  .get(getThoughByID)
  .put(editThoughByID)
  .delete(deleteThoughtByID);

// path: api/thoughts/:thoughtId/reactions
router.route("/:_id/reactions").post(createReaction);

// path: api/thoughts/:thoughtId/reactions/:reactionID
router.route("/:_id/reactions/:reactionId").delete(deleteReactionByID);

module.exports = router;
