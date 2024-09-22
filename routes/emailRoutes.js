import express from 'express';
import { sendEmail } from '../controllers/emailController.js'; // Update the path if necessary

const router = express.Router();

// Route to handle sending emails
router.post('/send-email', sendEmail);

export default router; // Use ES module export
