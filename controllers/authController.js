// import Pin from '../models/Pin.js';  // Import the Pin model

// export const login = async (req, res) => {
//   const { pin } = req.body;

//   try {
//     const storedPin = await Pin.findOne();  // Retrieve the stored PIN from the database
//     if (storedPin && storedPin.pin === pin) {
//       res.json({ success: true, token: 'valid_token' });  // Return a token on success
//     } else {
//       res.status(401).json({ success: false, message: 'Invalid PIN' });  // Invalid PIN
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Server error' });  // Handle server errors
//   }
// };

import Pin from '../models/Pin.js';  // Import the Pin model

export const login = async (req, res) => {
  const { pin } = req.body;

  try {
    // Retrieve the stored PIN from the database
    const storedPin = await Pin.findOne();
    console.log('Stored PIN Document:', storedPin);  // Debugging log
    console.log('PIN from request:', pin);  // Debugging log

    if (!storedPin) {
      return res.status(500).json({ success: false, message: 'No PIN found in the database' });
    }

    // Check if the stored PIN matches the provided PIN
    if (storedPin.pin === pin) {
      res.json({ success: true, token: 'valid_token' });  // Return a token on success
    } else {
      res.status(401).json({ success: false, message: 'Invalid PIN' });  // Invalid PIN
    }
  } catch (error) {
    console.error('Server error:', error);  // Debugging log
    res.status(500).json({ success: false, message: 'Server error' });  // Handle server errors
  }
};

