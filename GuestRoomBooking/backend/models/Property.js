const mongoose = require('mongoose');
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid'); // import uuid

// Define the Room schema
// const RoomSchema = new Schema({
//   roomId: { type: String, default: uuidv4, unique: true },
//   roomNumber: { type: String, required: true },
//   roomRentPerDay: { type: String, required: true },
//   minStayDays: { type: String, required: true },
//   maxStayDays: { type: String, required: true },
//   numberOfBeds: { type: String, required: true },
//   amenities: { type: String, required: true },
//   floorSize: { type: String, required: true },
//   status: { type: String, required: true, enum: ['available', 'booked'], default: 'available' },
//   ownerPhoneNumber: { type: String, required: true },
//   description: { type: String, required: true },
//   roomPictures: { type: [String], required: true },
// });z

// Define the Property schema
const PropertySchema = new Schema({
  propertyId: { type: String, default: uuidv4, unique: true },
  propertyName: { type: String, required: true },
  propertyAddress: { type: String, required: true },
  numberOfRooms: { type: Number, required: true },
  ownerName: { type: String, required: true },
  ownerPhoneNo: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  status: { type: String, required: true, default: 'available' },
  propertyType: {
    type: String,
    required: true,
    enum: ['Apartment', 'House', 'Villa', 'Resort'], // Valid property types
  },
  propertyPicture: { type: String, required: false },
 
}, { timestamps: true });

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;
