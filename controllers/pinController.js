import Pin from '../models/Pin.js';

export const login = async (req, res) => {
  const { pin } = req.body;

  try {
    console.log('Received PIN:', pin); // Debugging
    const storedPin = await Pin.findOne();  // Retrieve the stored PIN from the database
    
    if (storedPin) {
      console.log('Stored PIN:', storedPin.pin); // Debugging
      if (storedPin.pin === pin) {
        res.json({ success: true, token: 'valid_token' });  // Return a token on success
      } else {
        res.status(401).json({ success: false, message: 'Invalid PIN' });  // Invalid PIN
      }
    } else {
      res.status(404).json({ success: false, message: 'No PIN found' });  // No PIN in the database
    }
  } catch (error) {
    console.error('Error:', error); // Debugging
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
