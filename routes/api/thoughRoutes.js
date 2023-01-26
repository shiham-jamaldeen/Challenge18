const router = require("express").Router();
const {
  getAllThoughts,
  createThought,
  createReaction,
  getThoughByID,
  editThough,
} = require("../../controller/thoughController.js");

// path: api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// path api/thoughts/:_id
router.route("/:_id").get(getThoughByID).put(editThough);

// path: api/thoughts/:thoughtId/reactions
router.route("/:_id/reactions").post(createReaction);

module.exports = router;
