const express = require('express');
const router = express.Router();
const Room = require('../models/Rooms'); // Assuming your model is named Room
const Property = require('../models/Property'); // Assuming you have Property model for validation

// CREATE: Add a new room
router.post('/create', async (req, res) => {
  const {
    propertyId,
    ownerId,
    roomNumber,
    roomRentPerDay,
    minStayDays,
    maxStayDays,
    numberOfBeds,
    amenities,
    floorSize,
    status,
    ownerPhoneNumber,
    description
  } = req.body;

  try {
    // Validate propertyId existence
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Create new room
    const newRoom = new Room({
      propertyId,
      ownerId,
      roomNumber,
      roomRentPerDay,
      minStayDays,
      maxStayDays,
      numberOfBeds,
      amenities,
      floorSize,
      status,
      ownerPhoneNumber,
      description
    });

    // Save room to database
    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (error) {
    console.error('Error adding room:', error);
    res.status(500).json({ message: error.message });
  }
});

// READ: Get all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({ message: 'Failed to fetch rooms' });
  }
});

// READ: Get room by ID
router.get('/:roomId', async (req, res) => {
  const { roomId } = req.params;

  try {
    const room = await Rooms.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    console.error('Error fetching room:', error);
    res.status(500).json({ message: 'Failed to fetch room' });
  }
});


// DELETE: Delete room by ID
router.delete('/:roomId', async (req, res) => {
  const { roomId } = req.params;

  try {
    const room = await Room.findByIdAndDelete(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    console.error('Error deleting room:', error);
    res.status(500).json({ message: 'Failed to delete room' });
  }
});

module.exports = router;
