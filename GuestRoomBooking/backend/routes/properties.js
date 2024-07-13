const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Property=require('../models/Property');
const { type } = require('os');

const router = express.Router();

// Define storage for the images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../frontend/public/images');

    // Check if the directory exists, if not, create it
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append current timestamp to the file name
  }
});

// Initialize upload variable
const upload = multer({ storage: storage });

router.post('/add', upload.single('propertyPicture'), async (req, res) => {
  try {
    const { propertyName, propertyAddress, numberOfRooms, ownerName, ownerPhoneNo, city, state, zipcode,propertyType, status } = req.body;
    console.log('Request Body:', req.body);
    console.log('Uploaded File:', req.file);

    // Check if a file was uploaded
    const propertyPicture = req.file ? req.file.filename : null;
    console.log('propertyPicture:', propertyPicture);

    // Create a new property document
    const newProperty = new Property({
      propertyName,
      propertyAddress,
      numberOfRooms,
      ownerName,
      ownerPhoneNo,
      city,
      state,
      zipcode,
      status,
      propertyType,
      propertyPicture,
    });

    // Save the property to the database
    await newProperty.save();

    res.status(201).json({ message: 'Property created successfully', property: newProperty });
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/list', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
