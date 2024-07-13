const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


// const mongo_url = 'mongodb+srv://praveena123:praveena123@cluster0.axl9ml2.mongodb.net/Guest_Room_Booking?retryWrites=true&w=majority';
const mongo_url=process.env.MONGODB_URI;
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

connection.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); // Exit process with failure on connection error
});

module.exports = connection;
