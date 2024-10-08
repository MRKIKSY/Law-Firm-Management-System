import express from 'express';
import { login } from '../controllers/authController.js'; // Import the login controller

const router = express.Router();

// Define the login route
router.post('/login', login);

export default router;
