const { Schema, model } = require("mongoose");

//schema to create user model
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: "thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "user" }], //Array of _id values referencing the User model (self-reference),
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
//virtual to retrieve the length of the user's `friends` array
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
//initialise the user model
const User = model("user", userSchema);
module.exports = User;
