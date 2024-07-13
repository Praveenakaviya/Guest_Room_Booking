const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a schema for Booking
const bookingSchema = new Schema({
  propertyId: { type: Schema.Types.ObjectId, ref: 'Property', required: true },
  propertyName: { type: String, required: true }, // You may want to populate this from the Property model
  Norooms: { type: Number, required: true }, // Confirm the correct field name
  roomNumber: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, ref: 'Owner', required: true },
  startingDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  numOfDaysStaying: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  ownerResponse: { type: String },
});

// Export the Booking model
module.exports = mongoose.model('Booking', bookingSchema);
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// CREATE: Add a new booking
router.post('/create', async (req, res) => {
  const {
    propertyId,
    roomNumber,
    ownerId,
    startingDate,
    endDate,
    numOfDaysStaying,
    status,
    ownerResponse
  } = req.body;

  try {
    const newBooking = new Booking({
      propertyId,
      roomNumber,
      ownerId,
      startingDate,
      endDate,
      numOfDaysStaying,
      status,
      ownerResponse
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('Error adding booking:', error);
    res.status(500).json({ error: 'Failed to add booking' });
  }
});

// READ: Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});
