// models/Guest.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const { default: GuestProfile } = require('../../frontend/src/Guest/GuestProfile');

const guestSchema = new mongoose.Schema({
  guestName: {
    type: String,
    required: true,
  },
  guestPhoto: {
    type: String,
  },
  guestEmail: {
    type: String,
    required: true,
    unique: true,
  },
  guestPhone: {
    type: String,
    required: true,
  },
  guestAddress: {
    type: String,
    required: true,
  },
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = GuestProfile;
