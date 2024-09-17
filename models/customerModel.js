import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  caseDetails: { type: String, required: true },
  pdfFile: { type: String },  // Stores the filename of the uploaded PDF
}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;
