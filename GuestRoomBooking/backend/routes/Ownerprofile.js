const express = require('express');
const router = express.Router();
const Owner = require('../models/Ownerprofile.js');

// Get all owners
router.get('/', async (req, res) => {
  try {
    const owners = await Owner.find();
    res.status(200).json(owners);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get owner profile by ID
router.get('/:id', async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }
    res.status(200).json(owner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new owner profile
router.post('/', async (req, res) => {
  try {
    const { ownerName, profilePhoto, email, phone, address, numberOfProperties, numberOfRooms } = req.body;
    const newOwner = new Owner({ ownerName, profilePhoto, email, phone, address, numberOfProperties, numberOfRooms });
    await newOwner.save();
    res.status(201).json({ message: 'Owner profile created successfully', owner: newOwner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update owner profile
router.patch('/:id', async (req, res) => {
  try {
    const { ownerName, profilePhoto, email, phone, address, numberOfProperties, numberOfRooms } = req.body;
    const owner = await Owner.findByIdAndUpdate(req.params.id, { ownerName, profilePhoto, email, phone, address, numberOfProperties, numberOfRooms }, { new: true });
    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }
    res.status(200).json({ message: 'Owner profile updated successfully', owner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete owner profile
router.delete('/:id', async (req, res) => {
  try {
    const owner = await Owner.findByIdAndDelete(req.params.id);
    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }
    res.status(200).json({ message: 'Owner deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
