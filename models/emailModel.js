import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  senderName: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  bcc: { type: String },
  cc: { type: String },
  dateSent: { type: Date, default: Date.now }, // Automatically set the date sent
});

export default mongoose.model('Email', emailSchema);
