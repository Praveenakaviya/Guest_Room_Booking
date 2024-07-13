const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
    required: true
  },
  roomNumber: {
    type: String,
    required: true
  },
  roomRentPerDay: {
    type: Number,
    required: true
  },
  minStayDays: {
    type: Number,
    required: true
  },
  maxStayDays: {
    type: Number,
    required: true
  },
  numberOfBeds: {
    type: Number,
    required: true
  },
  amenities: {
    type: String,
    required: true
  },
  floorSize: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  ownerPhoneNumber: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Room = mongoose.model('Rooms', roomSchema);

module.exports = Room;
