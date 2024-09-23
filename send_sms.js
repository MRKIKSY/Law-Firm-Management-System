import dotenv from 'dotenv';
import twilio from 'twilio';

// Load environment variables from .env file
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Use your Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN; // Use your Auth Token
const client = twilio(accountSid, authToken);

async function sendSms() {
    try {
        const message = await client.messages.create({
            body: 'Hello from Twilio!', // The message content
            from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
            to: '+447867374736', // Replace with your test number
        });
        console.log('Message sent:', message.sid);
    } catch (error) {
        console.error('Error sending SMS:', error);
    }
}

sendSms();
