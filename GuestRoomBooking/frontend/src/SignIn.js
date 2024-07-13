import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'owner', // Default role set to 'owner'
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const { email, password, role } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/login/signin', {
        email,
        password,
        role,
      });
      setMessage('Login successful');
      console.log(res.data);
      // Save the token to localStorage or state management
      localStorage.setItem('token', res.data.token);
      // Redirect based on role
      if (role === 'owner') {
        navigate('/owner-dashboard');
      } else {
        navigate('/guest-dashboard');
      }
    } catch (error) {
      setMessage('Login failed');
      console.error(error);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>{role === 'owner' ? 'Owner SignIn' : 'Guest SignIn'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <div>
            <label htmlFor="role">Select Role:</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={handleChange}
              required
            >
              <option value="owner">Owner</option>
              <option value="guest">Guest</option>
            </select>
          </div>
          <button type="submit">Sign In</button>
        </form>
        {message && <p className="message">{message}</p>}
        <Link to="/forgot-password">Forgot Password?</Link>
        <p>
          Don't have an account? <Link to="/signup">Sign Up now</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
