import Pin from '../models/Pin.js';  // Import the Pin model

export const login = async (req, res) => {
  const { pin } = req.body;

  try {
    const storedPin = await Pin.findOne();  // Retrieve the stored PIN from the database
    if (storedPin && storedPin.pin === pin) {
      res.json({ success: true, token: 'valid_token' });  // Return a token on success
    } else {
      res.status(401).json({ success: false, message: 'Invalid PIN' });  // Invalid PIN
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });  // Handle server errors
  }
};

