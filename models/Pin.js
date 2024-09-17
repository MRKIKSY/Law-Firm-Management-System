import mongoose from 'mongoose';

const PinSchema = new mongoose.Schema({
  pin: {
    type: String,
    required: true,
    maxLength: 6,
  },
});

export default mongoose.model('Pin', PinSchema);
