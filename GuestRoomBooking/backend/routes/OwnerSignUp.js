const express = require('express');
const router = express.Router();
const Owner = require('../models/OwnerSignUp');

router.post('/OwnerSignUp', async (req, res) => {
  const { email, password, confirmPassword, userName, phoneNo } = req.body;

  // Create a new owner
  const newOwner = new Owner({
    email,
    password,
    userName,
    phoneNo
  });

  try {
    await newOwner.save();
    res.status(201).json({ id: newOwner._id, message: 'Owner created successfully' });
  } catch (error) {
    console.error('Error creating owner:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
