// server.js
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongooseConnection = require('./config/db'); // Assuming your connection export is named `connection`
require('dotenv').config();

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));
// Connect to MongoDB (using your existing connection)
mongooseConnection.on('connected', () => {
  console.log('MongoDB Connected');
});

mongooseConnection.on('error', (error) => {
  console.error('MongoDB Connection Error:', error);
  process.exit(1); // Exit process with failure on connection error
});

const guestSignUpRouter = require('./routes/GuestSignUp');
const bookingRoutes = require('./routes/Booking');
const ownerSignUpRoutes = require('./routes/OwnerSignUp');
const propertiesRoutes = require('./routes/properties');
const roomsRoutes = require('./routes/Rooms');
const SignIn = require('./routes/SignIn');
const Gallery = require('./routes/RoomGallery');
// const GuestProfile = require('./routes/Guestprofile');
// const OwnerProfile = require('./routes/Ownerprofile');

// Mounting routes
app.use('/guest', guestSignUpRouter);
app.use('/book', bookingRoutes);
app.use('/owner/signup', ownerSignUpRoutes);
app.use('/property', propertiesRoutes);
app.use('/rooms', roomsRoutes); 
app.use('/gallery',Gallery)
app.use('/login', SignIn);
// app.use('/guestprofile',GuestProfile);
// app.use('/Ownerprofile',OwnerProfile);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the guest room booking application API');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'frontend','public', 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});