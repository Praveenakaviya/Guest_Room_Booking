// BookingForm.js

import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    propertyId: '',
    propertyName: '',
    roomId: '',
    roomNumber: '',
    ownerId: '',
    startingDate: '',
    endDate: '',
    numOfDaysStaying: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/bookings/', bookingData);
      console.log('Booking request sent:', response.data);
      // Optionally: Handle success, reset form, show confirmation message
      setBookingData({
        propertyId: '',
        propertyName: '',
        roomId: '',
        roomNumber: '',
        ownerId: '',
        startingDate: '',
        endDate: '',
        numOfDaysStaying: 0,
      });
    } catch (error) {
      console.error('Error sending booking request:', error);
      // Optionally: Handle error, show error message to user
    }
  };

  return (
    <div className="booking-form">
      <h2>Book a Room</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Property ID:
          <input type="text" name="propertyId" value={bookingData.propertyId} onChange={handleChange} required />
        </label>
        <label>
          Property Name:
          <input type="text" name="propertyName" value={bookingData.propertyName} onChange={handleChange} required />
        </label>
        <label>
          Room ID:
          <input type="text" name="roomId" value={bookingData.roomId} onChange={handleChange} required />
        </label>
        <label>
          Room Number:
          <input type="text" name="roomNumber" value={bookingData.roomNumber} onChange={handleChange} required />
        </label>
        <label>
          Owner ID:
          <input type="text" name="ownerId" value={bookingData.ownerId} onChange={handleChange} required />
        </label>
        <label>
          Starting Date:
          <input type="date" name="startingDate" value={bookingData.startingDate} onChange={handleChange} required />
        </label>
        <label>
          End Date:
          <input type="date" name="endDate" value={bookingData.endDate} onChange={handleChange} required />
        </label>
        <label>
          Number of Days Staying:
          <input type="number" name="numOfDaysStaying" value={bookingData.numOfDaysStaying} onChange={handleChange} required />
        </label>
        <button type="submit">Send Booking Request</button>
      </form>
    </div>
  );
};

export default BookingForm;
