const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, maxlength: 120 },
    number: { type: String, trim: true, maxlength: 120 },
    text: {type: String}
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };

