const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required."],
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address."],
      lowercase: true,
    },
    plants: { type: Schema.Types.ObjectId, ref: 'Plant' },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
