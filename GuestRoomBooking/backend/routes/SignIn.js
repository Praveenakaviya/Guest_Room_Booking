// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { Guest } = require('../models/GuestSignUp');
// const { Owner } = require('../models/OwnerSignUp');
// const router = express.Router();
// router.post('/signin', async (req, res) => {
//     try {
//       const { email, password, role } = req.body;
  
//       let user;
  
//       if (role === 'owner') {
//         user = await Owner.findOne({ email });
//       } else if (role === 'guest') {
//         user = await Guest.findOne({ email });
//       } else {
//         return res.status(400).json({ error: 'Invalid role' });
//       }
  
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }
  
//       const isMatch = await bcrypt.compare(password, user.password);
  
//       if (isMatch) {
//         res.json({ match: true, id: user._id });
//       } else {
//         res.json({ match: false });
//       }
//     } catch (error) {
//       console.error('Error signing in:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
  



// module.exports = router;

const express = require('express');
const bcrypt = require('bcryptjs');
const { Guest } = require('../models/GuestSignUp');
const { Owner } = require('../models/OwnerSignUp');
const router = express.Router();

router.post('/signin', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    let user;

    if (role === 'owner') {
      user = await Owner.findOne({ email });
    } else if (role === 'guest') {
      user = await Guest.findOne({ email });
    } else {
      return res.status(400).json({ error: 'Invalid role' });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ match: true, id: user._id });
    } else {
      res.json({ match: false });
    }
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

