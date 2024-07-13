// OwnerProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OwnerProfile.css'; // Import CSS file

const OwnerProfile = ({ ownerId }) => {
  const [profileData, setProfileData] = useState({
    ownerName: '',
    profilePhoto: '',
    email: '',
    phoneNo: '',
    address: '',
    numberOfProperties: 0,
    numberOfRooms: 0,
    profilePhotoFile: null // New state for handling file upload
  });

  useEffect(() => {
    if (ownerId) {
      // Fetch existing owner profile if ownerId is provided (for update)
      fetchOwnerProfile(ownerId);
    }
  }, [ownerId]);

  const fetchOwnerProfile = async (id) => {
    try {
      const response = await axios.get(`/api/owner/${id}`);
      const { ownerName, profilePhoto, email, phone, address, numberOfProperties, numberOfRooms } = response.data;
      setProfileData({ ownerName, profilePhoto, email, phone, address, numberOfProperties, numberOfRooms, profilePhotoFile: null });
    } catch (error) {
      console.error('Error fetching owner profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData({
        ...profileData,
        profilePhotoFile: file,
        profilePhoto: URL.createObjectURL(file) // Display image preview
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('ownerName', profileData.ownerName);
      formData.append('email', profileData.email);
      formData.append('phone', profileData.phone);
      formData.append('address', profileData.address);
      formData.append('numberOfProperties', profileData.numberOfProperties);
      formData.append('numberOfRooms', profileData.numberOfRooms);
      if (profileData.profilePhotoFile) {
        formData.append('profilePhoto', profileData.profilePhotoFile);
      }

      if (ownerId) {
        // Update existing owner profile
        await axios.patch(`/api/owner/${ownerId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Owner profile updated successfully');
        // Handle success
      } else {
        // Create new owner profile
        await axios.post('/api/owner', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Owner profile created successfully');
        // Handle success
      }
    } catch (error) {
      console.error('Error submitting owner profile:', error);
      // Handle error
    }
  };

  return (
    <div className="owner-profile-container">
      <h1>{ownerId ? 'Update Owner Profile' : 'Create Owner Profile'}</h1>
      <form onSubmit={handleSubmit}>
        <label>Owner Name:</label>
        <input type="text" name="ownerName" value={profileData.ownerName} onChange={handleChange} required />
        <br />
        <label>Profile Photo:</label>
        {profileData.profilePhoto && (
          <img src={profileData.profilePhoto} alt="Profile Preview" className="profile-preview" />
        )}
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" value={profileData.email} onChange={handleChange} required />
        <br />
        <label>Phone:</label>
        <input type="text" name="phone" value={profileData.phone} onChange={handleChange} required />
        <br />
        <label>Address:</label>
        <input type="text" name="address" value={profileData.address} onChange={handleChange} required />
        <br />
        {ownerId && (
          <div>
            <label>Number of Properties:</label>
            <input type="number" name="numberOfProperties" value={profileData.numberOfProperties} onChange={handleChange} />
            <br />
            <label>Number of Rooms:</label>
            <input type="number" name="numberOfRooms" value={profileData.numberOfRooms} onChange={handleChange} />
            <br />
          </div>
        )}
        <button type="submit">{ownerId ? 'Update Profile' : 'Create Profile'}</button>
      </form>
    </div>
  );
};

export default OwnerProfile;
