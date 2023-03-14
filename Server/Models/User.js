import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      max: 20,
    },
    todos: [{}],
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema)

module.exports = User