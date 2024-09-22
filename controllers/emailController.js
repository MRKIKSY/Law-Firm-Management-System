const nodemailer = require('nodemailer');
const Email = require('../models/emailModel');

exports.sendEmail = async (req, res) => {
  const { email, subject, body, bcc, cc, senderName } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'Gmail', // You can configure another email service like SendGrid
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  let mailOptions = {
    from: `"${senderName}" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: subject,
    text: body,
    cc: cc,
    bcc: bcc,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    // Save email details to the database
    const newEmail = new Email({
      senderName,
      email,
      subject,
      body,
      bcc,
      cc,
    });

    await newEmail.save(); // Save to MongoDB

    res.status(200).json({ message: 'Email sent and saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
};
