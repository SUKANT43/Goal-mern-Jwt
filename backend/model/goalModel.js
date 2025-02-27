const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user:{
        type:mongoose.Schema.Types.ObjectId,    //user model for reference
        ref:"auth",   //reference table,
        required:true 
    },
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
