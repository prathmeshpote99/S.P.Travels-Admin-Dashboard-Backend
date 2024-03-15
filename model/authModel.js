const mongoose = require("mongoose");
const validator = require("validator");

const authScheama = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Error("Not vali Email");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  corporate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("userDetails", authScheama);
