const mongoose = require("mongoose");

const photoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Моля добавете заглавие на снимката"],
    },
    description: {
      type: String,
      required: [true, "Моля добавете описание"],
    },
    photo: { type: String, required: [true, "Моля добавете снимка"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);
