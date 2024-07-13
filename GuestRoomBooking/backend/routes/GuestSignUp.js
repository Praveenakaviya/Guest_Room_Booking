const express = require('express');
const router = express.Router();
const Guest = require('../models/GuestSignUp');
const bcrypt = require('bcryptjs');

// Guest signup route
router.post('/guestsignup', async (req, res) => {
  const { userName, email, phone, password } = req.body;

  // Input validation (this can be extended)
  if (!userName || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if email already exists
    let existingGuest = await Guest.findOne({ email });
    if (existingGuest) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new guest
    const newGuest = new Guest({
      userName,
      email,
      phone,
      password: hashedPassword,
    });

    // Save the guest to the database
    await newGuest.save();

    // Respond with success message and guest object
    res.status(201).json({ message: 'Guest signed up successfully', guest: newGuest });
  } catch (error) {
    console.error(error);
    // Handle server error
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
