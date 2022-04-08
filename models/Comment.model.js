const { Schema, model } = require("mongoose");

let CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  plantId: {
    type: Schema.Types.ObjectId,
    ref: "Plant",
  },
});

const Comment = model("Comment", CommentSchema);

module.exports = Comment;
