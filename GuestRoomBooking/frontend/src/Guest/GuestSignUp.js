// GuestSignUp.js

import React, { useState } from 'react';
import axios from 'axios';
import './GuestSignUp.css';

const GuestSignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/guestsignup', {
        userName,
        email,
        phone,
        password,
      });
      console.log(response.data); // Handle success message or redirect to login
      // Redirect to login or display success message
    } catch (error) {
      setError(error.response.data.message || 'Server error');
    }
  };

  return (
    <div className="signup-container">
    <h2>Guest Sign Up</h2>
    {error && <p className="error-message">{error}</p>}
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Phone No:</label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <label>Confirm Password:</label>
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

      <button type="submit">Sign Up</button>
    </form>
    <p>Already have an account? <a href="/signin">Sign In</a></p>
  </div>
  );
};

export default GuestSignUp;
