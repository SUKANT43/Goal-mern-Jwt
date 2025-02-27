const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Enter the text value"],
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("Goal", goalSchema);
