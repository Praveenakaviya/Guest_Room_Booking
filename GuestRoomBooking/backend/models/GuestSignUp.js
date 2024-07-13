const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('Guest', guestSchema);
