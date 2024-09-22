const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/emailController');

// Route to handle sending emails
router.post('/send-email', sendEmail);

module.exports = router;
