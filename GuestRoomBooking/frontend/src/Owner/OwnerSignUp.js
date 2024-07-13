// import React, { useState } from 'react';
// import './OwnerSignUp.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const OwnerSignUp = () => {
//   const [ownerDetails, setOwnerDetails] = useState({
//     userName: '',
//     email: '',
//     phoneNo: ''
//     password: '',
//     confirmPassword: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOwnerDetails({ ...ownerDetails, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(ownerDetails);
//       const response = await axios.post('/owner/signup/OwnerSignUp', ownerDetails);
      
//       const id = response.data.id;
//       navigate(`/Owner/Profile/${id}`);
//     } catch (error) {
//       console.error('Error creating owner:', error);
//     }
//   };

//   return (
//     <div className="signup-container">
//     <h2>Owner Sign Up</h2>
//     {error && <p className="error-message">{error}</p>}
//     <form onSubmit={handleSubmit}>
//       <label>Username:</label>
//       <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />

//       <label>Email:</label>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

//       <label>Phone No:</label>
//       <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

//       <label>Password:</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//       <label>Confirm Password:</label>
//       <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

//       <button type="submit">Sign Up</button>
//     </form>
//     <p>Already have an account? <a href="/signin">Sign In</a></p>
//   </div>
//   );
// };

// export default OwnerSignUp;
import React, { useState } from 'react';
import './OwnerSignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OwnerSignUp = () => {
  const [ownerDetails, setOwnerDetails] = useState({
    userName: '',
    email: '',
    phoneNo: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOwnerDetails({ ...ownerDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (ownerDetails.password !== ownerDetails.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const response = await axios.post('/owner/signup/OwnerSignUp', ownerDetails);
      const id = response.data.id;
      navigate(`/Owner/Profile/${id}`);
    } catch (error) {
      console.error('Error creating owner:', error);
      setError('Error creating owner');
    }
  };

  return (
    <div className="signup-container">
      <h2>Owner Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="userName"
          value={ownerDetails.userName}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={ownerDetails.email}
          onChange={handleChange}
          required
        />

        <label>Phone No:</label>
        <input
          type="tel"
          name="phoneNo"
          value={ownerDetails.phoneNo}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={ownerDetails.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={ownerDetails.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/signin">Sign In</a></p>
    </div>
  );
};

export default OwnerSignUp;

