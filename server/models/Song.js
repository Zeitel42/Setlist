const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  song: {
    type: String,
    unique: true,
    trim: true,
  },
});
