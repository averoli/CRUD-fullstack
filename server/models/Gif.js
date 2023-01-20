const mongoose = require("mongoose");

const GifSchema = new mongoose.Schema({
  gifsFile: {
    type: String,
    required: [true, "Gif link is required"],
    trim: true,
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  genre: {
    type: String,
    // required: [true, "Genre is required"],
    trim: true,
  },
  tags: {
    type: Object,
    required: [true, "Tags is required"],
    trim: true,
  },
});

module.exports = mongoose.model("Gif", GifSchema);
