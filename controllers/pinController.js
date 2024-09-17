import Pin from '../models/Pin.js';

// Create a new PIN
export const createPin = async (req, res) => {
  const { pin } = req.body;

  if (!pin || pin.length !== 6) {
    return res.status(400).json({ message: 'Pin must be 6 digits long' });
  }

  try {
    // Optionally check if a PIN already exists and handle it accordingly
    await Pin.deleteMany({}); // Delete existing PINs before adding a new one
    const newPin = new Pin({ pin });
    await newPin.save();
    res.status(201).json({ message: 'PIN created successfully', newPin });
  } catch (error) {
    res.status(500).json({ message: 'Error creating PIN', error });
  }
};
