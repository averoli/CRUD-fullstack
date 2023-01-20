const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "The email is required"],
    trim: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `The email ${props.value} is not valid`,
    },
  },
  password: {
    type: String,
    required: [true, "The password is required"],
    minlength: [8, "The password is too short"],
  },
});

module.exports = mongoose.model("User", UserSchema);
