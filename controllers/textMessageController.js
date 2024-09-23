// import TextMessage from '../models/TextMessage.js';
// import twilio from 'twilio';

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// // Log the Twilio credentials for debugging
// console.log('Account SID:', accountSid); // Ensure this is correct
// console.log('Auth Token:', authToken);    // Ensure this is correct

// const client = twilio(accountSid, authToken);

// // Send and save SMS
// export const sendAndSaveSms = async (req, res) => {
//   const { phone, message } = req.body;

//   try {
//     // Send SMS using Twilio
//     const smsResponse = await client.messages.create({
//       body: message,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: phone,
//     });

//     // Save SMS to the database
//     const newTextMessage = new TextMessage({
//       phone,
//       message,
//       status: 'Sent',
//     });

//     await newTextMessage.save();

//     res.status(200).json({
//       success: true,
//       message: 'SMS sent and saved successfully',
//       smsResponse,
//     });
//   } catch (error) {
//     // Handle failure (e.g., if Twilio fails)
//     const failedTextMessage = new TextMessage({
//       phone,
//       message,
//       status: 'Failed',
//     });

//     await failedTextMessage.save();

//     res.status(500).json({
//       success: false,
//       message: 'Failed to send SMS',
//       error: error.message,
//     });
//   }
// };
