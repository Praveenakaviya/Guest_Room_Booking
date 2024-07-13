import React, { useState } from 'react';
import './Property.css';

const Property = () => {
  const [propertyData, setPropertyData] = useState({
    propertyName: '',
    propertyAddress: '',
    numberOfRooms: '',
    ownerName: '',
    ownerPhoneNo: '',
    city: '',
    state: '',
    zipcode: '',
    status: 'available',
  });
  const [propertyPicture, setPropertyPicture] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleFileChange = (e) => {
    setPropertyPicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in propertyData) {
      formData.append(key, propertyData[key]);
    }
    if (propertyPicture) {
      formData.append('propertyPicture', propertyPicture);
    }

    try {
      const response = await fetch('/property/create', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Property created successfully');
        setPropertyData({
          propertyName: '',
          propertyAddress: '',
          numberOfRooms: '',
          ownerName: '',
          ownerPhoneNo: '',
          city: '',
          state: '',
          zipcode: '',
          status: 'available',
        });
        setPropertyPicture(null);
      } else {
        alert('Failed to create property');
      }
    } catch (error) {
      console.error('Error creating property:', error);
      alert('An error occurred while creating the property');
    }
  };

  return (
    <div className="property-container">
      <h2>Create New Property</h2>
      <form onSubmit={handleSubmit}>
        <label>Property Name:
          <input type="text" name="propertyName" value={propertyData.propertyName} onChange={handleChange} required />
        </label>
        <label>Property Address:
          <input type="text" name="propertyAddress" value={propertyData.propertyAddress} onChange={handleChange} required />
        </label>
        <label>Number of Rooms:
          <input type="number" name="numberOfRooms" value={propertyData.numberOfRooms} onChange={handleChange} required />
        </label>
        <label>Owner Name:
          <input type="text" name="ownerName" value={propertyData.ownerName} onChange={handleChange} required />
        </label>
        <label>Owner Phone Number:
          <input type="text" name="ownerPhoneNo" value={propertyData.ownerPhoneNo} onChange={handleChange} required />
        </label>
        <label>City:
          <input type="text" name="city" value={propertyData.city} onChange={handleChange} required />
        </label>
        <label>State:
          <input type="text" name="state" value={propertyData.state} onChange={handleChange} required />
        </label>
        <label>Zipcode:
          <input type="text" name="zipcode" value={propertyData.zipcode} onChange={handleChange} required />
        </label>
        <label>Property Picture:
          <input type="file" name="propertyPicture" onChange={handleFileChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Property;
