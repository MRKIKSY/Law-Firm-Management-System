import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import customerRoutes from './routes/customerRoutes.js';
import pinRoutes from './routes/pinRoutes.js';
import emailRoutes from './routes/emailRoutes.js'; // Import the email routes
import connectDB from './config/database.js'; // Import the database connection

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: [
    "https://law-firm-management-system-1.onrender.com",
    "https://frontend-law-firm-database.onrender.com",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));

// Routes
app.use('/api/customers', customerRoutes);
app.use('/api/pins', pinRoutes);
app.use('/api/emails', emailRoutes); // Register the email routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
