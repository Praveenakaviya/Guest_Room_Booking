const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  }
}, {
  collection: "Owners" // Specify the collection name if different from the pluralized model name
});

const Owner = mongoose.model("Owner", OwnerSchema);

module.exports = Owner;
