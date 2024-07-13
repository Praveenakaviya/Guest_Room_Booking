const express = require('express');
const router = express.Router();
const Guest = require('../models/Guestprofile'); // Assuming Guest model is defined in models/Guest.js
// POST create new guest profile
router.post('/create:id', async (req, res) => {
  const { guestName, guestPhoto, guestEmail, guestPhone, guestAddress } = req.body;
  try {
    const newGuest = new Guest({
      guestName,
      guestPhoto,
      guestEmail,
      guestPhone,
      guestAddress
    });
    await newGuest.save();
    res.status(201).json(newGuest);
  } catch (error) {
    console.error('Error creating guest profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
