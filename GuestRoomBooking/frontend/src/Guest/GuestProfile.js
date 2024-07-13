// frontend/src/Guest/GuestProfile.js

import React, { useState, useEffect } from 'react';
import './GuestProfile.css';  // Ensure GuestProfile.css exists and is properly styled

const GuestProfile = ({ guestId }) => {
  const [profileData, setProfileData] = useState({
    guestName: '',
    guestPhoto: '',
    guestEmail: '',
    guestPhone: '',
    guestAddress: ''
  });

  // useEffect(() => {
  //   const fetchGuestProfile = async () => {
  //     try {
  //       const response = await fetch(`/api/guests/${guestId}`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch guest profile');
  //       }
  //       const data = await response.json();
  //       setProfileData(data);
  //     } catch (error) {
  //       console.error('Error fetching guest profile:', error);
  //     }
  //   };

  //   fetchGuestProfile();
  // }, [guestId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/guests/${guestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profileData)
      });
      if (!response.ok) {
        throw new Error('Failed to update guest profile');
      }
      console.log('Guest profile updated successfully');
    } catch (error) {
      console.error('Error updating guest profile:', error);
    }
  };

  return (
    <div className="guest-profile-container">
      <h1>{guestId ? 'Update Guest Profile' : 'Create Guest Profile'}</h1>
      <form className="guest-profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Guest Name:</label>
          <input type="text" name="guestName" value={profileData.guestName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Guest Photo URL:</label>
          <input type="text" name="guestPhoto" value={profileData.guestPhoto} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="guestEmail" value={profileData.guestEmail} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="guestPhone" value={profileData.guestPhone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="guestAddress" value={profileData.guestAddress} onChange={handleChange} required />
        </div>
        <button type="submit">{guestId ? 'Update Profile' : 'Create Profile'}</button>
      </form>
    </div>
  );
};

export default GuestProfile;
