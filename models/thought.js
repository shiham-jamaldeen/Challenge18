const { Schema, model, Types } = require("mongoose");
// TO DO write a helper utility to format date and time see https://stackoverflow.com/questions/60013688/how-to-save-date-in-dd-mm-yy-fromat-in-mongdb-using-mongoose-nodejs

//schema to create Reaction model
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: { type: String, required: true, maxLength: 280 },
  username: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
    //TO DO get: (date) => timeSince(date),
  },
});
//schema to create user model
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: {
      type: Date,
      default: Date.now(),
      //TO DO get: (date) => timeSince(date),
    },
    username: { type: String, required: true },
    reactions: [reactionSchema], //[Array of nested documents created with the reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
//virtual that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
