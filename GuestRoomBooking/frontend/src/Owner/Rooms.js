import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({
    roomNumber: '',
    roomRentPerDay: '',
    minStayDays: '',
    maxStayDays: '',
    numberOfBeds: '',
    amenities: '',
    floorSize: '',
    status: '',
    ownerPhoneNumber: '',
    description: ''
  });
  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get('/api/rooms');
      setRooms(response.data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  const createRoom = async () => {
    try {
      await axios.post('/rooms/create', newRoom);
      alert('Room created successfully!');
      fetchRooms();
      setNewRoom({
        roomNumber: '',
        roomRentPerDay: '',
        minStayDays: '',
        maxStayDays: '',
        numberOfBeds: '',
        amenities: '',
        floorSize: '',
        status: '',
        ownerPhoneNumber: '',
        description: ''
      });
    } catch (error) {
      console.error('Error creating room:', error);
      alert(error);
    }
  };
  

  const updateRoomStatus = async (roomId, newStatus) => {
    try {
      await axios.put(`/api/rooms/${roomId}`, { status: newStatus });
      alert('Room status updated successfully!');
      fetchRooms();
    } catch (error) {
      console.error('Error updating room status:', error);
      alert('Failed to update room status');
    }
  };

  const handleInputChange = (e, setRoom) => {
    const { name, value } = e.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value
    }));
  };

  const setCurrent = (room) => {
    setCurrentRoom(room);
  };

  return (
    <div>
      <h2>Room Management</h2>

      <form onSubmit={(e) => { e.preventDefault(); createRoom(); }}>
        <input type="text" name="roomNumber" value={newRoom.roomNumber} onChange={(e) => handleInputChange(e, setNewRoom)} placeholder="Room Number" required />
        <input type="number" name="roomRentPerDay" value={newRoom.roomRentPerDay} onChange={(e) => handleInputChange(e, setNewRoom)} placeholder="Room Rent Per Day" required />
        <input type="number" name="minStayDays" value={newRoom.minStayDays} onChange={(e) => handleInputChange(e, setNewRoom)} placeholder="Minimum Stay Days" required />
        <input type="number" name="maxStayDays" value={newRoom.maxStayDays} onChange={(e) => handleInputChange(e, setNewRoom)} placeholder="Maximum Stay Days" required />
        <input type="number" name="numberOfBeds" value={newRoom.numberOfBeds} onChange={(e) => handleInputChange(e, setNewRoom)} placeholder="Number of Beds" required />
        <input type="text" name="amenities" value={newRoom.amenities} onChange={(e) => handleInputChange(e, setNewRoom)} placeholder="Amenities" required />
        <input type="text" name="floorSize" value={newRoom.floorSize} onChange={(e) => handleInputChange(e, setNewRoom)} placeholder="Floor Size" required />
        <input type="text" name="ownerPhoneNumber" value={newRoom.ownerPhoneNumber} onChange={(e) => handleInputChange(e, setNewRoom)} placeholder="Owner Phone Number" required />
        <input type="text" name="description" value={newRoom.description} onChange={(e) => handleInputChange(e, setNewRoom)} placeholder="Description" required />
        <button type="submit">Add Room</button>
      </form>

      <div>
        
        <ul>
          {rooms.map(room => (
            <li key={room._id}>
              <p>Room Number: {room.roomNumber}</p>
              <p>Rent Per Day: {room.roomRentPerDay}</p>
              <p>Minimum Stay Days: {room.minStayDays}</p>
              <p>Maximum Stay Days: {room.maxStayDays}</p>
              <p>Number of Beds: {room.numberOfBeds}</p>
              <p>Amenities: {room.amenities}</p>
              <p>Floor Size: {room.floorSize}</p>
              <p>Status: {room.status}</p>
              <p>Owner Phone Number: {room.ownerPhoneNumber}</p>
              <p>Description: {room.description}</p>
              <button onClick={() => setCurrent(room)}>Edit</button>
              <button onClick={() => updateRoomStatus(room._id, 'Booked')}>Booked</button>
              <button onClick={() => updateRoomStatus(room._id, 'Available')}>Available</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Room;
