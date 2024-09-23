import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import customerRoutes from './routes/customerRoutes.js';
import pinRoutes from './routes/pinRoutes.js';
import emailRoutes from './routes/emailRoutes.js';
import noteRoutes from './routes/noteRoutes.js'; // Import note routes

import connectDB from './config/database.js';

dotenv.config();

const app = express();
connectDB();

app.use(cors({
  origin: [
    "https://law-firm-management-system-1.onrender.com",
    "http://localhost:5173",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Register routes
app.use('/api/customers', customerRoutes);
app.use('/api/pins', pinRoutes);
app.use('/api/emails', emailRoutes);
app.use('/api/notes', noteRoutes); // Register notes routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
