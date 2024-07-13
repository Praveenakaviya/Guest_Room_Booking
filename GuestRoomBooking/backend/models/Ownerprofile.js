const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  profilePhoto: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  numberOfProperties: { type: Number },
  numberOfRooms: { type: Number },
});

module.exports = mongoose.model('Owner', ownerSchema);
