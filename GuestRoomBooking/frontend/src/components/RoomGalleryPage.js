import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyDetails = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('/gallery/')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  }, []);

  if (properties.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Property List</h1>
      {properties.map((property) => (
        <div key={property._id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <p><strong>Property Name:</strong> {property.propertyName}</p>
          <p><strong>Property Address:</strong> {property.propertyAddress}</p>
          <p><strong>Number of Rooms:</strong> {property.numberOfRooms}</p>
          <p><strong>Owner Name:</strong> {property.ownerName}</p>
          <p><strong>Owner Phone No:</strong> {property.ownerPhoneNo}</p>
          <p><strong>City:</strong> {property.city}</p>
          <p><strong>State:</strong> {property.state}</p>
          <p><strong>Zipcode:</strong> {property.zipcode}</p>
          <p><strong>Status:</strong> {property.status}</p>
          <p><strong>Property ID:</strong> {property.propertyId}</p>
          <p><strong>Created At:</strong> {new Date(property.createdAt).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(property.updatedAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
