// BookingDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingDetails.css';

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/book//');
      setBookings(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError('Error fetching bookings. Please try again later.');
      setLoading(false);
    }
  };

  const handleConfirmBooking = async (bookingId) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/bookings/${bookingId}/confirm`);
      console.log('Booking confirmed:', response.data);
      fetchBookings(); // Refresh bookings after confirmation
    } catch (error) {
      console.error('Error confirming booking:', error);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/bookings/${bookingId}/cancel`);
      console.log('Booking cancelled:', response.data);
      fetchBookings(); // Refresh bookings after cancellation
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  };

  if (loading) {
    return <div>Loading booking details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Property Name</th>
              <th>Room Number</th>
              <th>Owner ID</th>
              <th>Starting Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.propertyName}</td>
                <td>{booking.roomNumber}</td>
                <td>{booking.ownerId}</td>
                <td>{new Date(booking.startingDate).toLocaleDateString()}</td>
                <td>{new Date(booking.endDate).toLocaleDateString()}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status === 'pending' && (
                    <div>
                      <button onClick={() => handleConfirmBooking(booking._id)}>Confirm</button>
                      <button onClick={() => handleCancelBooking(booking._id)}>Cancel</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingDetails;
